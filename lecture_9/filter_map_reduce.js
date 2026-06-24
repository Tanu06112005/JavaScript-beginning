/* so far we have learned that , we can print each elements from the iterables and the objectes using the various loops 
    but what i  we want to extract only some of the elements  from them  using loops ...?

     here we use filter, map, and reduce methods 
*/
//---------------------------------------------------------------------------------
// printing the elements 
const arr=[1,2,3,4,5,6,7];
arr.forEach( (val)=>{
    console.log(val);
});

// returning the elements
console.log(" returning the elements");
const result=arr.forEach( (val)=>{
    return val;
});
console.log(result);   
// gives the output as: undefined  ( it means it do not returns anything )
// we cant retrieve the elements from them using loops 
//---------------------------------------------------------------------------------


//----------------------  filter: ---------------------------
// What filter does
/*It creates a new array containing only the elements that pass a given test function (callback).

It does not change the original array.
*/

const nums=[1,2,3,4,5,6,7,8,9];
const newnums=nums.filter( (number)=>number>4);  // that concept no use of curly braces so no need to write return statement (implicit return) 
console.log(newnums);

const newnums1= nums.filter( (number)=>{
    return number%2==0;
});
console.log(newnums1);
// till yet a new array had been created by itself because of filter function 
// but what if filter was not there
const ab1=[1,2,3,4,5,6,7,8,9];
const newab1=[];
ab1.forEach( (number)=>{
    if(number>5){
        newab1.push(number);
    }
});
console.log(newab1);


//---------------------- practical example:  --------------- 
const books = [       // array of objects
  {
    bookName: "The Great Gatsby",
    genre: "Classic",
    publishingDate: "1925-04-10"
  },
  {
    bookName: "To Kill a Mockingbird",
    genre: "Fiction",
    publishingDate: "1960-07-11"
  },
  {
    bookName: "1984",
    genre: "Dystopian",
    publishingDate: "1949-06-08"
  },
  {
    bookName: "The Hobbit",
    genre: "Fantasy",
    publishingDate: "1937-09-21"
  },
  {
    bookName: "The Da Vinci Code",
    genre: "Mystery/Thriller",
    publishingDate: "2003-03-18"
  }
];
const filter=books.filter( (bk)=>bk.genre==="Fiction");
console.log(filter);



//------------------------------ Map method ----------------------

const asdf=[1,2,3,4,5,6,7,8,9];
const asdf_1=asdf.map( (num)=>{
    return num*10;
});
console.log(asdf_1);

// chaining : just like streams 
// chaining: performs operations from left to right

const mynewnum=asdf
                .map( (num)=>num*10)
                .map( (num)=>num+2)
                .filter( (num)=>num%2==0);
  console.log(mynewnum);


//--------------------- reduce ----------------------------

// reduce: 
// it reduces the array of the iterator to the single value 

const dd=[1,2,3,4,5];
const total=dd.reduce( (acc, currval)=>{
    return acc+currval;
}, 0);
console.log(total);

const total1=dd.reduce( (acc, currval)=>{
    console.log(`accumulator: ${acc} currentvalue ${currval}`);
    return acc+currval;
}, 0);    
console.log(total1);
// the value which is returned by the method at each step is taken by the acumulator at each stage 

 
 // practical example;   find the total price 
 const courses = [
  {
    courseName: "JavaScript for Beginners",
    price: 499
  },
  {
    courseName: "Advanced Python Programming",
    price: 799
  },
  {
    courseName: "Full-Stack Web Development",
    price: 1499
  },
  {
    courseName: "Data Structures & Algorithms",
    price: 999
  },
  {
    courseName: "Machine Learning with Python",
    price: 1299
  }
];

 // trying to check what happes by adding 0
 console.log("adding  default 0");
const totalprice=courses.reduce( (acc,item)=>{     // item is the parameter indicating the current object in the arr provided
    return acc+item.price;
},0); // accha ye 0 yek default valuse h jisme itens ki value add hoti h (0+.....)
console.log(totalprice);



const totalprice2=courses.reduce( (acc,item)=>{     // item is the parameter indicating the current object in the arr provided
    return acc+item.price;
},12000); // (12000+.....)
console.log(totalprice2);



 
 

