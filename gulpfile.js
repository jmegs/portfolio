const { src, dest, watch, parallel, series } = require('gulp')
const del = require('del')
const plumber = require('gulp-plumber')
const { exec } = require('child_process')

const less = require('gulp-less')
const postcss = require('gulp-postcss')
const cssenv = require('postcss-preset-env')
const cssnano = require('gulp-cssnano')

const compiler = require('webpack')
const webpack = require('webpack-stream')

const bs = require('browser-sync')

// where are source files
const input = {
  js: `assets/js/app.js`,
  css: `assets/css/**/*`,
  fonts: `assets/fonts/**/*`,
  img: `assets/img/**/*`,
  site: `src/**/*`
}

const output = {
  js: `dist/js`,
  css: `dist/css`,
  fonts: `dist/fonts`,
  img: `dist/img`,
  site: `dist`
}

// clean the output directory
function clean() {
  return del([`dist`])
}

// compile scripts with webpack
function scripts() {
  return src(input.js)
    .pipe(
      webpack(
        {
          mode: 'development',
          output: { filename: 'app.js' }
        },
        compiler
      )
    )
    .pipe(dest(output.js))
    .pipe(bs.stream())
}

function prod_scripts() {
  return src(input.js)
    .pipe(
      webpack(
        {
          mode: 'production',
          output: { filename: 'app.js' },
          devtool: 'source-map'
        },
        compiler
      )
    )
    .pipe(dest(output.js))
    .pipe(bs.stream())
}

// compile styles
function styles() {
  return src([input.css, '!**/_*'])
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([cssenv({ stage: 0 })]))
    .pipe(dest(output.css))
    .pipe(bs.stream())
}

// compile production styles
function prod_styles() {
  return src([input.css, '!**/_*'])
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([cssenv({ stage: 0 })]))
    .pipe(cssnano())
    .pipe(dest(output.css))
}

function images() {
  return (
    src(input.img)
      // @TODO Minify
      .pipe(plumber())
      .pipe(dest(output.img))
      .pipe(bs.stream())
  )
}

function fonts() {
  return src(input.fonts).pipe(dest(output.fonts))
}

function generate() {
  return exec('eleventy', (error, stdout, stderr) => {
    if (error) {
      console.error(error)
      return
    }
    bs.reload()
  })
}

function serve() {
  bs.init({ server: `dist` })
  watch(input.js, scripts)
  watch(input.css, styles)
  watch(input.img, images)
  watch(input.fonts, fonts)
  watch(input.site, generate)
}

exports.build = series(
  clean,
  generate,
  parallel(prod_scripts, prod_styles, fonts, images)
)

exports.default = series(
  clean,
  generate,
  parallel(scripts, styles, fonts, images),
  serve
)
