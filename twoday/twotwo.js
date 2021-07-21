/*
actives的数量在update中加和，所以定义update()中。
点击先统计次数，后面函数更新圆圈和线的状态
线状态为process.style.width定，圆圈状态由disabled状态定
*/


const process = document.getElementById('process')
const pre = document.getElementById('pre')
const nex = document.getElementById('nex')
const nums = document.querySelectorAll('.num')
// const actives = document.querySelectorAll('.active')s
let activeCurren = 1

nex.addEventListener('click', ()=> {
    activeCurren++
    if(activeCurren > nums.length){
        activeCurren = nums.length
    }
    update()
})

pre.addEventListener('click', ()=>{
    activeCurren--
    if(activeCurren < 1){
        activeCurren = 1
    }
    update()
})

function update(){
    nums.forEach((num,idx) =>{
        if(idx < activeCurren){
            num.classList.add('active')
        }
        else{
            num.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active')
    console.log(111)
    process.style.width = (actives.length - 1) / (nums.length - 1) * 100 + '%'
    console.log(2222)
    if(activeCurren ==1){
        pre.disabled = true
    }
    else if(activeCurren == nums.length){
        nex.disabled = true
    }else{
        pre.disabled = false
        nex.disabled = false
    }
}