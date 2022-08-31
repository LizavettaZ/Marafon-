const buttons = document.querySelector('.controls')
const sidebar = document.querySelector('.sidebar')
const slidesCount = document.querySelectorAll('.main-slide div').length
const mainSlide = document.querySelector('.main-slide')
const containerHeight = document.querySelector('.container').clientHeight
let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

buttons.addEventListener('click', (event) => {
  const target = event.target.closest('button')

  target.classList.contains('up-button') && changeSlide('up')
  target.classList.contains('down-button') && changeSlide('down')
})

function changeSlide(direction) {
  if (direction === 'up') {
    activeSlideIndex++
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0
    }
  } else if (direction === 'down') {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1
    }
  }
  mainSlide.style.transform = `translateY(-${activeSlideIndex * containerHeight}px)`
  sidebar.style.transform = `translateY(${activeSlideIndex * containerHeight}px)`
}
