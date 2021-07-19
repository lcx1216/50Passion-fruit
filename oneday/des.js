const ones = document.querySelectorAll('.one')

// ones.forEach(one => {
//     one.addEventListener('click',() => {
//         removeActiveClasses()
//         one.classList.add('active')
//     })
// })

// function removeActiveClasses(){
//     ones.forEach(one =>{
//         one.classList.remove('active')
//     })
// }

ones.forEach(one => {
    one.addEventListener('click', () => {
        removeActiveClasses()
        one.classList.add('active')
    })
})

function removeActiveClasses() {
    ones.forEach(one => {
        one.classList.remove('active')
    })
}