const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const watch = setInterval(function img(){
    let date = new Date()
    let hora = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    
    if (hora < 10) hora = '0' + hora;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;

    hours.textContent = hora;
    minutes.textContent = min;
    seconds.textContent = sec;
   

    if (hora >= 0 && hora < 12){
        document.body.style.background = '#bdd656'
    }
    else if (hora>= 12 && hora <= 18){
        document.body.style.background = '#ce7034'  
    }
    else{ 
    document.body.style.background = '#000'
    }
})
