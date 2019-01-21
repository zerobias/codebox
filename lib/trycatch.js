
import stringifyError from './stringifyError'

export default async function trycatch(ctx, {task, onError}) {
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
