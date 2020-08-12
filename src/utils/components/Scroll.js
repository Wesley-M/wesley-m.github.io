import jump from 'jump.js'

let scrolling = false

const end = () => {
  scrolling = false
}

const scroll = (to, options) => {
  if (scrolling) return
  scrolling = true
  setTimeout(end, options.duration || 0)
  jump(to, options)
}

export default scroll