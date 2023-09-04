var mints = 0;
var second = 0;
var milisecond = 0;
var getmints = document.getElementById('mint')
var getsecond = document.getElementById('sec')
var getmilisecond = document.getElementById('mili')
var interval;

function start(){
    interval = setInterval(function(){
        milisecond++
        getmilisecond.innerHTML = milisecond
        if(milisecond >= 100){
            second++
            getsecond.innerHTML = second
            milisecond = 0
        }
        else if(second >= 60){
            mints++
            getmints.innerHTML = mints
            second = 0
        }
    },10)
    document.getElementById('start').disabled = true
    
}
function stop(){
    clearInterval(interval)
    document.getElementById('start').disabled = false

    
}
function reset(){
     mints = 0;
     second = 0;
     milisecond = 0;
    getmints.innerHTML = mints
    getsecond.innerHTML = second
    getmilisecond.innerHTML = milisecond
}