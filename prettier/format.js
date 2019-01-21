
import prettier from 'prettier/standalone.js'

import prettierConfig from './defaultPrettierConfig'
import plugins from './plugins'

export default async function task(ctx, bodyRaw) {
  const body = Object.assign({}, {
    code: '"no code!"',
    config: {},
  }, bodyRaw)
  const code = body.code
  const config = Object.assign({}, prettierConfig, body.config, {plugins})
  const result = prettier.format(code, config)
  const configWithoutPlugins = Object.assign({}, config, {plugins: null})
  return {
    code: result,
    config: configWithoutPlugins,
  }
}
