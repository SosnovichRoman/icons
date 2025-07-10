import typescript from "@rollup/plugin-typescript";
import svgr from "@svgr/rollup";

export default {
  input: "build/native/index.ts",
  output: {
    file: "native/index.js",
    format: "esm",
    sourcemap: true,
  },
  plugins: [
    typescript(),
    // svgr({
    //   // native: true,
    //   // typescript: true,
    //   // exportType: "named",
    //   // jsxRuntime: "automatic",
    // }),
  ],
};
