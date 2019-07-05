const { src, dest, watch, parallel, series } = require('gulp')
const plumber = require('gulp-plumber')
const postcss = require('gulp-postcss')
const cssEnv = require('postcss-preset-env')
const easyImport = require('postcss-easy-import')
const del = require('del')

const config = {
  js: { input: `source/assets/js/**/*`, output: `dist/assets/js` },
  css: { input: `source/assets/css/**/*`, output: `dist/assets/css` },
  fonts: { input: `source/assets/fonts/**/*`, output: `dist/assets/fonts` },
  img: { input: `source/assets/img/**/*`, output: `dist/assets/img` }
}

// deletes the output assets directory
function clean() {
  return del(['dist/assets'])
}

function scripts() {
  return src(config.js.input).pipe(dest(config.js.output))
}

function styles() {
  return src(config.css.input)
    .pipe(postcss([cssEnv({ stage: 0 }), easyImport]))
    .pipe(dest(config.css.output))
}

function images() {
  return src(config.img.input).pipe(dest(config.img.output))
}

function fonts() {
  return src(config.fonts.input).pipe(dest(config.fonts.output))
}

function watchAll() {
  watch(config.css.input, styles)
  watch(config.js.input, scripts)
  watch(config.img.input, images)
  watch(config.fonts.input, fonts)
}

const assets = parallel(scripts, styles, fonts, images)

exports.build = series(clean, assets)
exports.default = series(clean, assets, watchAll)
