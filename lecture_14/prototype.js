// prototypes are the methods to add custom methods into our objects prototype 
// note:  we can add our custom function to the objects prototype only by accessing the parent of that object 
// for example if we consider array , it is an object and its parent is Object , if we wan to add anew function to the array's prototype we need to add the fuction to the object , but if we add it to the Array it will not get added to the prototype  

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
} // here we have added the new function hitesh to the object hence it is available to the the array itself

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
heroPower.heyHitesh()





