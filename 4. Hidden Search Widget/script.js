const search = document.querySelector('.search_container')
const btn = document.querySelector('.search_button')
const input = document.querySelector('.search_input')

btn.addEventListener('click', () => {
    input.classList.toggle('smaller')
    input.focus()
})