import typescript from "@rollup/plugin-typescript";

export default {
  input: "build/web/index.ts",
  output: {
    file: "web/index.js",
    format: "esm",
    // sourcemap: true,
  },
  plugins: [typescript({ tsconfig: "./tsconfig.rollup-web.json" })],
};
