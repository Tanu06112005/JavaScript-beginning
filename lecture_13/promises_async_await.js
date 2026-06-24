const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
                // let error=true;

    if(!error){
        resolve({username:"manisha",age:34})
    }
    else{
        reject("ERROR: JS went wrong")
    }
    },1000)
    
});


console.log("hello");


// async function consumePromiseFive(){
//     const response=await promiseFive;
//     console.log(response);
// }

async function consumePromiseFive(){
    try{
        const response=await promiseFive;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

consumePromiseFive();





/*
. What is async/await?

async and await are syntactic sugar built on top of Promises.

They make asynchronous code look and behave more like synchronous code, which makes it easier to read and maintain.

2. The async Keyword

Declaring a function with async makes it return a Promise automatically.

Even if you return a normal value, it will be wrapped in a resolved Promise.

3. The await Keyword

await is used inside async functions only.

It makes JavaScript wait until the Promise is settled (either fulfilled or rejected).

Instead of using .then(), you directly get the resolved value.

*/


//---------------------------------------------------------------------------------------------
/*   
🔹 1. Synchronous Functions

Code runs line by line, one after the other.

Each line must finish execution before the next starts.

This means if one line takes a long time (e.g., a big loop, or heavy calculation), everything else is blocked.


🔹 2. Asynchronous Functions

Code doesn’t block other operations.

Long-running tasks (like API calls, timers, file reads) are delegated to the environment (browser/Node.js).

JavaScript moves on to the next line while waiting for the task to finish.

Once the async task is done, the callback/promise result is placed in the event queue, and executed when the call stack is free.


*/