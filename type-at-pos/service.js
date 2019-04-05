
import flow from '@goodmind/flow-js'
import taskService from '../lib/taskService'

import {
  effector,
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
  flow.registerFile('/static/streams.js', streams)
  flow.registerFile('/static/serviceworkers.js', workers)
  flow.registerFile('/static/webassembly.js', wasm)
  flow.registerFile('/static/reactDom.js', reactDom)
  flow.registerFile('/static/effector.js', effector)
  // flow.registerFile('/static/effectorGlobal.js', effectorGlobal)

  flow.setLibs([
    '/static/bom.js',
    '/static/core.js',
    '/static/cssom.js',
    '/static/dom.js',
    '/static/indexeddb.js',
    '/static/intl.js',
    '/static/node.js',
    '/static/react.js',
    '/static/streams.js',
    '/static/serviceworkers.js',
    '/static/webassembly.js',
    '/static/reactDom.js',
    '/static/effector.js',
    // '/static/effectorGlobal.js',
  ])
} catch (err) {
  console.error(err)
} finally {
  console.log('flow registered', Date.now() - start)
}

function typeAtPos({filename, body, line, col}) {
  return flow.typeAtPos(
    filename,
    body,
    line,
    col,
  )
}

export default taskService({
  serviceName: 'type-at-pos',
  async task(ctx, bodyRaw) {
    const body = Object.assign({}, {
      filename: 'repl',
      body: `//@flow\n\nconst foo: 'expect error' = 0`,
      line: 0,
      col: 0,
    }, bodyRaw)
    console.log('[type-at-pos] start request', body)
    let result = 'fail'
    try {
      result = typeAtPos(body)
    } catch (err) {
      console.error(err)
    }
    console.log('finish type-at-pos request', result)
    return {
      code: result,
    }
  },
})
