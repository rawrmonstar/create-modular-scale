import buble from "rollup-plugin-buble";
import pkg from "./package.json";

export default [
  // browser-friendly UMD build
  {
    input: "src/index.js",
    output: {
      file: pkg.browser,
      format: "umd",
      name: "createModularScale"
    },
    plugins: [
      buble({
        // transpile ES2015+ to ES5
        exclude: ["node_modules/**"]
      })
    ]
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // the `targets` option which can specify `dest` and `format`)
  {
    input: "src/index.js",
    output: [
      {
        file: pkg.main,
        format: "cjs"
      },
      {
        file: pkg.module,
        format: "es"
      }
    ],
    plugins: [
      buble({
        exclude: ["node_modules/**"]
      })
    ]
  }
];
