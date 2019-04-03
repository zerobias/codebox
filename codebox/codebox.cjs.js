
const fetch = require('cross-fetch')

const endpoint = 'https://codebox.now.sh/'
exports.endpoint = endpoint

const apiCall = (route) => async function codeboxRequest(code) {
  const req = await fetch(endpoint + route, {
    method: 'POST',
    body: JSON.stringify({code}),
  })
  const result = await req.json()
  return result
}

exports.flow = apiCall('flow')
exports.terser = apiCall('terser')
exports.prettier = apiCall('prettier')
exports.babel = apiCall('babel')
