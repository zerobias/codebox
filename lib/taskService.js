
import trycatch from './trycatch'
import processRequest from './processRequest'
import stringifyError from './stringifyError'

function createJob(serviceName, task) {
  return {
    async task(ctx) {
      const bodyRaw = await processRequest(ctx.req)
      const result = await task(ctx, bodyRaw)
      return Object.assign(
        {},
        {
          processTime: Date.now() - ctx.startTime,
          success: true,
          service: serviceName,
        },
        result
      )
    },
    onError({startTime}, error) {
      return {
        error,
        success: false,
        service: serviceName,
        processTime: Date.now() - startTime,
      }
    }
  }
}
function stringify(response) {
  let result
  try {
    result = JSON.stringify(response, null, 2)
  } catch (err) {
    result = stringifyError(err)
  }
  return result
}
async function service(req, res) {
  console.log('request headers', req.headers)
  const response = await trycatch(
    {startTime: Date.now(), req},
    this
  )
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  const headers = req.headers
  const origin = headers.origin || headers['x-forwarded-host'] || headers.referer || headers.host || '*'
  res.setHeader('Access-Control-Allow-Origin', origin)
  res.end(stringify(response))
}

export default function taskService({
  serviceName,
  task,
}) {
  const job = createJob(serviceName, task)
  return service.bind(job)
}
