
import { transform, registerPresets } from "@babel/standalone"
import PresetTypescript from '@babel/preset-typescript'

import taskService from '../lib/taskService'
import babelConfig from './defaultBabelConfig'

registerPresets({
  '@babel/preset-typescript': PresetTypescript
})

export default taskService({
  serviceName: 'babel',
  async task(ctx, bodyRaw) {
    const body = Object.assign({}, {
      code: '"no code!"',
      config: {},
    }, bodyRaw)
    const code = body.code
    const config = Object.assign({}, babelConfig, body.config, { babelrc: false })
    if (
      Array.isArray(config.presets) &&
      config.presets.some(e => {
        if (typeof e === 'string') return e.includes('typescript')
        if (Array.isArray(e) && typeof e[0] === 'string') return e[0].includes('typescript')
        return false
      }) &&
      !('filename' in config)
    ) {
      config.filename = 'file.ts'
    }
    const result = await transform(code, config)
    return {
      code: result.code,
      config,
    }
  },
})
