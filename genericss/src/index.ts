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


// generics with extends keyword

function person<T,U extends number>(name:T,age:U):object{
    return{
        name,
        age
    }

}

person("salman",4)

interface course {
    name:string,
    price:number
}

interface coupon{
    code:string,
    discount:string
}


class sellable <T>{

public cart :T[]=[]

public addToCart(product:T){
    this.cart.push(product)
}
}

const myCart = new sellable()

myCart.addToCart({name:"DSA",price:4555})
myCart.addToCart({code:"dfdfDSdnfhhA",discount:4555})
console.log(myCart.cart)