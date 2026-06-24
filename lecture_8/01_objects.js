//------------------------part 1--------------------------


                    // creation method 
                     //1.) using literals 


const jsuser={
    name:"himesh",
    "full name":"himesh reshamia",

    age:18,
    location:"maharashtra",
    email:"himesh@gmail.com",
    isLoggedIn:true,
    lastLoginDays:["monday","tuesday"]
}


jsuser.greeting=function(){
    console.log("hello js useres..!");
}

jsuser.greeting2=function(){
    console.log(`hello js user, ${this.name}`);
}

jsuser.greeting();
jsuser.greeting2();

// very very important point to take note of it....
// always seen that we access the object element using dot operator but there is an another method too 
//  i.e. like jsuser["email"];
console.log()
console.log(jsuser.name);
console.log(jsuser.email);   // this also works
console.log(jsuser["email"]);       // this also works
// console.log(jsuser."full name");    it is not the correct way here cant execute 
console.log(jsuser["full name"]);   // these type of the elements of the objests acn only be accesed by only this method



Object.freeze(jsuser); // it is used when you dont want the object to modify any further 
jsuser.name="ranveer";
console.log(jsuser.name);//this doest works 
console.log()




//-----------------------------------------------------------

//most important interview question 
// define a symbol ans add it into an object 

const sym=Symbol("key1");
const obj1={
    name:"tanushika",
    age:50,
    [sym]:"mykey1",
}
console.log(jsuser[sym]);


console.log();
console.log();
console.log("---------------part 2-----------------");

//-----------------------part 2--------------------------

                // singleton:using constructors 


const tinderUser={};        // not a singleton object 
console.log(tinderUser);

tinderUser.id=1;
tinderUser.name="mansi";
tinderUser.contact=9897657842;
console.log(tinderUser);
console.log();


const tinderUser1=new Object();
console.log(tinderUser1);

console.log( "keys",Object.keys(tinderUser));
console.log("values",Object.values(tinderUser));



//nested objects 

const regularUser={
    userId:1023,
    email:"manas@gmail.com",
    userfullname:{
        fullname:{
            firstname:"manas",
            lastname:"choudhary"
        }
    }

}

console.log(regularUser.userfullname.fullname.firstname);


// MERGING MULTIPLE OBJECTS INTO AN OBJECT 


const obj4={name:"tanu",age:45 };
const obj2={name:"meeraa",age:15 };
const obj3={name:"khushi",age:35 };

const merge1={obj4,obj2,obj3};
console.log("merge1",merge1);

const merge2=Object.assign({},obj4,obj2,obj3);
console.log("merge2",merge2);


// mostly used/ latest / asked:
const merge3={...obj4,...obj2}; // spread operator
console.log("merge3",merge3);

//------------------------------------------------------

//arrays with objects:
let objectArr=[
    {a:1,b:2},{z:26,y:25},{c:3,d:4}
]
//accessing:
console.log(objectArr[0].a);




