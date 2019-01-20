//@flow

import format from './format'

function stringifyError(err) {
  return String(
    err.message ||
    err.code ||
    err.description ||
    err.name ||
    'Error'
  )
}
async function trycatch(ctx, {task, onError}) {
  let result
  try {
    result = await task(ctx)
  } catch (err) {
    const message = stringifyError(err)
    console.error(message)
    result = onError(ctx, message)
  }
  return result
}

export default async (req, res) => {
  const response = await trycatch(
    {startTime: Date.now(), req},
    format
  )
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(response, null, 2))
}
