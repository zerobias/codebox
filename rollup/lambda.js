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
    const body = Object.assign(
      {},
      {
        files: [],
        entry: 'repl.js',
      },
      bodyRaw,
    )
    const files = body.files
    const filesByID = new Map()
    const urlsByID = new Map()
    for (const file of files) {
      filesByID.set(file.name, file)
    }
    function fetchIfUncached(url) {
      if (!urlsByID.has(url)) {
        const promise = fetch(url)
          .then(async r => {
            if (r.ok) {
              return {
                url: r.url,
                body: await r.text(),
              }
            }

            throw new Error(await r.text())
          })
          .catch(err => {
            urlsByID.delete(url)
            console.error(err)
            throw err
          })
        urlsByID.set(url, promise)
      }
      return urlsByID.get(url)
    }
    console.log('init rollup')
    const build = await rollup({
      input: body.entry,
      plugins: [
        {
          resolveId(importee, importer) {
            if (!importer) return importee
            console.log({
              importee,
              importer,
              "importee[0] !== '.'": importee[0] !== '.',
              'dirname(importer)': dirname(importer),
              'join(dirname(importer), importee)': join(
                dirname(importer),
                importee,
              ),
              "join(dirname(importer), importee).replace(/^.//, '')": join(
                dirname(importer),
                importee,
              ).replace(/^\.\//, ''),
            })
            // importing from a URL
            if (importee.startsWith('http:') || importee.startsWith('https:'))
              return importee

            if (importee[0] !== '.') return false

            const resolved = join(dirname(importer), importee).replace(
              /^\.\//,
              '',
            )
            if (filesByID.has(resolved)) return resolved
            const resolvedJS = `${resolved}.js`
            if (filesByID.has(resolvedJS)) return resolvedJS
            const resolvedJSON = `${resolved}.json`
            if (filesByID.has(resolvedJSON)) return resolvedJSON
            throw new Error(
              `Could not resolve '${importee}' from '${importer}'`,
            )
          },
          async load(id) {
            if (id.startsWith('https:') || id.startsWith('http:')) {
              const res = await fetchIfUncached(id)
              return res.body
            }
            return filesByID.get(id).code
          },
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
