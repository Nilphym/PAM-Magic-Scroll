const app = document.getElementById('app')
const framesNumber = 441

// Create animation frames
const frames = []

for (let i = 0; i < framesNumber; i++) {
  const num = i.toString().length === 1 ? `000${i}` : i.toString().length === 2 ? `00${i}` : `0${i}`
  frames.push(`./frames/${num}.jpg`)
}

frames.forEach((frame, iter) => {
  const child = document.createElement('img')
  child.src = frame
  child.classList = `frame frame-${iter}`
  app.appendChild(child)
})

// Setup animation
let delay = 0
const delaySpeed = 0.1

const step = (frameNumber) => {
  document.querySelectorAll('.frame').forEach(frame => frame.style.opacity = 0)
  document.querySelector(`.frame-${frameNumber}`).style.opacity = 1
}

setInterval(() => {
  delay += (window.scrollY - delay) * delaySpeed
  step(Math.floor(440 * delay / document.body.clientHeight))
}, 33.3)
