"use strict";
function basic(name) {
    return name;
}
console.log(basic(10));
console.log(basic('hello'));
// arrow functions with generics
const basics2 = (products) => {
    return products[0];
};
console.log(basics2(["name", "salman"]));
// generics with extends keyword
function person(name, age) {
    return {
        name,
        age
    };
}
person("salman", 4);
class sellable {
    cart = [];
    addToCart(product) {
        this.cart.push(product);
    }
}
const myCart = new sellable();
myCart.addToCart({ name: "DSA", price: 4555 });
myCart.addToCart({ code: "dfdfDSdnfhhA", discount: 4555 });
console.log(myCart.cart);
