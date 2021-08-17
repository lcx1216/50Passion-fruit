const scrolls = document.querySelectorAll('.scrolll')

window.addEventListener('scroll',checkscroll)

checkscroll()

function checkscroll(){
    const inbottom = window.innerHeight / 5 * 4

    scrolls.forEach(scrolll => {
        const scrollTop = scrolll.getBoundingClientRect().top

        if(scrollTop < inbottom){
            scrolll.classList.add('show')
        }else{
            scrolll.classList.remove('show')
        }
    })
}