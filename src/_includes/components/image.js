// Generate an image tag with responsive images served from cloudinary

// @TODO in config add
// config.addShortcode("image", require("./src/components/image.js"))

const baseUrl = 'https://res.cloudinary.com/jmegs'

module.exports = (id, alt = 'Missing alt text') => {
  return `<figure data-expand="-20"><img class="lazyload" alt="${alt}"
  data-src="${baseUrl}/c_scale,w_1366,f_auto/${id}.jpg"
  data-srcset="${baseUrl}/c_scale,w_640,f_auto/${id}.jpg 640w, 
  ${baseUrl}/c_scale,w_1366,f_auto/${id}.jpg 1366w, 
  ${baseUrl}/f_auto/${id}.jpg 2732w" /></figure>
  `
}
