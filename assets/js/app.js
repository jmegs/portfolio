/* 
  Init lazy loading images 
  everything with class .lazyload will do so
*/
import 'lazysizes'

/* Dark Mode 👇 */
const darkModeToggle = document.querySelector('.nav-darkmode-toggle')

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode')
})

/* Elevator Scroll 👇 */
const scrollToTop = document.querySelector('.js-scrollToTop')
scrollToTop.addEventListener('click', () => {
  window.scroll({ top: 0 })
})
