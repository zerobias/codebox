
import {transform} from "@babel/standalone"
// import '@babel/preset-env-standalone'

import taskService from '../lib/taskService'
import babelConfig from './defaultBabelConfig'

export default taskService({
  serviceName: 'babel',
  async task(ctx, bodyRaw) {
    const body = Object.assign({}, {
      code: '"no code!"',
      config: {},
    }, bodyRaw)
    const code = body.code
    const config = Object.assign({}, babelConfig, body.config)

    const result = await transform(code, config)
    return {
      code: result.code,
      config,
    }
  },
})
