//@flow

import prettier from 'prettier/standalone.js'

module.exports = (req, res) => {
  res.end(`Hello!\nprettier keys: [${Object.keys(prettier).join(',')}]`)
}
