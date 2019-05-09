
console.log('init rollup service')
import {resolve, dirname} from 'rollup-plugin-node-builtins/src/es6/path'
import {rollup} from 'rollup/dist/rollup.browser.es'
// import babel from 'rollup-plugin-babel'
// import json from 'rollup-plugin-json'

import taskService from '../lib/taskService'
// import babelConfig from './defaultBabelConfig'

// const babelPlugin = babel(babelConfig)
// const jsonPlugin = json({
//   preferConst: true,
//   indent: '  ',
// })

export default taskService({
  serviceName: 'rollup',
  async task(ctx, bodyRaw) {
    console.log('start rollup request')
    const body = Object.assign({}, {
      files: [],
      entry: 'repl.js',
    }, bodyRaw)
    const files = body.files
    const filesByID = new Map()
    for (const file of files) {
      filesByID.set(file.name, file)
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
    return {
      code: generated,
    }
  },
})
