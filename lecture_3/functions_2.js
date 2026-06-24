const user={
    username:"himesh",
    price:999,

    greet: function(){
        console.log(` Hello ! ${this.username}, welcome to our organization `);
    }
}

// console.log("current username: ",user.username);
// user.greet();
// console.log();
// user.username="meenakshi"; // it changes the current refrence from himesh to meenakshi
// user.greet();


// now notice here 
 const test_this={
    username:"Manan",
    age:13,
    class: 10,
    sec:"b",
    details: function(){
        console.log(`details about the current object ${this}`);
        console.log(this);
     // here each of the details about the objects are being displayed  using:--> console.log(this)
    }
 }

 test_this.details();


 // normal functions 
  function add(num1, num2){
    return num1+num2;
  }
  const ans=add(1,3);
  console.log(ans);

  // function expression
   const add0= function(num1, num2){
    return num1+num2;
  }
  const ans0=add0(1,3);
  console.log(ans);


  
//-----------------------------------------------------------------------------------------------------------------------------------------
  
//                                      important part  starts  from here   



// arrow function 
                    // syntax 1 for the arrow function 
  const add1=(num1, num2)=>{
    return num1+num2;
  }
  const ans1=add1(1,3);
  console.log(ans);

                    // syntax  for the arrow function

// this is called implicit return : implicit because we do not need to write the return keyword explicitly
// if we mention the {} return keyword likhna pdega but if we do not use {} return keyword nhi likhna hoga
const add2=(num1,num2)=>(num1+num2);   
const ans2=add2(3,5);
console.log(ans2);  




// In short: 
//          implicit return means: arrow function without return statement and without curly braces(   it may or may not includes the "()" paramthesis )
//          explicit return means: arrow function with return statement and with curly braces

// objects bhi implicitly return kiya ja skta h but vo primitives ki trh nhi hota h different syntax follow krta h 

const obj_r=()=>{ name:"mitron" };
console.log(obj_r());  // here we are trying to return the object thru the arrow function but he output is undefined because we are using {} to wrap the object and it is considered as a block of code and it is not returning anything but if we use () to wrap the object then it will return the object as expected





const obj2=()=>{return{ name:"also valid" }};
console.log(obj2());  // here we are returning an object using arrow function and we are using return keyword to return the object and it is working as expected
const obj_return=()=>({name:"Tanushika"});
console.log(obj_return());  // here we are returning an object using arrow function and we are using () to wrap the object because if we do not use () then it will be considered as a block of code and it will not return the object but if we use () then it will return the object as expected

//--------------------------------------------------------------
// NOTE: most important inteview question :-

//question: can this keyword be used in the arrow functions 
  const addd=(num1, num2)=>{
    console.log(this); // not working  so, this keyword do not work in the functions, instead it works only in objects 
    // refrences are not the part of the functions
    return num1+num2;
  }
  const anss=add1(1,3);
  console.log(anss);
//--------------------------------------------------------------



  //taking another example :

  const obj={
    name:"tanvihhhshree",
    getname: ()=>{
        console.log(this.name);   // 
    }
  };
obj.getname();
// Here, getname is an arrow function.

//  Arrow functions do NOT have their own this.
// They take this from their lexical (surrounding) scope.

// In this case, this does not refer to obj.
// It refers to the global object (window in browser, or {} in Node).

// So this.name is undefined.

const obj1={
    name:"tanviiiishree",
    getname: function(){
        console.log(this.name);
    }
  };
obj1.getname();








 



