const display=document.querySelector('#display');

function sinF(){
    display.value=Math.sin(Number(display.value));
}

function cosF(){
    display.value=Math.cos(display.value);
}

function tanF(){
    display.value=Math.tan(display.value);
}

function sqrtF(){
    display.value=Math.sqrt(display.value);
}

// Math class aotomatically converts the string into the number




function calculate() {
  try {
    // Ensure we evaluate only valid math expressions
    if (display.value.trim() !== "") {
      display.value = eval(display.value);
    }
  } catch (e) {
    display.value = "Error";
  }
}




// other approach:

// let  display1=document.querySelector("#display");
// let buttons=document.querySelectorAll("button");
// let string ="";
// let arr=Array.from(buttons);

// arr.forEach((btn)=>{
//     btn.addEventListener('click',(e)=>{
//         if(e.target.innerHTML=='='){
//             string=eval(string);
//             display1.value=string;
//         }
//         else if(e.target.innerHTML=='AC'){
//             string="";
//             display1.value=string;
//         }
//         else if(e.target.innerHTML=='DE'){
//             string=string.substring(0,string.length-1);
//             display1.value=string;
//         }
//         else{
//             string+=e.target.innerHTML;
//             display1.value=string;
//         }
//     })
// })















