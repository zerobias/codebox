module.exports = api => {
  api.cache.never()
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          shippedProposals: true,
          loose: true,
          useBuiltIns: false,
          targets: {
            node: 'current',
          },
        },
      ],
    ],
  }
}
