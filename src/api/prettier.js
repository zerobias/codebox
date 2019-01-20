//@flow

import prettier from 'prettier/standalone'

module.exports = (req, res) => {
  res.end(`Hello!\nprettier keys: [${Object.keys(prettier).join(',')}]`)
}
