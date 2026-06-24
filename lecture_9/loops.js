const arr=[1,2,3,4,5,6,7,8,9,10]
for(const i of arr){
    console.log(i)
}// this loop prints the value from the array 

for( let i in arr){
    console.log(i)
}// this loop peints the index of the elements

for( let {index,value} in arr){
    console.log(index," ", value)
}// for in do not gives objects 


arr.forEach((val)=>{
    console.log(val)
})
arr.forEach((val)=>val)// do nit print anything

const ans=arr.forEach((val)=>{return val})// do nit print anything
console.log(ans)

const anns=arr.forEach((val)=>{console.log(val)})// do nit print anything
console.log(anns)


// filter, map, reduce
let Myarr=[1,2,3,4,4,4,5,6,7,2,8]
let a1=Myarr.filter((num)=>num%2==0);
console.log(a1)

let a2=Myarr.filter((num)=>{
    return num%2==0});
console.log(a2)

// till yet a new array had been created by itself because of filter function 
// but what if filter was not there

let newArr=[];
Myarr.forEach((val)=>{
    if(val%2==0){
        newArr.push(val)
    }
})
console.log(newArr)


// map : do not eleminates the elements instead modify each element(acc to the condition specified) from the the given object and returns each of them 

let map1=Myarr.map((num)=>{
    return num*100;
})
console.log(map1)

// chaining: performs operations from left to right

let chainOp=Myarr.map((n)=>{return n*10}).map((n)=>{return n+2}).filter((n)=>{return n%2==0});
console.log(chainOp)

let chainOp1=Myarr.map((n)=>{return n*10}).map((n)=>{return n+2}).filter((n)=>{return n%2!=0});
console.log(chainOp1)



    
