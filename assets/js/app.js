/* 
  Init lazy loading images 
  everything with class .lazyload will do so
*/
import 'lazysizes'

// sets css custom property "--vh-offset" if needed to compensate for the mobile
// browser bar and chrome, else returns 0. used like so:
// height: calc(100vh - var(--vh-offset));
// https://github.com/Hiswe/vh-check

import vhCheck from 'vh-check'
const check = vhCheck()
console.log(check)
