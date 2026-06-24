class Railway{
    constructor(Name,trainNo,Address){
        console.log("constructor is called");
        this.name=Name;
        this.trainNo=trainNo;
        this.Address=this.Address;
    }

    preview(){
        window.alert(this.name+", your details have been verified \n"+" Train No.: "+this.trainNo+"\n address: "+this.Address);
    }
    submit(){
        window.alert(this.name+", your form has been submitted with train no. "+ this.trainNo);
    }
    cancel(){
         this.trainNo=0;
        window.alert(this.name+", your form has been cancelled with train no. "+ this.trainNo);
       
    }
}

let RiteshForm=new Railway('Ritesh',192306,"201, Ambala ,Punjab 200129");
RiteshForm.preview();
RiteshForm.submit();
RiteshForm.cancel();