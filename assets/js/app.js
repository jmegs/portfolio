/* 
  Init lazy loading images 
  everything with class .lazyload will do so
*/
import 'lazysizes'
import Swup from 'swup'

const swup = new Swup()

/* Elevator Scroll 👇 */
const scrollToTop = document.querySelector('.js-scrollToTop')
scrollToTop.addEventListener('click', () => {
  window.scroll({ top: 0 })
})
