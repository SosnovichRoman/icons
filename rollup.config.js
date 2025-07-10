import typescript from "@rollup/plugin-typescript";
import svgr from "@svgr/rollup";
// import * as react from "react";
// import * as RNSVG from "react-native-svg";

export default {
  input: "src/index.ts",
  output: {
    // file: "native/index.js",
    dir: "native",
    format: "esm",
    sourcemap: true,
    preserveModules: true,
    // external: ["react-native-svg", "react"],
  },
  plugins: [
    typescript(),
    svgr({
      native: true,
      typescript: true,
      // exportType: "named",
      // jsxRuntime: "automatic",
    }),
  ],
};
