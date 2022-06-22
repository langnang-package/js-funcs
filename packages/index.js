console.log(require)
const files = require.context('./', true, /\.js$/)
console.log(files)