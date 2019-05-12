export const send = (code, body) => ({
  statusCode: code,
  headers: {
    "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
    "Access-Control-Allow-Credentials" : true, // Required for cookies, authorization headers with HTTPS 
  },
  body: JSON.stringify(body),
})

const readBody = event => JSON.parse(event.body)

export function task({name, fn}) {
  return async function taskHandler(event, context) {
    let body
    try {
      body = readBody(event)
    } catch (error) {
      console.error(`task ${name} invalid input`)
      console.error(error)
      return send(400, 'invalid payload')
    }
    try {
      return await fn(body, event, context)
    } catch (error) {
      console.error(`task ${name} failure`)
      console.error(error)
      return send(400, 'invalid invokation')
    }
  }
}
