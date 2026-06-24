//if we want some properties or method that should not be used bt any othe child class or by the objects 
// there we use staic keyword to restrict the usage of that particular property or the function




class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())    // this object cannot use the createId behaviour if the user class

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());          // the child class is also restricted to use the static methods 