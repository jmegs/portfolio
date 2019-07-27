let root = document.documentElement

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function setRandomHue() {
  let hue = sessionStorage.getItem("hue")

  if (!hue) {
    let randomHue = getRandomInt(360)
    sessionStorage.setItem("hue", randomHue)
    hue = randomHue
  }

  root.style.setProperty("--hue", hue)
}

setRandomHue()
