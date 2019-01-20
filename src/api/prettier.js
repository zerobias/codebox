//@flow

import prettier from 'prettier/standalone.js'

function processRequest(request) {
  return new Promise((rs, rj) => {
    let body = [];
    request.on('error', (err) => {
      console.error(err);
      rj(err)
    }).on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      const result = Buffer.concat(body).toString();
      console.log('result', result)
      try {
        rs(
          JSON.parse(result)
        );
      } catch (err) {
        console.error(err);
        rj(err)
      }
    })
  })
}

export default async (req, res) => {
  const startTime = Date.now()
  const configDefaults = {
    trailingComma: "es5",
    tabWidth: 2,
    semi: true,
    singleQuote: true,
    bracketSpacing: false,
    arrowParens: 'always',
  }
  const bodyRaw = await processRequest(req)
  const body = Object.assign({}, {
    code: '"no code!"',
    config: {},
  }, bodyRaw)
  const code = body.code
  const config = Object.assign({}, configDefaults, body.config)
  const result = prettier.format(code, config)
  const endTime = Date.now() - startTime
  const response = { code: result, config, processTime: endTime }
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(response, null, 2))
}
