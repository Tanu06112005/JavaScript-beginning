// arithmatic operator

let a=23;
let v=54764;
console.log(a+v);
console.log(a-v);
console.log(a/v);  // note: unlike in any other programming language division operator provides us th float value instead of the int value
console.log(a/v);
console.log(a*v);
console.log(a%v);
console.log(2**3);//exponent
console.log(a**v);


// assignment operator
console.log("--------------------------"); // it gives us a new line  
console.log("\n");  // it gives us two new lines 
let num1=22;
let num2=num1;
let num3;
num3=num2;
num2-=num3;

console.log(num1, num2, num3);

// comparision operator 
console.log(10 > 5);
console.log(10 < 5);
console.log(10 == 5);
console.log(10 != 5);
console.log(10 >= 5);
console.log(10 <= 5);

// loose equality: only compares the value not the type of the data
console.log("10 == '10'","=",(10 == '10'));

// strict equality: compares both the datatype as well as the value
console.log(10 === 5);
console.log("10"===10);
console.log(10 !== 5);

// ternary operator:
let age = 25;
let statusl = (age > 18)?'I can vote' : 'I cannot Vote';
console. log( statusl) ;

// logical operators

console.log(null && 0);
console.log(null && 10);
console.log(null || 10);
console.log(null && NaN);
console.log(null || NaN);



console.log(null || 0);
console.log(10 && 0);
console.log(10 || 0);

console.log(false || 7|| 10||12);// short-circuiting : will not move forward in case of or rperator if i true is tracked

// bitwise operator:

// bit level pe complement wala algo is followed and thus this results in the below answer
console.log(~0);
console.log(~10);
console.log(~(-10));
console.log(10<<2);
console.log(10>>2);


// nullisg coalescing operator (used for mainly null and undefined)
// symbol ??   
// returns the first non falsy value 

console.log()

console.log("here is the o/p for the nullinsg coalescing operator ");
let val1=5 ?? 10;
console.log(val1);

let val2=null?? 10;
console.log(val2);

let val3=undefined ?? 10;
console.log(val3);

let val4=null ?? 10 ?? 20;
console.log(val4);

let val5=null ?? undefined ?? 67;
console.log(val5);




//--------------------------------------------------------------------------
// conditional operators

let num=5;
if(num=1){
    console.log("a");
}
else if(num==2){
    console.log("b");
}
else if(num==3){
    console.log("c");
}
else if(num==4){
    console.log("d");
}
else if(num==5){
    console.log("e");
}
else{
    console.log(" the number out of bound");
}

// switch cases:
 let number=2;
 switch(number){
    case 1: console.log("a");
    case 2: console.log("b");
    case 3: console.log("--");
    case 4: console.log("--");
    case 5: console.log("--");
    default:console.log("invalid input");
 }



 // STRINGS

 let name="tanushika";
 let firstNAme='Tanuj';

 let multiline=` this is the template
 literals that 
           is used to create the multiline 
 string with the same struucture.`;
 console.log(name);
 console.log(firstNAme);
 console.log();
 console.log(multiline);
  console.log();

