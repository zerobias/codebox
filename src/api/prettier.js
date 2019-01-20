//@flow

import prettier from 'prettier/standalone.js'
import angular from 'prettier/parser-angular'
import babylon from 'prettier/parser-babylon'
import flow from 'prettier/parser-flow'
import glimmer from 'prettier/parser-glimmer'
import graphql from 'prettier/parser-graphql'
import html from 'prettier/parser-html'
import markdown from 'prettier/parser-markdown'
import postcss from 'prettier/parser-postcss'
import typescript from 'prettier/parser-typescript'
import yaml from 'prettier/parser-yaml'

const plugins = [
  angular,
  babylon,
  flow,
  glimmer,
  graphql,
  html,
  markdown,
  postcss,
  typescript,
  yaml,
]

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

async function trycatch(cb) {
  let result
  try {
    result = await cb()
  } catch (err) {
    result = {
      error: String(err.message || err.code || 'Error'),
    }
  }
  return result
}

export default async (req, res) => {
  const response = await trycatch(async () => {
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
    const config = Object.assign({}, configDefaults, body.config, {plugins})
    const result = prettier.format(code, config)
    const endTime = Date.now() - startTime
    const configWithoutPlugins = Object.assign({}, config, {plugins: null})
    const response = {
      code: result,
      config: configWithoutPlugins,
      processTime: endTime,
    }
    return response
  })
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(response, null, 2))
}
