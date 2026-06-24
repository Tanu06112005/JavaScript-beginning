// in javaScript arrays are dynamic not static

const arr=[1,2,3,4,5,6];
console.log(arr);

const arr1=new Array(9,8,7.6);
//push(argument)
//pop()
//shift()
//unshift()
//slice()  as the name suggests
//splice() removes the range of elements and add the in place the 3rd element 
// join()    arr.join();

// pushing another array into the array
const arr2=[12,123,1234,12345];
const arr3=['a','b','c','d'];
// arr2.push(arr3);
console.log(arr2);

const arr0=arr2.concat(arr3);
console.log(arr0);

     ///   splice()
// 👉 Adds / removes elements
// 👉 Modifies original array
// 👉 Returns removed elements
// Syntax:
// arr.splice(start, deleteCount, item1, item2, ...)
// 🔹 Example 1: Remove elements
let a = [1, 2, 3, 4, 5];
a.splice(1, 2);
console.log(a);  // [1, 4, 5]
// (Removed 2 elements starting from index 1 → 2,3)

// 🔹 Example 2: Add elements
let b= [1, 4, 5];
b.splice(1, 0, 2, 3);
console.log(b);  // [1, 2, 3, 4, 5]
// (deleteCount = 0 means don't remove anything)


// 🔹 Example 3: Replace elements
let arrr = [1, 2, 3];
arrr.splice(1, 1, 10);
console.log(arrr);  // [1, 10, 3]
// (Removed 2 and added 10)


//----------------------------------------------using spread operator
const arrspread=[...arr2,...arr3];   // mostly used
console.log(arrspread);

// spread operator and the concat function works similarly but the only difference is that 
//  we can pass many arguments to the spread operator but only single argument to the concat 



console.log (Array.isArray ( "Hitesh" ) );
console.log (Array.from ( "Hitesh" ) );
console.log(Array.from({name:"hitesh"}));
let score1 = 200;
let score2=76879;
let score3=567;
console.log(Array.of(score1,score2,score3));



// Important Concept

// Array.from() only works on:
// Iterable objects (like string, set, map)
// Array-like objects (must have length property)
// 🔹 { name: "hitesh" }
// Not iterable ❌
// No length property ❌
// So JavaScript cannot determine how many elements to create.

// ✅ Output:
// []
// It returns an empty array.