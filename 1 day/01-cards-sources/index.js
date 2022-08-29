const slides = document.querySelectorAll('.slide')

document.querySelector('.container').addEventListener('click', (event) => {
  const target = event.target.closest('.slide')

  if (target.classList.contains('active')) {
    target.classList.remove('active')
  } else {
    slides.forEach((slide) => {
      slide.classList.remove('active')
    })

    target && target.classList.toggle('active')
  }
})

