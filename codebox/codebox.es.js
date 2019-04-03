
import fetch from 'cross-fetch'

export const endpoint = 'https://codebox.now.sh/'

const apiCall = (route) => async function codeboxRequest(code) {
  const req = await fetch(endpoint + route, {
    method: 'POST',
    body: JSON.stringify({code}),
  })
  const result = await req.json()
  return result
}

export const flow = apiCall('flow')
export const terser = apiCall('terser')
export const prettier = apiCall('prettier')
export const babel = apiCall('babel')
