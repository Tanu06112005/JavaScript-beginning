

//stage 1:

// here, printobj is calling the function call me but the execution contect is still with the printobj function 


// function callme(username){
//     this.username=username;
//        console.log("called");
// }

// function printobj(username,email,password){
//     callme(username);

//     this.email=email;
//     this.password=password;
// }

// const user1= new printobj("mahesh","mahesh101@gmail.com","12345678");
// console.log(user1);


//stage 2:


 function callme(username){
    this.username=username;
    console.log("called");
}

function printobj(username,email,password){
    callme.call(this,username);

    this.email=email;
    this.password=password;
}

const user1= new printobj("mahesh","mahesh101@gmail.com","12345678");
console.log(user1);



// call---> provides(creates) the ececution contect 
// this ----> provides the refrence where to hold the execution contect of the function or object called
