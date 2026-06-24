// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
// merging the objects
// const obj3 = { obj1, obj2 }// this will not merge the objects but will create a new object with keys obj1 and obj2 and values as the objects obj1 and obj2 respectively



// const obj3 = Object.assign({}, obj1, obj2, obj4)
                        //   source(result object) ,, items which we want to merge




// the above syntax is used to merge the object effeciently and also we can add new key value pair in the same line 


//--------------------------------------------------------------------------------------------------------------------------------------------

const target={1:"a", 2:"b", 3:"a", 4:"b"};
const source1={3:"c", 4:"d"};
const source2={5:"e", 6:"f"};

const returnedTarget = Object.assign(target, source1, source2);

console.log(target);
// expected output: Object { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f" }
console.log(returnedTarget===target);
// expected output: true
console.log(returnedTarget);
// expected output: Object { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f" }

// what does === does ? it checks the reference of the objects, if both the objects are pointing to the same reference then it will return true otherwise false, in the above example both target and returnedTarget are pointing to the same reference so it will return true

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const obj3 = {...obj1, ...obj2}  // spread operator is used to merge the objects and also we can add new key value pair in the same line
// what does the apread operator do? it spread the object into key value pairs(separate elements) and then merge them into a new object, and if there are same keys in the objects then the value of the last object will be taken as the value of that key in the new object
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]



users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));// it will give us an array of keys of the object
// console.log(Object.values(tinderUser));// it will give us an array of values of the object
// console.log(Object.entries(tinderUser)); // this will give us an array of arrays, where each inner array will have two elements, first element will be the key and second element will be the value of that key in the object

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));






//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// object destructuring:-
//      Object destructuring is a feature in JavaScript that lets you extract values from objects and assign them to variables in a clean, concise way.

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// const variable=course.courseInstructor
                    // OR
// const {kya extract krna h}= kaha se extract krna h         // te bs ek syntatic sugar hai jo hume code ko clean aur readable banane me help krta h, isme hum object ke andar se values ko extract krte h aur unhe variables me store krte h, isse hum easily access kr skte h un values ko bina baar baar object ke naam ke sath access krne ke, aur agar hum chahte h ki variable ka naam alag ho to hum uske liye short name de skte h, jese ki upar wale example me humne courseInstructor ko instructor naam se extract kiya h, to ab hum instructor variable ke through courseInstructor ki value ko access kr skte h
//const {kya extract krna h : koi short name you can give} = kaha se extract krna h 

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);
// console.log(courseInstructor);   // abhi name change hone ke karan ye error dega, kyuki courseInstructor variable ab exist nhi krta h, uska naam instructor ho gya h, to ab hume instructor variable ke through hi courseInstructor ki value ko access krna hoga, aur agar hum courseInstructor variable ke through access krne ki koshish karenge to ye error dega ki courseInstructor is not defined, kyuki ab courseInstructor variable exist nhi krta h, uska naam instructor ho gya h






// here the instructor was explaining the different types of format for the data that we will need to work with in the real world, and ho wto work with them, and hor to convert them into the format that we want to work with

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


// object of objects 
// array of objects
// or mixed data types in the array or object
[
    {},
    {},
    {}
]

/*
// we have a website to use the josn data
// that is : ransomuser me api

// code converter :  jsonformatter.org/json-to-js-converter
*/