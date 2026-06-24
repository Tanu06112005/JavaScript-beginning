// for loop -> same 
// while  loop -> same 
// do while -> same 
//-------------------------------------------------------
// for of loop:
// for of loops works only with the iterables only such as arrays, strings, maps
 const arr=[1,2,3,4,5,6];
 for(const i of arr){
    console.log(i);
 }



// for of loops are used in maps also

const mapobj=new Map();
mapobj.set('IN','INDIA');
mapobj.set("USA",'United States of America');
mapobj.set('Fr','France');

console.log(mapobj);  // note that the o/p of this statement is different 

for(const key of mapobj){
    console.log(key);       // it prints the array of the the key values
}
console.log();
console.log();
console.log("method to print the map ")
for(const [key,value] of mapobj){
    console.log(key,': ',value);
}

// with objects : for of loop doesn't works
// reason : objects are not iterable 
// hence objects is iterated through for in loops 

 const obj ={
    name:'tanveer',
    age:23,
    gender:'male'
 }
//  for(const key of obj){
//     console.log(key);
//  }

// for(const [key,value] of obj){
//     console.log(key,": ",value);    // or we can use back ticks also
// }
console.log();
console.log();

for(const key in obj){
    console.log(key);
}
console.log();
console.log();
for(const key in obj){
    console.log(key,": ",obj[key]);    // or we can use back ticks also
}

for(const [key,value] in obj){
    console.log(key,": ",value);    // or we can use back ticks also
}

///// for in loops with arrays 

const p=['cpp','java','js','ruby','c','python'];
for(const key in p){
    console.log(key);   // it is basically printing the indices(we can assume that)
}

for(const key in p){
    console.log(key," ",p[key]);   // it is basically printing the indices(we can assume that)
}

//-----------------------------------------------------------------------------------------------------------------


// for each loops in js 
// for each loops works with the functions : so we pass the functions in them : those function which do not have their name(are called as the callback functions)
const pp=['cpp','java','js','ruby','c','python'];

// using normal function without its name  :  always used with the call back functions 
pp.forEach(function (val){
    console.log(val);   
});

// using arrow function
pp.forEach( (val)=>{
    console.log(val);
});

// using function refrence
console.log("using function refrence");
function print(item){
    console.log(item);
}

pp.forEach( print);   //important point to notice 



console.log();
console.log(" more on for each");
const arr1 = [10, 20, 30];

arr1.forEach((value, index, array) => {
  console.log(`Index: ${index}, Value: ${value}, Array: ${array}`);
});


const map = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3]
]);

map.forEach((value, key) => {
  console.log(`Key: ${key}, Value: ${value}`);
});



/// most commonly used; 
// array of objects 
// it is iterated using for each loops 

const coding=[
    {
        languageName:"java",
        extension:".java"
    },
    {
        languageName:"python",
        extension:".py"
    },
    {
        languageName:"c++",
        extension:".cpp"
    },
    {
        languageName:"JavaScript",
        extension:".js"
    }
    
];
coding.forEach( (item)=>{    // item here refers to the : each object in the array 
    console.log(item.languageName);
});

