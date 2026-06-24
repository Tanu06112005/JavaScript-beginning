// functions

//1.) non parameterised  plane functions

function sayName(){
    console.log("My name is Tanushika")   // addition of semicolon or the removal of the semicolon will not affect the code 
}
sayName();

function printingNumbers(){
    for( let i=0;i<10;i++){
        console.log(i);
    }
}
printingNumbers();

// parameterrises function 

function printNum(num){
    console.log("the number provided is :"+num);
}
printNum(6);

function calAvg(num1, num2,num3,num4){
    let avg=(num1+num2+num3+num4)/2;
    console.log(avg);
}
calAvg(20,30,10,100);

// function with return statement 

function getSum(num1,num2){
    let sum=num1+num2;
    return sum;
}
let Sum=getSum(13254,98675);
console.log("sum="+Sum);

function getMyName(firstName,lastName){
    let fullName= firstName + "  " + lastName ;
    return fullName;
}
let fullname=getMyName("tanushika", "pandit");
console.log(fullname);


// another method to write a function in a concised way(using expression)
let ans=function(a,b){          // anonymous function: function without name  :  function expression
    return a*b;
}
let answer=ans(2,3);
console.log(answer);

// arrow function :
        // using expression
let exp=function(a,b){
    let res=a**b;
    return res;
}
let result=exp(2,10);
console.log(result);
//--------------------------------------
        // using arrow function
let exp1=(a,b)=>{
    let res=a**b;
    return res;
}
let result1=exp(2,10);
console.log(result);    



//--------------------------------------------------------------------------------------------------------------------------

// default parameters in function

function calculateSum(num1, num2, num3){
    let m1=num1 ;
    let m2=num2;
    let m3=num3;
    return m1+m2+m3 
}

console.log(calculateSum(1, 2, 3));  // this will return 6
console.log(calculateSum(1, 2));  // this will return NaN because num3 is undefined and we are trying to add undefined to a number which results in NaN
console.log(calculateSum(1));  // this will also return NaN because num2 and num3 are undefined and we are trying to add undefined to a number which results in NaN


function calculateSum1(num1=10, num2, num3){
    let m1=num1 ;
    let m2=num2;
    let m3=num3;
    return m1+m2+m3 
}

//                        Note:  NaN+10=NaN
console.log(calculateSum1(1, 2)); // optional parameters should be at the end of the parameter list, otherwise it will not work as expected, because when we call the function with only two arguments then num1 will take the value of 1 and num2 will take the value of 2 and num3 will be undefined, but if we call the function with three arguments then num1 will take the value of 1 and num2 will take the value of 2 and num3 will take the value of 3, so it is better to keep optional parameters at the end of the parameter list to avoid confusion and to make the code more readable
console.log(calculateSum1(3,2,1));  // this will return 6 because we are providing all the parameters


function calculateSum3(num1, num2=10, num3=20){
    let m1=num1 ;
    let m2=num2;
    let m3=num3;
    return m1+m2+m3 
}
console.log(calculateSum3(1));  // this will return 31 because num2 will take the default value of 10 and num3 will take the default value of 20