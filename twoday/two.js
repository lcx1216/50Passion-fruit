/*
定义变量为0，所以增加状态先增加再add，移除状态先移除再remove
*/


const process = document.getElementById('process')
const pre = document.getElementById('pre')
const nex = document.getElementById('nex')
const nums = document.querySelectorAll('.num')

let activeCurren = 0

nex.addEventListener('click',() => {
    activeCurren += 1
    nums[activeCurren].classList.add('active')
    if(activeCurren == 3){
        nex.disabled = true
    }
    if(activeCurren !== 0){
        pre.disabled = false
    }
    process.style.width = `${activeCurren * 33}%`
})

pre.addEventListener('click',() => {
    nums[activeCurren].classList.remove('active')
    activeCurren -= 1
    if(activeCurren == 0){
        pre.disabled = true
    }
    if(activeCurren !== 3){
        nex.disabled = false
    }
    process.style.width = `${activeCurren * 33}%`
})