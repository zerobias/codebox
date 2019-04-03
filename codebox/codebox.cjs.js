
const fetch = require('cross-fetch')

const endpoint = 'https://codebox.now.sh/'
exports.endpoint = endpoint

const serializer = code => JSON.stringify({code})
const apiCall = ({route, serializer}) => async function codeboxRequest(code) {
  const req = await fetch(endpoint + route, {
    method: 'POST',
    body: serializer(code),
  })
  const result = await req.json()
  return result
}

exports.flow = apiCall({
  route: 'flow',
  serializer,
})
exports.terser = apiCall({
  route: 'terser',
  serializer,
})
exports.prettier = apiCall({
  route: 'prettier',
  serializer,
})
exports.babel = apiCall({
  route: 'babel',
  serializer,
})
exports.typeAtPos = apiCall({
  route: 'type-at-pos',
  serializer({filename, body, line, col}) {
    return JSON.stringify({
      filename, body, line, col,
    })
  },
})
