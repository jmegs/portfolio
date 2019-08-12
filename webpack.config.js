const path = require('path')

module.exports = {
  entry: './source/assets/javascript/main.js',
  output: {
    filename: 'assets/javascript/[name].js',
    path: path.resolve(__dirname, '.tmp/dist')
  }
}
