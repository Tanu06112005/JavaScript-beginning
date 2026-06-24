async function getAllData(){
    try{
        const response= await fetch('https://jsonplaceholder.typicode.com/users');    // it will take time there fore we need to write await here
        console.log("using async await")
        console.log(response);
        // const data=(response).json();
        // console.log(data);
    }
    catch(e){
        console.log("ERROR: something went wrong");
    }
}
getAllData();


console.log("hello")
console.log()


// same function using then and catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response;
})
.then((data)=>{
    console.log("using then and catch")
    console.log(data)
}).catch((error)=>{
    console.log("error occurecd");
})


console.log()
console.log()





// OBSERVATION:


/*
 all the task that do not take much time are executed first
 as that of the console.log("hello")
 console.log()

after then, there comes the chance of async await function abd being it asynchronous, it will allow the other code to be executed first, this is the reason then and catc is executing first 
*/







