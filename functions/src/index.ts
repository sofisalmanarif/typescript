

function mul(a:number,b:number):number{
    return a*b
}

console.log(mul(4,5))

type fun = (n:number,m:number)=>number  //here we create function type

const myfun:fun =(a,b)=>{
    return a+b
}



//-------------------------------------------------------------

//function with optiional paramaters


type funType = (n:number,m:number,l?:number)=>number  //here we create function type with optional params

const myfun2:funType =(a,b,c)=>{
    if(typeof c ==="undefined" )return a+b
    return a+b+c
}

console.log(myfun2(12,3))
console.log(myfun2(12,3,5))


//-------------------------------------------------------------

//Default parameter

type newfunType = (n:number,m:number,l?:number)=>number  //here we create function type with optional params

const myfun3:funType =(a,b,c=10)=>{
    
    return a+b+c
}


console.log(myfun3(12,3))

// with function keyword we have to use type like this
// const test:newfunType =function sum(n,m,l){
//     return n*m
// }


//-------------------------------------------------------------
//rest in ts
type restFunType =(...m:number[])=>number[]
const rest:restFunType = (...m)=>{
    return m
}

console.log(rest(10,20,30,40))



//-------------------------------------------------------------


//Generator function 
function* yeildFun(...m:number[]):Generator<number ,void ,unknown>{
    for(let item of m){
        yield item
    }
}


const gen = yeildFun(2,3,4,5,6)

for(let item of gen){
    console.log(item)
}



//-------------------------------------------------------------

//Function with objects
type product ={
    name:string,
    price:number,
    quantity:number
}

type getdataType = (product:product)=>void;

const getData :getdataType=(product)=>{
    console.log(product)
}

const newProduct :product ={
    name:"macbook",
    price:100000,
    quantity:10
}


getData(newProduct)


interface User{
    email:string,
    password:string
}

type myResponse ={
    status:boolean,
    readonly token:string;    //now token is readonly
    userName:string;
}

type myError ={
    status:boolean,
    message:string,

}

type GetUserType =(user:User)=>myResponse |myError

const getUser :GetUserType =(user)=> {
    return {
        status:true,
        token:"string",
        userName:"string",
    }
}

const newUser :User ={
    
    email:"salman@gmail.com",
    password:"123456"
}


console.log(getUser(newUser))