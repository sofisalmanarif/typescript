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
