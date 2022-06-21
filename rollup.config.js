import config from './package.json';

const OUTPUT_BANNER = `
/*!
 * Ln.js v${config.version}
 * (c) 2020-2022 ${config.author}
 */
`;

export default {
  input: './packages/index.js',
  // input: './index.ts',
  output: [
    ...[
      //dist
      {
        file: './lib/ln.js',
        name: 'ln',
        format: 'umd',
        banner: OUTPUT_BANNER,
      },
      {
        file: './lib/ln.amd.js',
        format: 'amd',
        banner: OUTPUT_BANNER,
      },
      {
        file: './lib/ln.cjs.js',
        format: 'cjs',
        banner: OUTPUT_BANNER,
      },
      {
        file: './lib/ln.es.js',
        format: 'es',
        banner: OUTPUT_BANNER,
      },
    ],
  ],
};
