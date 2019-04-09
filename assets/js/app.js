let root = document.documentElement

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function setRandomHue() {
  let randomHue = getRandomInt(360)
  root.style.setProperty("--hue", randomHue)
}

setRandomHue()