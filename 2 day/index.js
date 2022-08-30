const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

const dragstart = (event) => setTimeout(() => event.target.classList.add('hide'), 0)
const dragend = (event) => event.target.classList.remove( 'hide')
const dragover = (event) => event.preventDefault()
const dragenter = (event) => event.target.classList.add('hovered')
const dragleave = (event) => event.target.classList.remove('hovered')
const dragdrop = (event) => {
  event.target.classList.remove('hovered')
  event.target.append(item)
}

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

placeholders.forEach(placeholder => {
  placeholder.addEventListener('dragover', dragover)
  placeholder.addEventListener('dragenter', dragenter)
  placeholder.addEventListener('dragleave', dragleave)
  placeholder.addEventListener('drop', dragdrop)
})

