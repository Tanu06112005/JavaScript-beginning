const startbtn=document.querySelector("#start");
const stopbtn=document.querySelector("#stop");
const resetbtn=document.querySelector("#reset");


let minutes=document.getElementById('minutes');
let seconds=document.getElementById('seconds');
let tens=document.getElementById('tens');


let ten=0;
let secs=0;
let mins=0;


let timerId=null;
startbtn.addEventListener('click',function(){
    if(timerId !==null){
        clearInterval(timerId);
    }
    timerId=setInterval(setTimer,10);
})

stopbtn.addEventListener('click',function(){
    clearInterval(timerId);
})

resetbtn.addEventListener('click',function(){
    clearInterval(timerId);
    ten=0;
    mins=0;
    secs=0;
   minutes.innerHTML=`0${mins}`;
   seconds.innerHTML=`0${secs}`;
   tens.innerHTML=`0${ten}`;
})




function setTimer(){
    ten++;
    if(ten<10){
        tens.innerHTML=`0${ten}`;
    }
    if(ten>=10){
        tens.innerHTML=ten;
    }
    if(ten>99){
        ten=0;
        tens.innerHTML='0'+0;
        secs++;
       seconds.innerHTML='0'+secs;
    }
    if(secs>=10){
        seconds.innerHTML=secs;
    }
    if(secs>59){
        secs=0;
        seconds.innerHTML='0'+0;
        mins++;
       minutes.innerHTML='0'+mins;  

   } 
   if(mins>=10){
           minutes.innerHTML=mins;   

   }
}
   


