const contaniner = document.querySelector('.container')
const input = document.querySelector('.input')
const search = document.querySelector('.search')

search.addEventListener('click',()=>{
    contaniner.classList.toggle('active')
    input.focus()
})