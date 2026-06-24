//----------------------iimidiately invoked functions Expression----------------
//  (IIFEare the functionswhich are invokef just after the function  is ended , it runs immediately after the function id completed)
(function chai(){
    console.log("Yes the project is connected globally")
})();



((name)=>{
    console.log(`${name}, the email is sent to the client`);
})("Manisha");