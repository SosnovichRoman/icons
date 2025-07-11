import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    file: "native/index.js",
    format: "esm",
    // sourcemap: true,
  },
  plugins: [typescript({ tsconfig: "./tsconfig.rollup-native.json" })],
};
