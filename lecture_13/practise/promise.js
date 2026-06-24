// here we will revise the promises, how it works & what are its uses 
// creating promise:
// promises are the  -*eventual objects*-  that are responsible for the execution of such events which are either needed to be continued shortly or rejected 

// it takes a function with two arguments(resolve, rejected), resolve is directly connected to the .then(which recieves the o/p from the execution of the task)


// is ex me only promise create hua h and task execute hua h(.then nhi chala h)
const p1=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 1")
    },1000)
})
p1.then(function(){
    console.log("async task 1 completed")
})
//--------------------------------------------------------
// .then chalane ke liye isko resolve se connect krna pdega 
const p2=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2")
        resolve()
    },1000)
})
p2.then(function(){
    console.log("async task 2 completed")
})

//---------------------------------------------
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 3")
        resolve()
    },1000)
}).then(function(){
    console.log("async task 3 completed")
})
//--------------------------------------------
// now let us see ki if koi data network se fethc hota h promise ke through to vo kaise print hota h 
new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("displaying the recieved data")
        resolve({username:"Mehak",userId:101})
    }, 2000);
}).then((user)=>{       // 'user' Token shows that some output is comming in the .then jise user se represent kr rhe h   
    console.log(user)
})

//---------------------------------------------
// call back hell( jb multiple return chain create ho jata h tb multiple .then chaining krte h )
console.log("\n")
new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("\n")
        console.log("chaining of the outcomes")
        resolve({username:"Mehak",userId:101})
    },3000)
}).then((user)=>{
    console.log(user)
    return user.username
}).then((name)=>{
    console.log(name)
}).catch(()=>{
    console.log("some error occured")
}).finally(()=>{
    console.log("either resolve has occured or the error has occured")
})

//-------------------------------------------------------------------
// how reject works:
// if async task complelte ho jata h + no error is occured : resolve 
// else : reject

new Promise(function(resolve,reject){
    setTimeout(()=>{
        const error=true
        console.log("\n")
        if(!error){
            resolve({username:"Mehak",userId:101})
        }
        else{
            reject("the task is rejected")
        }
        
    },4000)
}).then((user)=>{
    console.log(user)
    return user.username
}).then((name)=>{
    console.log(name)
}).catch(()=>{
    console.log("some error occured")
}).finally(()=>{
    console.log("either resolve has occured or the error has occured")
})

///////////////////////////////////////////////////////////////////////////////////////////////
//  till yet we learned how an async task is being done uusing promise and how do we catch the response using the and catch 
// no we will try to catch the response using : async and await


// const p3=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log()
//         console.log("async function ")
//         const error=true
//         if(!error){
//             resolve(function(){
//                 console.log("completed")
//             })
//         }
//         else{
//             reject(function(){
//                 console.log("rejected")
//             })
//         }
//     },5000)
// })
// async function ImplementingAsyncAwait(){
//     const a=await p3   // promise p3 se jo response aa rha h vo yaha store bo rha h 
//     console.log(a)
// }

// ImplementingAsyncAwait()

// what is the problem with this code :  if error is not there it will execute successfully 
//  but in case of error the async function will not handel the error


const p3=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log()
        console.log("async function ")
        const error=true
        if(!error){
            resolve(function(){
                console.log("completed")
            })
        }
        else{
            reject(function(){
                console.log("rejected")
            })
        }
    },5000)
})
async function ImplementingAsyncAwait(){
    try{
        const a=await p3   // promise p3 se jo response aa rha h vo yaha store bo rha h 
        // await ko use kiya jata h = jo bhi task complete hone me time lgta h uske cumplete hone ke liye wait krne ke liye so that uske bina complete hue aage ke task proceed n ho jaye 
        console.log(a)
    }
    catch(error){
        console.log("error",error)
    }
    
}

ImplementingAsyncAwait()

///////////////////////////////////////////////////////////////////////////////////////////////
// lets try with fetch 

async function Fetch(){
    try{
         const response=await fetch('url')
        console.log(response)
        const data= await response.json()
        console.log(data)
    }
    catch(e){
        console.log(e)
    }
   
}

// fetch k response type is promise : therefore we can use .then , .catch 
fetch('url')
.then(function(response){
    console.log(response)
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch(function(){
    console.log("error")
})



