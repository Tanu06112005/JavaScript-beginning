// array is the collectionn of items(any data type may be an object)
// array itself is an object


// array creation 
// 1.) using array literals
let arr=[1,2,3,4,"monkey", true];
console.log(arr);
console.log(arr[6]);
console.log(arr[3]);
console.log(typeof(arr));

// 2.) using array constructors 
let brr=new Array(1,2,3,4,5,6,"banana", "monkey");
console.log(brr);
console.log(brr[6]);
console.log(brr[3]);
console.log(typeof(brr));


// built-in functions in java script 

let test=[1,2,3,4,5,"tanu","Tanushika", true, false];
test.push("hello world");  //adds an element to the end of the array
console.log(test); 

test.pop();  // deletc the element from the end 
console.log(test);

test.shift(); // just like left shift :deletes the items from starting 
console.log(test);

test.unshift("34"); // just like right shift : add an item to the starting of the array
console.log(test);

console.log(test.slice(2,5));  // slicing function 
console.log(test.slice(2));
console.log(test.slice());

test.splice(1,2,'kulnal');  // splice : it deletes the items from the array starting  from the first index argument provided till the 2nd argument provided and adds the 3rd argument provided in  the splice function
console.log(test);
//-------------------

//map function in arrays 
let ar=[10,20,30];
let ans=ar.map((num)=>{
    return num*num;
});
console.log(ans);
//------------------------
let ans1=ar.map((num)=>{
    return num+1;
});
console.log(ans1);
//----------------------
let ans2=ar.map((num)=>{
    console.log(num+1);
});
console.log(ans2); 
//------------------------
ar.map((num,index)=>{
    console.log(num,index);
});
//-------------------- 

//filter function in arrays

let a1=[1,2,3,4,5,6,7,12,'hello'];
let ans3=a1.filter((num)=>{
    if(num%2==0){
        return true;
    }
    else {
        return false;
    }
});
console.log(ans3);

let ans4=a1.filter((val)=>{
    if(typeof(val)=='string'){
        return true;
    }
    else return false;
});
console.log(ans4);
console.log(typeof("tanu"));

let ans5=a1.filter((val)=>{
    if(typeof(val)=='number'){
        return true;
    }
    else return false;
});
console.log(ans5);


let a2=[1,4,2,3,8,9,34,43,0];
console.log(a2.sort());
console.log(a2.reverse());     // reversed after sorting for descending order

// console.log(a2.find(2));     // not the correct syntax


//for each loop 
console.log("for each loop");
a2.forEach((value,index)=>{
    console.log("value: ",value, " index: ",index);
});
console.log();
let obj = {
    name: "Love",
    age: 25,
    weight: 85,
    height :"6ft lin",
    greet: function(){
        console.log("jee kaise ho saare") ;
    }
};
for(let key in obj){
    console.log(key);
}
for(let key in obj){
    console.log(key," ",obj[key]);
}

//for in loop
console.log("for in loop");

for(let value in a2 ){
    console.log("value: ",value);
}

//for of loop 
console.log("for of loop");

for(let val of a2){
    console.log(val);
}


