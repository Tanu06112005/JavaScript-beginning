class user{
    constructor(username,email, password){
        this.username=username;
        this.email=email;
        this.password=password;
    }

    encryptPassword(){
        return `${this.password}abc`;
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }
}

const user1=new user("mahesh","mahesh@gmail.com","1234");
console.log(user1);
console.log(user1.changeUsername());
console.log(user1.encryptPassword());


// behind the scene what is happenening 

function User(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}

User.prototype.encryptPassword=function(){
     return `${this.password}abc`; 
}
User.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`;
}

const user2=new User("chirag","chi@gmail.com",111);
console.log(user2);




