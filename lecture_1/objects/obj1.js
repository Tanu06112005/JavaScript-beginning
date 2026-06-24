// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",// jo key hai wo string me convert ho jata hai, isliye hum symbol ka use karte hai
    "full name": "Hitesh Choudhary",
    mySym: "mykey1",// isko bhi string me convert kar dega, isliye hum symbol ka use karte hai
    // upr wale syntax me symbol datatype ki trh use nhi ho rha h , vo bhi string me converrt ho rha h 
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


// normal keys ko access krne ke there are two methods 
// console.log(JsUser.email)
// console.log(JsUser["email"]) // kyuki jo keys h vostrings me convert ho jati h to hum is tarah se bhi access kr skte h



// console.log(JsUser."full name")// jo keys already string me written hoti h unhe ese access nhi kr skte h 
// console.log(JsUser.full name)// aur n hi ese kr skte h 

// console.log(JsUser["full name"])  // this is correct way to access keys which are not in string format or which have space in between them


// console.log(JsUser[mySym])






JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)  // freeze function se object ke andar ke values change nhi ho sakti h, aur na hi new key add kr skte h, aur na hi delete kr skte h
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting);  // isse only function ki definition print hogi, kyuki humne function ko object ke andar store kiya h(only function reference will br printed )
console.log(JsUser.greeting()); // isse function call hoga aur function ke andar ka code execute hoga, aur jo bhi humne console.log me likha hoga vo print hoga, aur agar function ke andar return statement hota to vo bhi print hota, but yaha return statement nhi h isliye undefined print hoga
console.log(JsUser.greetingTwo());