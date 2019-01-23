//@flow

export default {
  babelrc: false,
  presets: [
    'flow',
    'react',
    // [
    //   '@babel/preset-env',
    //   {
    //     loose: true,
    //     useBuiltIns: false,
    //     modules: false,
    //     shippedProposals: true,
    //     targets: {
    //       node: '10',
    //       browsers: [
    //         'last 2 Chrome versions',
    //         'last 2 Firefox versions',
    //         'last 2 Safari versions',
    //         'last 2 Edge versions',
    //       ],
    //     },
    //   },
    // ],
  ],
  plugins: [
    'proposal-export-namespace-from',
    'proposal-optional-chaining',
    'proposal-nullish-coalescing-operator',
    ['proposal-class-properties', {loose: true}],
  ]
}
