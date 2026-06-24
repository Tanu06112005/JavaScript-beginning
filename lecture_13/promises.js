  
  /* In JavaScript, a Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
Think of it as a placeholder for a value that will be available in the future.

Promise States

A promise has 3 states:

Pending – Initial state, operation not completed yet.
Fulfilled – Operation completed successfully, returns a value (resolved).
Rejected – Operation failed, returns a reason (error).

*/  
  
  
  
  
  // Syntax:  

//   const promiseNAME=new Promise(/*callback*/
//     // do any async task
//     // DB calls, 
// );




// in order to connect our created promise to then we need to call resolve method into our promise 
const promiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task is completed ");
        resolve();
    },1000);
})
//resolve is directly connected to .then : mtlb agar async task complete hota h to jo bhi output h vo .then se display hota h 
// reject is connected to .catch
// .finally ialways runs whether the promise is resolved or rejected 
// setTimeout function is used here to provide the asynchronous behaviour to the function execution


promiseOne.then(function(){
    console.log("Promise consumed")
})
console.log();


//--------------------------------------------------------------------------------------
// from chatGPT:
let myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("✅ Operation successful!");
  } else {
    reject("❌ Operation failed!");
  }
});

// Consuming the promise
myPromise
  .then(result => console.log(result))   // runs if resolved
  .catch(error => console.error(error))  // runs if rejected
  .finally(() => console.log("Promise settled"));


//--------------------------------------------------------------------------------------

console.log();


// writing it in single entity 

new Promise( function(resolve,reject){
  setTimeout(function(){
    console.log("async task 2");
    resolve();

  },1000)
}).then(function(){
  console.log("Async task 2 resolved");
});

console.log();
// resolve is directly connected to (then)
const promiseThree= new Promise(function(resolve,reject){
  setTimeout( function(){
    resolve(
        {
          username:"tanushika",
          email:" tanu@gmail.com"
        }
    )
  });
});
promiseThree.then(function(user){
  console.log(user);
  console.log("trying to see how the resolve is connected to the then ");
  console.log("and check how the data is retrieved from the promise to get it consumed/ successfully executed ")
});


console.log();


//--------------------------------------------------------------------------


const promiseFour_var=new Promise(function(resolve, reject){
  setTimeout( function(){
  let error=true;
  if(!error){
    resolve({username:'hitesh',gender:'male'})
  }
  else{
    reject('ERROR: Something went Wrong')
  }
  },2000);

})

// promiseFour.then().catch();


// lets try to store the value it is returning intoa variable 

const res=promiseFour_var.then((user)=>{
  console.log(user);
  return user.username;  
});

// but actually is is not getting stored into the variable 
// there we use different approach to store the returned value  using chaing of then


//--------------------------------------------------------------------------------------------

const promiseFour_chaining=new Promise( function(resolve,reject){
  setTimeout( function(){
    let error=true;

    if(!error){
      resolve("async is successfully implemented");
    }
    else{
      reject("ERROR: Something went wrong");
    }

    },1000)
  });
  promiseFour_chaining
  .then((user)=>{
    console.log(user);
    return user.username;
  }).then((username)=>{
    console.log(username)
  }).catch(function(error){
    console.log(error)
  }).finally(()=>console.log("finally"));



