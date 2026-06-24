// hoisting: process in which var declaration and the function declaration reaches the top
// types : variable and function hoisting 



//1.)

//{

// var a;    // happening something like that ki var declaration is moving at the top 

console.log(a);
var a=20;

//}

//2.)

//{

//function sayHello(){         getting declared here 
  //  console.log("Hello");}


sayHello();
function sayHello(){
    console.log("Hello");
}


//3.) no hoisting can be achieved using let and const keywords 
// console.log(b);
let b=90;
console.log(b);

// console.log(c);
const c=90;
console.log(c);

//4.) no hoisting can be achieved using function expression or arrow expression 

// let ans=add(2,5);
// console.log(ans);

let add=function(a,b){          // function expression 
    return a+b;
}
let ans=add(2,5);
console.log(ans);

//---------------------
// let ans=add(2,5);
// console.log(ans);

let sub=(a,b)=>{          //   arrow function  
    return a-b;
}
let ans1=sub(2,5);
console.log(ans1);


//4.)  hoisting can also not be achieved by classes
// const dog=new animals();

class animals{

}
const dog=new animals();

//----------------------------------------------------------------------------------------------------------------------------------------------------


// why function is called as the " FIRST CLASS CITIZENS "....
// REASON: it is used in many ways

//(i): function is assigned to variables 

let v=function(){
    console.log("hello madam");
}
v();
console.log();

//(ii) passed as function parameter

function passingInParameter(greet,name){
    console.log("hello",name,"...!");
    greet();
}

let greet=()=>{
    console.log("Greetings for the day\n");
}
passingInParameter(greet,"Tanushika");
console.log();

//(iii) return the function 

let cal=function(){
    return (a,b)=>{
        return a*b;
    }
}
let calans=cal();  // now calans is also a function 
let ansToCalans=calans(2,3);
console.log(ansToCalans);

//(iv) functions as array items 


let calculator=[
    function add(a,b){
        return a+b;
    },
    function sub(a,b){
        return a-b;
    },
    function mul(a,b){
        return a*b;
    },
    function div(a,b){
        return a/b;
    }
];
let ab=calculator[0];
let res=ab(20,80);
console.log(res);
console.log();
//(v) as properties

let personObj={
    name:'Mahesh',
    age:42,
    weight:80,
    height:'5ft 9in',
    occupation: (occ)=>{
        console.log("occupation is : ", occ);
    }
}
console.log(personObj.name);
personObj.occupation("doctor");









