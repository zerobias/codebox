console.log('init rollup service')
import {resolve, dirname} from 'path'
import {rollup} from 'rollup'
// import babel from 'rollup-plugin-babel'
import fetch from 'cross-fetch'

import {task, send} from '../lib/lambdaTask'
// import babelConfig from './defaultBabelConfig'

// const babelPlugin = babel(babelConfig)

export default task({
  name: 'rollup',
  async fn(bodyRaw, event, context) {
    console.log('start rollup request')
    const body = Object.assign({}, {
      files: [],
      entry: 'repl.js',
    }, bodyRaw)
    const files = body.files
    const filesByID = new Map()
    const urlsByID = new Map()
    for (const file of files) {
      filesByID.set(file.name, file)
    }
    function fetchIfUncached(url) {
      if (!urlsByID.has(url)) {
        urlsByID.set(url, fetch(url)
          .then(r => r.text())
          .catch(err => {
            console.error(err);
            urlsByID.delete(url);
          }));
      }
      return urlsByID.get(url);
    }
    console.log('init rollup')
    const build = await rollup({
      input: body.entry,
      plugins: [
        {
          resolveId(importee, importer) {
            if (!importer) return importee;
            console.log({
              importee,
              importer,
              "importee[0] !== '.'": importee[0] !== '.',
              'dirname(importer)': dirname(importer),
              'resolve(dirname(importer), importee)': resolve(dirname(importer), importee),
              "resolve(dirname(importer), importee).replace(/^\.\//, '')": resolve(dirname(importer), importee).replace(/^\.\//, ''),
            })
            if (importee[0] !== '.') return false;

            const resolved = resolve(dirname(importer), importee).replace(/^\.\//, '');
            if (filesByID.has(resolved)) return resolved;
            const resolvedJS = `${resolved}.js`;
            if (filesByID.has(resolvedJS)) return resolvedJS;
            const resolvedJSON = `${resolved}.json`;
            if (filesByID.has(resolvedJSON)) return resolvedJSON;
            throw new Error(`Could not resolve '${importee}' from '${importer}'`);
          },
          load(id) {
            if (id.startsWith(`https://`) || id.startsWith(`http://`)) return fetchIfUncached(id);
            return filesByID.get(id).code;
          }
				},
        // jsonPlugin,
        // babelPlugin,
      ],
    })
    console.log('generate bundle')
    const generated = await build.generate({
      format: 'umd',
      name: 'myBundle',
      globals: {},
    })
    console.log('generated', generated)
    return send(200, {
      code: generated,
    })
  },
})
