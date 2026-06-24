const button=document.querySelector('button');

button.addEventListener('click',function(e){
    // e.preventDefault();
const height=parseInt(document.querySelector('#height').value);
const weight=parseInt(document.querySelector('#weight').value);
const results=document.querySelector('span');

if( height<=0  || isNaN(height)){
        results.innerHTML="Please enter a valid height";
    }
    else if( weight<=0 ||  isNaN(weight)){
        results.innerHTML="Please enter a valid weight";
    }
    else{
        // calculate the bmi
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        results.innerHTML=`Your BMI is: ${bmi}`;
    }

});


