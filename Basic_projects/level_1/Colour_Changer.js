const buttons=document.querySelectorAll('.button');
const  body=document.querySelector("body");
//buttons = [btn1, btn2, btn3, btn4]
// button is the single element...!

// buttons.forEach( function(button){
//     console.log(button);
    
// event listener is a function that tracks which event is needed to be performed(click, hover or etc)
    // button.addEventListener('click',function(e){
    //     console.log(e);
    //     console.log(e.target);
    //     if(e.target.id === 'grey'){
    //         body.style.backgroundColor=e.target.id;
    //     }
    //     if(e.target.id === 'white'){
    //         body.style.backgroundColor=e.target.id;
    //     }
    //     if(e.target.id === 'blue'){
    //         body.style.backgroundColor=e.target.id;
    //     }
    //     if(e.target.id === 'yellow'){
    //         body.style.backgroundColor=e.target.id;
    //     }
    // });
//});

    // another method to do the same tast 


//     window
//  ├── document
//  ├── alert()
//  ├── setTimeout()
//  ├── getComputedStyle()
// cant use document in place of windows=> it is a windows object not the document object


// better approach:===
buttons.forEach(function(button){
button.addEventListener('click',function(e){
    body.style.backgroundColor=window.getComputedStyle(e.target).backgroundColor
})
})

// e.target ke place pe this bhi write kr skte h optimal one


