
import trycatch from './trycatch'
import processRequest from './processRequest'

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

async function service(req, res) {
  const response = await trycatch(
    {startTime: Date.now(), req},
    this
  )
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(response, null, 2))
}

export default function taskService({
  serviceName,
  task,
}) {
  const job = createJob(serviceName, task)
  return service.bind(job)
}
