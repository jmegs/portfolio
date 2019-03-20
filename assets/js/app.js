/* 
  Init lazy loading images 
  everything with class .lazyload will do so
*/
import 'lazysizes'
import { getItemFromStorage, storeItem } from './localstorage'

/* Dark Mode 👇 */
const darkModeToggle = document.querySelector('.nav-darkmode-toggle')

function setDarkMode(status) {
  storeItem('darkMode', status)
  console.log(`darkMode: ${status}`)
}

function isDarkModeEnabled() {
  if (getItemFromStorage('darkMode')) {
    return true
  } else {
    return false
  }
}

darkModeToggle.addEventListener('click', () => {
  if (isDarkModeEnabled()) {
    document.body.classList.remove('dark-mode')
    setDarkMode(false)
  } else {
    document.body.classList.add('dark-mode')
    setDarkMode(true)
  }
})

window.onload = () => {
  if (isDarkModeEnabled()) {
    document.body.classList.add('dark-mode')
  }
}

/* Elevator Scroll 👇 */
const scrollToTop = document.querySelector('.js-scrollToTop')
scrollToTop.addEventListener('click', () => {
  window.scroll({ top: 0 })
})
