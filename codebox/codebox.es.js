
import fetch from 'cross-fetch'

export const endpoint = 'https://codebox.now.sh/'

const serializer = code => JSON.stringify({code})
const apiCall = ({route, serializer}) => async function codeboxRequest(code) {
  const req = await fetch(endpoint + route, {
    method: 'POST',
    body: serializer(code),
  })
  const result = await req.json()
  return result
}

export const flow = apiCall({
  route: 'flow',
  serializer,
})
export const terser = apiCall({
  route: 'terser',
  serializer,
})
export const prettier = apiCall({
  route: 'prettier',
  serializer,
})
export const babel = apiCall({
  route: 'babel',
  serializer,
})
export const typeAtPos = apiCall({
  route: 'type-at-pos',
  serializer({filename, body, line, col}) {
    return JSON.stringify({
      filename, body, line, col,
    })
  },
})