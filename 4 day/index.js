const container = document.querySelector('.container')
const SQUARES_NUMBER = 450
const colors = ['#70CCC1', '#58c2b8', '#25C0BB', '#16ABAB',
  '#31b6bd', '#1fa3a9', '#1a95a2', '#2399a8']

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)]
}

const setColor = (elem) => {
  const color = getRandomColor()
  elem.style.background = color
  elem.style.boxShadow = `0 0 4px ${color}, 0 0 20px ${color}`
}

const removeColor = (elem) => {
  elem.style.backgroundColor = 'white'
  elem.style.boxShadow = `0 0 2px black`
}

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement(`div`)
  square.classList.add('square')
  container.insertAdjacentElement('afterbegin', square)

  square.addEventListener('mouseover', () => {
    setColor(square)
  })

  square.addEventListener('mouseleave', () => {
    removeColor(square)
  })
}



