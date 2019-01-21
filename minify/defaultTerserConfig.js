
export default {
  parse: {
    bare_returns: false,
    ecma: 8,
    html5_comments: false,
    shebang: true,
  },
  compress: {
    global_defs: {
      __DEV__: false,
      'process.env.NODE_ENV': 'production',
    },
    arrows: true,
    arguments: true,
    booleans: true,
    booleans_as_integers: false,
    collapse_vars: true,
    comparisons: true,
    computed_props: true,
    conditionals: true,
    dead_code: true,
    directives: true,
    drop_console: false,
    drop_debugger: true,
    ecma: 8,
    evaluate: true,
    expression: true, //?
    hoist_funs: true, //?
    hoist_props: true,
    hoist_vars: false,
    if_return: true,
    inline: true,
    join_vars: false, //?

    defaults: false,
    keep_classnames: true,
    keep_fargs: false,
    keep_fnames: true,
    loops: true,
    module: true,
    properties: true,
    pure_funcs: ['Math.floor', 'Math.min', 'Math.max'],
    pure_getters: true,
    reduce_funcs: true,
    reduce_vars: true,
    sequences: false,
    side_effects: true,
    switches: true,
    toplevel: true,

    typeofs: false,
    unused: true,
    passes: 3,

    unsafe_arrows: true,
    unsafe_Function: true,
    unsafe_math: true,
    unsafe_proto: true,
  },
  mangle: false,
  // mangle: {
  //     eval: false,
  //     keep_classnames: true,
  //     keep_fnames:  true,
  //     module: true,
  //     reserved: ['test', 'it'],
  //     toplevel: false, //?
  //     safari10: false,
  //     properties: {
  //       builtins: false,
  //       debug: false,
  //       keep_quoted: true, //?
  //       reserved: ['test', 'it'],
  //     }
  // },
  output: {
    ascii_only: false,
    braces: false, //?
    comments: false,
    ecma: 8,
    indent_level: 2,
    indent_start: 0,
    inline_script: false, //?
    keep_quoted_props: false, //?
    quote_keys: false,
    quote_style: 3, //?
    safari10: false,
    semicolons: false, //?
    shebang: true,
    webkit: false,
    wrap_iife: false,
  },
  sourceMap: {
      // source map options
  },
  ecma: 8, // specify one of: 5, 6, 7 or 8
  keep_classnames: true,
  keep_fnames: true,
  ie8: false,
  module: true,
  nameCache: null, // or specify a name cache object
  safari10: false,
  toplevel: true,
  warnings: false,
}
