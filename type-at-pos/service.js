
import flow from '@goodmind/flow-js'
import taskService from '../lib/taskService'

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
