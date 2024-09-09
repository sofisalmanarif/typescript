function basic<T>(name:T):T{
    return name
}


console.log(basic(10))
console.log(basic('hello'))


// arrow functions with generics
const basics2 =<T>(products:T[]):T=>{
    return products[0]
}

console.log(basics2(["name","salman"]))