// rollup.config.js
import path from "path";
import fs from "fs";
import cleanup from 'rollup-plugin-cleanup';
import typescript from '@rollup/plugin-typescript';
import requireContext from 'require-context';

const files = requireContext(path.join(__dirname, "./src"), true, /\.ts$/)
const entry = fs.openSync(path.join(__dirname, "./main.ts"), 'w')
const entryInner = files.keys().reduce((total, file) => (!/\.test\.ts$/.test(file) && !/\.d\.ts$/.test(file)) ? total + `export * from './src/${file.replace('.ts', '').replace(/\\/g, '/')}'\n` : total, '')
fs.writeSync(entry, entryInner);
// import "./buildEntry";
export default [{
  // 核心选项
  /**
   * 输入(input -i/--input)
   * String 这个包的入口点 (例如：你的 main.js 或者 app.js 或者 index.js)
   */
  input: "main.ts",     // 必须
  // external,
  plugins: [
    cleanup(),
    typescript(),
  ],

  // // 额外选项
  // onwarn,

  // // danger zone
  // acorn,
  // context,
  // moduleContext,
  // legacy,
  output: [
    ...[
      {
        file: './dist/ln.js',
        format: 'umd',
      },
      {
        file: './dist/ln.amd.js',
        format: 'amd',
      },
      {
        file: './dist/ln.cjs.js',
        format: 'cjs',
      },
      {
        file: './dist/ln.es.js',
        format: 'es',
      }
    ].map(v => {
      return {
        ...v,
        name: 'ln',
        // String 是要使用的缩进字符串，对于需要缩进代码的格式（amd，iife，umd）。也可以是false（无缩进）或true（默认 - 自动缩进）
        indent: false,
        // true或false（默认为true） - 是否在生成的非ES6软件包的顶部包含'use strict'pragma。严格来说（geddit？），ES6模块始终都是严格模式，所以你应该没有很好的理由来禁用它。
        strict: true,
        sourcemap: true,
      }
    }),
  ],
  // output: {  // 必须 (如果要输出多个，可以是一个数组)
  //   // 核心选项
  //   file,    // 必须
  //   format,  // 必须
  //   name,
  //   globals,

  //   // 额外选项
  //   paths,
  //   banner,
  //   footer,
  //   intro,
  //   outro,
  //   sourcemap,
  //   sourcemapFile,
  //   interop,

  //   // 高危选项
  //   exports,
  //   amd,
  //   indent,
  //   strict
  // },
  watch: {
    exclude: 'node_modules/**'
  }
}];