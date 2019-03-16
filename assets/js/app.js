const darkModeToggle = document.querySelector('.nav-darkmode-toggle')

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode')
})
