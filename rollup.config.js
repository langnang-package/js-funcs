import config from "./package.json";

const OUTPUT_BANNER = `
/*!
 * Ln.js v${config.version}
 * (c) 2020-2022 ${config.author}
 */
`;

export default {
  input: "./src/index.js",
  // input: './index.ts',
  output: [
    ...[
      //dist
      {
        file: "./dist/ln.js",
        name: "ln",
        format: "umd",
        banner: OUTPUT_BANNER,
      },
      {
        file: "./dist/ln.amd.js",
        format: "amd",
        banner: OUTPUT_BANNER,
      },
      {
        file: "./dist/ln.cjs.js",
        format: "cjs",
        banner: OUTPUT_BANNER,
      },
      {
        file: "./dist/ln.es.js",
        format: "es",
        banner: OUTPUT_BANNER,
      },
    ],
  ],
};
