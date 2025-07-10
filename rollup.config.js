import typescript from "rollup-plugin-typescript2";
import svgr from "@svgr/rollup";
import url from "@rollup/plugin-url";

export default {
  input: "src/index.ts",
  output: {
    file: "native/index.js",
    format: "esm",
  },
  plugins: [typescript(), svgr({ typescript: true })],
};
