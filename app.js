let scrollPosition = 0;
let delay = 0;

document.addEventListener('scroll', () => {
  scrollPosition = window.scrollY / 1000
})

setInterval(() => {
  delay += (scrollPosition - delay) * 0.1;
  document.getElementById('video').currentTime = delay
}, 33.3)
