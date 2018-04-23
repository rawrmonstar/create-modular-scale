import buble from "rollup-plugin-buble";
import pkg from "./package.json";

export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.browser,
      format: "umd",
      name: "createModularScale"
    },
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
};
