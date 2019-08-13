import Turbolinks from 'turbolinks'
Turbolinks.start()

const sayHello = name => `Hello ${name}!`

console.log(sayHello("World"))