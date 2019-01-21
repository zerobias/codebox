
export default function stringifyError(err) {
  return String(
    err.message ||
    err.code ||
    err.description ||
    err.name ||
    'Error'
  )
}
