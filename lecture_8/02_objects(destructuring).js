//de structuring the objects
//Object destructuring is a syntax in JavaScript that allows you to unpack values from objects into separate variables quickly and cleanly.
// similar tounpacking tuples in python 



const course ={
coursename:"js in hindi",
price: "999" ,
courseInstructor: "hitesh"
}
// course. courselnstructor
const {courseInstructor}/*what all*/ = course/*from where*/
console. log(courseInstructor) ;

const {courseInstructor:instructor}= course
console. log(instructor) ;

const {price,coursename}=course;
console.log(price);




const person = { name: "Alice", age: 22, city: "Pune" };

const name = person.name;
const age = person.age;
const city = person.city;

console.log(name, age, city);


