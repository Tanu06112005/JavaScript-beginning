const pi=3.14;
let accountEmail="rajat@gmail.com";
var account_name="Rajat Tiwari";

console.table([pi,accountEmail,account_name]);
//let: declaration(yes), re declaratiion(no),modification(yes)
//var: declaration(yes), re declaratiion(yes),modification(yes)
//const: declaration(yes), re declaratiion(no),modification(no)

// var has global and function scope 
// let  has global, functional as well as block scope 


{
    var a=20;
    console.log(a);
}
console.log(a);

{
    let b=2001;
    console.log(b);
}
//console.log(b); // this statement will not execute


// vraoables can be declared without using any keyword also but not recommended

map=21;
console.log(map);