// 1.

// function show() {
//   console.log(this);
// }

// show();


// 2.

// "use strict";

// function show() {
//   console.log(this);
// }

// show(); // undefined
// // reason for undefined: in strict mode, this is undefined in a regular function call. In non-strict mode, this would refer to the global object (window in browsers).


function greet() {
  console.log(this.name);
  console.log(this);  // this will refer to the object that is calling the greet function, in this case it will refer to user1 and user2 objects respectively when they call the greet function
}

const user1 = { name: "Tanushika", greet };
const user2 = { name: "Rahul", greet };

user1.greet();
user2.greet();





