import typescript from "@rollup/plugin-typescript";

export default {
  input: "build/native/index.ts",
  output: {
    file: "native/index.js",
    format: "esm",
    // sourcemap: true,
  },
  plugins: [typescript({ tsconfig: "./tsconfig.rollup-native.json" })],
};
