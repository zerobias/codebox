
import prettier from 'prettier/standalone.js'

import prettierConfig from './defaultPrettierConfig'
import plugins from './plugins'

function processRequest(request) {
  return new Promise((rs, rj) => {
    let body = [];
    request
      .on('error', (err) => {
        rj(err)
      })
      .on('data', (chunk) => {
        body.push(chunk);
      })
      .on('end', () => {
        const result = Buffer.concat(body).toString();
        console.log('request body', result)
        try {
          rs(
            JSON.parse(result)
          )
        } catch (err) {
          rj(err)
        }
      })
  })
}

export default {
  async task({startTime, req}) {
    const bodyRaw = await processRequest(req)
    const body = Object.assign({}, {
      code: '"no code!"',
      config: {},
    }, bodyRaw)
    const code = body.code
    const config = Object.assign({}, prettierConfig, body.config, {plugins})
    const result = prettier.format(code, config)
    const configWithoutPlugins = Object.assign({}, config, {plugins: null})
    const response = {
      code: result,
      config: configWithoutPlugins,
      processTime: Date.now() - startTime,
      success: true,
    }
    return response
  },
  onError({startTime}, error) {
    return {
      error,
      success: false,
      processTime: Date.now() - startTime,
    }
  }
}
