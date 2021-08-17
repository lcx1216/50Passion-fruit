const back = document.querySelector('.back')
const numload = document.querySelector('.num')

let load = 0

let deli = setInterval(blurring,30)

function blurring(){
    load++

    if(load > 99){
        clearInterval(deli)
    }
    numload.innerText = `${load}%`
    numload.style.opacity = scale(load,0,100,1,0)
    back.style.filter = `blur(${scale(load,0,100,30,0)}px)`
}

const scale = (num,in_min,in_max,out_min,out_max) => {
    return ((num-in_min)*(out_max-out_min)) / (in_max-in_min) + out_min
}