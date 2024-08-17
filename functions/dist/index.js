"use strict";
function mul(a, b) {
    return a * b;
}
console.log(mul(4, 5));
const myfun = (a, b) => {
    return a + b;
};
const myfun2 = (a, b, c) => {
    if (typeof c === "undefined")
        return a + b;
    return a + b + c;
};
console.log(myfun2(12, 3));
console.log(myfun2(12, 3, 5));
const myfun3 = (a, b, c = 10) => {
    return a + b + c;
};
console.log(myfun3(12, 3));
const rest = (...m) => {
    return m;
};
console.log(rest(10, 20, 30, 40));
//-------------------------------------------------------------
//Generator function 
function* yeildFun(...m) {
    for (let item of m) {
        yield item;
    }
}
const gen = yeildFun(2, 3, 4, 5, 6);
for (let item of gen) {
    console.log(item);
}
const getData = (product) => {
    console.log(product);
};
const newProduct = {
    name: "macbook",
    price: 100000,
    quantity: 10
};
getData(newProduct);
const getUser = (user) => {
    return {
        status: true,
        token: "string",
        userName: "string",
    };
};
const newUser = {
    email: "salman@gmail.com",
    password: "123456"
};
console.log(getUser(newUser));
