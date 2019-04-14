
import flow from '@goodmind/flow-js'
import taskService from '../lib/taskService'

import {
  effectorReact,
  // effector,
  // effectorGlobal,
  bom,
  core,
  cssom,
  dom,
  indexeddb,
  intl,
  node,
  react,
  reactDom,
  streams,
  workers,
  wasm,
} from './typedef'

import {effector, effectorGlobal} from '../commonFlow/effectorTypedef'

let start
try {
  console.log('start flow')
  start = Date.now()
  flow.registerFile('/static/bom.js', bom)
  flow.registerFile('/static/core.js', core)
  flow.registerFile('/static/cssom.js', cssom)
  flow.registerFile('/static/dom.js', dom)
  flow.registerFile('/static/indexeddb.js', indexeddb)
  flow.registerFile('/static/intl.js', intl)
  flow.registerFile('/static/node.js', node)
  flow.registerFile('/static/react.js', react)
  flow.registerFile('/static/react-dom.js', reactDom)
  flow.registerFile('/static/streams.js', streams)
  flow.registerFile('/static/serviceworkers.js', workers)
  flow.registerFile('/static/webassembly.js', wasm)
  flow.registerFile('/static/effector.js', effector)
  flow.registerFile('/static/effectorReact.js', effectorReact)
  flow.registerFile('/static/effectorGlobal.js', effectorGlobal)

  flow.setLibs([
    '/static/bom.js',
    '/static/core.js',
    '/static/cssom.js',
    '/static/dom.js',
    '/static/indexeddb.js',
    '/static/intl.js',
    '/static/node.js',
    '/static/react.js',
    '/static/react-dom.js',
    '/static/streams.js',
    '/static/serviceworkers.js',
    '/static/webassembly.js',
    '/static/effector.js',
    '/static/effectorReact.js',
    '/static/effectorGlobal.js',
  ])
} catch (err) {
  console.error(err)
} finally {
  console.log('flow registered', Date.now() - start)
}

function check(code, { name }) {
  return flow.checkContent(`/static/${name}.js`, code);
}

export default taskService({
  serviceName: 'flow',
  async task(ctx, bodyRaw) {
    const body = Object.assign({}, {
      code: `//@flow\n\nconst foo: 'expect error' = 0`,
      config: {},
    }, bodyRaw)
    const code = body.code
    const config = Object.assign({}, {name: 'repl'}, body.config)
    console.log('[flow] start request %s', code)
    let result = 'fail'
    try {
      result = check(code, config)
    } catch (err) {
      console.error(err)
    }
    console.log('finish flow request', result)
    return {
      code: result,
      config: config,
    }
  },
})
