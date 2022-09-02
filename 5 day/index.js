const start = document.querySelector('.start')
const chooseTime = document.querySelector('.time')
const screens = document.querySelectorAll('.screen')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['#440a72', '#82c258', '#feffff', '#cb083c',
  '#0d277c', '#e3d313', '#de632e', '#e10fc5']
let time = null
let score = 0

start.addEventListener('click', (event) => {
  event.preventDefault()
  screens[0].classList.add('up')
})

chooseTime.addEventListener('click', (event) => {
  const target = event.target.closest('button')
  time = parseInt(target.outerText)
  screens[1].classList.add('up')
  startGame()
})

board.addEventListener('click', (event) => {
  if (event.target.classList.contains('circle')) {
    score ++
    event.target.remove()
    createRandomCircle()
  }
})

function startGame() {
  setInterval(() => {
    if (time === 0) {
      finishGame()
    } else {
      let current = --time
      if (current < 10) {
        current = `0${current}`
      }
      setTime(current)
    }
  }, 1000)

  createRandomCircle()
  setTime(time)
}
function setTime(value) {
  timeEl.innerHTML = `00:${value}`
}

function finishGame() {
  timeEl.parentNode.classList.add('hide')
  const check = `<h1>Счет: <span class="primary">${score}</span></h1>`
  board.innerHTML = check
}

function createRandomCircle() {
  const circle = document.createElement('div')
  const size = getRandomNumber(10, 80)
  const { width, height } = board.getBoundingClientRect()
  const x = getRandomNumber(size, width - size)
  const y = getRandomNumber(size, height- size)

  circle.classList.add('circle')
  circle.style.width = `${size}px`
  circle.style.height = `${size}px`
  circle.style.top = `${y}px`
  circle.style.left = `${x}px`
  circle.style.background = getRandomColor()

  board.append(circle)
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}
