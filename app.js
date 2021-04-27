const app = document.getElementById('app')


// Create animation frames
const frames = []

for (let i = 0; i < 441; i++) {
  const num = i.toString().length === 1 ? `000${i}` : i.toString().length === 2 ? `00${i}` : `0${i}`
  frames.push(`./frames/${num}.jpg`)
}

frames.forEach((frame, iter) => {
  const child = document.createElement('img')
  child.src = frame
  child.classList = `frame frame-${iter}`
  child.dataset.frame = iter
  app.appendChild(child)
})


// Setup animation
let scrollPosition = 0
let delay = 0

function step(frameNumber) {
  $('.frame').css('opacity', 0)
  $(`.frame-${frameNumber}`).css('opacity', 1)
}

document.addEventListener('scroll', () => {
  scrollPosition = window.scrollY
})

setInterval(() => {
  delay += (scrollPosition - delay) * 0.1
  step(Math.floor(440 * delay / 16615))
}, 33.3)
