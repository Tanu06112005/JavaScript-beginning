try{
    console.log("try block starts here");
    console.log(x);
    console.log("try block ends here");
        console.log();

}
catch(e){
    console.log("catch block");
    console.log(e);
    console.log();

    //retry logic
    //custom error
    //login again mechanism
    //fallback mechanism
}
finally{
    console.log('finnaly block always gets ececuted, whether ther occured an error or not ');
}

console.log();
// custom error
console.log("ceating our custom error");
// try{
//     console.log(x);
// }
// catch(e){
//     throw new Error("variale not declared error");
// }

// type 2
let errorCode=100;
if(errorCode==100){
    throw new Error("Invalid Json");
}
