let score="33abs";
console.log(typeof(score));
let typescore=Number(score);  // the type of this conversion after is NaN, it is so because the string "33abs" after the typecasting will not be the form of the number 
console.log(typeof(typescore)); 

console.log(typescore); // 
let a=true;
let boolean_a=Number(a);
console.log(typeof(a));
console.log(boolean_a);

let bool=1;
let isBoolean=Boolean(bool);
console.log(isBoolean);

let num=12;
let intoString=String(num);
console.log(intoString);
console.log(typeof(intoString));
