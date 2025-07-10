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
      svgo: true,
      svgoConfig: {
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                removeViewBox: false, // Не удаляет viewBox
              },
            },
          },
          {
            name: "removeAttrs",
            params: {
              attrs: "xmlns", // Удаляет ненужный xmlns
            },
          },
        ],
      },
      // exportType: "named",
      // jsxRuntime: "automatic",
    }),
  ],
};
