// every element in js is an object whether it be an array or even the funcion 

function multipleBy5(num){
return num*5
}
multipleBy5.power = 2
console. log (multipleBy5(5) ) ;
console. log (multipleBy5. power) ;
console. log (multipleBy5. prototype) ;

function createUser(username,score){
   this.username=username;
    this.score=score;
}

createUser.prototype.increment= function(){
    this.score++;
}
createUser.prototype.printMe= function(){
   console.log(`the score is ${this.score}`);
}


const obj1=createUser("first",25);
const obj2= new createUser("second",240);

obj2.printMe();

// obj1.printMe(); // without using new keyword the object is not been created (hence generates error) 

// jb bhi hm ek object create krte h and prototypes add krte h t created object ko kuch pta nhi chalta h ki kuch add bhi hua h isliye initialization ke time pr new keyword sari info ko collect krta h from the creation to the end and observes kya kya action perform hue h in mid way 






/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/