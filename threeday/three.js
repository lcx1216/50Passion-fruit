// const close = document.getElementById('close')
// const open = document.getElementById('open')
// const container = document.querySelectorAll('.container')

// // open.addEventListener('click',()=>{
// //     container.classList.add('show_small')
// // })
// open.addEventListener('click', () => 
// container.classList.add('show-nav')
// )

// // close.addEventListener('click',()=>
// //     container.classList.remove('show_small')
// // )

// close.addEventListener('click', () => container.classList.remove('show-nav'))

const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))