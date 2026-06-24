
//1.)
class Human{
    name;       //public acces 
    #age;       // private access using # ---> we require getters and setters
    height;
    weight;

     constructor(Name,Height,Weight){
        this.name=Name;
        this.height=Height;
        this.weight=Weight;
     }

    get getAge(){
       return  this.#age;
    }
    set setAge(age){
        this.#age=age;
    }

    running(){
        console.log( " is running");
    }
    walking(){
        console.log( " is walking");
    }
}

let rakesh=new Human('Rakesh',1234,76);
rakesh.running();
rakesh.setAge=24;       // here we are setting the age of our object (this id different from java)
console.log(rakesh.getAge);     //NOTE: it is not a normal function, in js getters are treated differently
console.log(rakesh.name);
console.log(rakesh.height);
console.log(rakesh.weight);

//---------------------------------------------------------------------------------------------------------

//2.) from code with harry: Railway  one 
console.log("example 2");

class Railway{
    submit(){
        console.log(this.name,": your form has been submitted");
    }
    cancel(){
        console.log(this.name,": your form has been cancelled");
    }
    fill(Name){
        this.name=Name;
    }

}

let harryForm=new Railway();
harryForm.fill('Harry');
harryForm.submit();
let rahulForm=new Railway();
rahulForm.fill('Rahul');
rahulForm.cancel();
rahulForm.submit();
 









