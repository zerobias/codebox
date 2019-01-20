//@flow

import prettier from 'prettier/standalone.js'

export default (req, res) => {
  const configDefaults = {
    trailingComma: "es5",
    tabWidth: 2,
    semi: true,
    singleQuote: true,
    bracketSpacing: false,
    arrowParens: 'always',
  }
  // res.setHeader('Content-Type', 'application/json')
  const code = req.body.code || '"no code!"'
  const config = Object.assign({}, configDefaults, req.body.config || {})
  const result = prettier.format(code, config)
  const response = {code: result, config}
  res.json(response, 2)
  //res.end(`Hello!\nprettier keys: [${Object.keys(prettier).join(',')}]`)
}
