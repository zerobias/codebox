
const fetch = require('cross-fetch')

exports.endpoint = 'https://codebox.now.sh/'

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
