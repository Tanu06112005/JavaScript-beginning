const form=document.querySelector('form');

form.addEventListener("submit",function(e){
    e.preventDefault();  // prevent the refresh of the page each time at submit
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const results= document.querySelector('#results');

    if( height<=0 || height===NaN || isNaN(height)){
        results.innerHTML="Please enter a valid height";
    }
    else if( weight<=0 || weight===NaN || isNaN(weight)){
        results.innerHTML="Please enter a valid weight";
    }
    else{
        // calculate the bmi
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        results.innerHTML=`${bmi}`;
    }
});