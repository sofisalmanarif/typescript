

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