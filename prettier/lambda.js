console.log('init prettier service')
import prettier from 'prettier/standalone.js'

import {task, send} from '../lib/lambdaTask'

import prettierConfig from './defaultPrettierConfig'
import plugins from './plugins'

export default task({
  name: 'prettier',
  async fn(bodyRaw, event, context) {
    console.log('start prettier request')
    const body = Object.assign({}, {
      code: '"no code!"',
      config: {},
    }, bodyRaw)
    const code = body.code
    const config = Object.assign({}, prettierConfig, body.config, {plugins})
    const result = prettier.format(code, config)
    const configWithoutPlugins = Object.assign({}, config, {plugins: null})
    return send(200, {
      code: result,
      config: configWithoutPlugins,
    })
  },
})
