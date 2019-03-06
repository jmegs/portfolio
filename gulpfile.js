const del = require('del')
const { exec } = require('child_process')

// the `clean` function removes everything inside of the dist/ directory
function clean() {
  return del(['dist/**/*'])
}
