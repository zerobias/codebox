// import fs from 'fs'
// import fetch from 'cross-fetch'
import {minify} from 'terser'

import taskService from '../lib/taskService'
import options from './defaultTerserConfig'

// async function run({code, options}) {
//   const minified = Terser.minify(code, options).code
//   const req = await fetch('https://prettier-now.now.sh/api', {
//     method: 'POST',
//     body: JSON.stringify({
//       code: minified,
//     })
//   })
//   const result = await req.json()
//   if (!result.success) {
//     console.error(result.error)
//     return
//   }
//   const output = result.code
//   const old = fs.readFileSync(__dirname + "/pret.js", "utf8")
//   fs.writeFileSync(__dirname + "/pret.js", output, "utf8")
//   fs.writeFileSync(__dirname + "/pret.old.js", old, "utf8")
// }

// run({
//   code: fs.readFileSync(__dirname + "/prettier.js", "utf8"),
//   options,
// })

export default taskService({
  serviceName: 'terser',
  async task(ctx, bodyRaw) {
    const body = Object.assign(
      {},
      {
        code: '"no code!"',
        config: {},
      },
      bodyRaw,
    )
    const code = body.code
    const config = Object.assign({}, options, body.config)
    const result = await minify(code, config)
    return {
      code: result.code,
    }
  },
})
