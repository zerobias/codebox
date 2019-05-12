
import '@babel/preset-flow'
import '@babel/preset-react'
import '@babel/preset-env'
import '@babel/plugin-proposal-export-namespace-from'
import '@babel/plugin-proposal-optional-chaining'
import '@babel/plugin-proposal-nullish-coalescing-operator'
import '@babel/plugin-proposal-class-properties'

export default {
  babelrc: false,
  presets: [
    '@babel/preset-flow',
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        loose: true,
        // useBuiltIns: false,
        modules: false,
        shippedProposals: true,
        targets: {
          node: '10',
          browsers: [
            'last 2 Chrome versions',
            'last 2 Firefox versions',
            'last 2 Safari versions',
          ],
        },
      },
    ],
  ],
  plugins: [
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    ['@babel/plugin-proposal-class-properties', {loose: true}],
  ]
}
