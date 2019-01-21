
export default function processRequest(request) {
  return new Promise((rs, rj) => {
    let body = [];
    request
      .on('error', (err) => {
        rj(err)
      })
      .on('data', (chunk) => {
        body.push(chunk);
      })
      .on('end', () => {
        const result = Buffer.concat(body).toString();
        console.log('request body', result)
        try {
          rs(
            JSON.parse(result)
          )
        } catch (err) {
          rj(err)
        }
      })
  })
}
