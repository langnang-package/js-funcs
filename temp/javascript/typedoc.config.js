// const path = require("path");
// const requireContext = require('require-context');
// const files = requireContext(path.join(__dirname, "./src"), true, /\.ts$/)

module.exports = {
  "entryPointStrategy": "Expand",
  "entryPoints": ["./src"],
  "hideGenerator": false, // 隐藏生成器
  "excludeExternals": true,
  "excludeInternal": true,
  "excludePrivate": true,
  "excludeProtected": true,
  "externalPattern": "**/node_modules/**",
  "exclude": ["**/index*", "**/*.test.ts", "**/*.d.ts", "**/*.test.js", "**/node_modules/**"],
  "readme": "README.md",
  "out": "./docs",
  "categorizeByGroup": false,
  "cleanOutputDir": true,// 清除目录
  "disableSources": true,
  "plugin": [
    "typedoc-plugin-merge-modules",
    "typedoc-plugin-mermaid"
  ],
  "theme": "default"
}