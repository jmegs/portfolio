const { src, dest, watch, parallel, series } = require('gulp')
const del = require('del')
const plumber = require('gulp-plumber')
const { exec } = require('child_process')

const less = require('gulp-less')
const postcss = require('gulp-postcss')
const cssEnv = require('postcss-preset-env')

const bs = require('browser-sync')

// where are source files
const input = {
  js: `assets/js/**/*`,
  css: `assets/css/**/*`,
  fonts: `assets/fonts/**/*`,
  img: `assets/img/**/*`,
  site: `src/**/*`
}

// clean the output directory
function clean() {
  return del([`dist`])
}

// @TODO decide on script strategy
function scripts() {
  return src(input.js)
    .pipe(dest(`dist/js`))
    .pipe(bs.stream())
}

// compile styles
function styles() {
  return src(input.css)
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([cssEnv({ stage: 0 })]))
    .pipe(dest(`dist/css`))
    .pipe(bs.stream())
}

function images() {
  return (
    src(input.img)
      // @TODO Minify
      .pipe(plumber())
      .pipe(dest(`dist/img`))
      .pipe(bs.stream())
  )
}

function fonts() {
  return src(input.fonts).pipe(dest(`dist/fonts`))
}

function generate() {
  return exec("'eleventy' --input=src --output=dist", error => {
    if (error) {
      console.error(error)
      return
    }
    bs.reload()
  })
}
// function generate() {
//   return exec('eleventy').on('close', code => {
//     if (code === 0) {
//       bs.reload()
//       done()
//     } else {
//       console.error(`build failed with code ${code}`)
//       bs.notify('build failed 😞')
//       done()
//     }
//   })
// }

function serve() {
  bs.init({ server: `dist` })
  watch(input.js, scripts)
  watch(input.css, styles)
  watch(input.img, images)
  watch(input.fonts, fonts)
  watch(input.site, generate)
}

// const assets = parallel(scripts, styles, fonts, images)
// export const dev = series(clean, generate, assets, serve)
// export const build = series(clean, generate, assets)
exports.build = series(
  clean,
  generate,
  parallel(scripts, styles, fonts, images)
)

exports.default = series(
  clean,
  generate,
  parallel(scripts, styles, fonts, images),
  serve
)
