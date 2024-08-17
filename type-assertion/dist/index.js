"use strict";
const btn = document.getElementById("btn"); //here we say ts that its a htmlem=lement not null
btn.addEventListener("click", () => console.log("clicked"));
const img = document.getElementById("img");
img.src = "https://picsum.photos/200/300";
const form = document.querySelector("form");
form.onsubmit = (e) => {
    e.preventDefault();
    const input = document.querySelector("form > input");
    console.log("first", input.value);
    const h2 = document.createElement("h2");
    h2.innerText = input.value;
    const body = document.querySelector("body");
    body.appendChild(h2);
};
let newPerson = {
    name: "john",
    age: 30
};
let key = "age";
console.log(newPerson[key]);
const fun = (key) => {
    return newPerson[key];
};
console.log(fun("name"));
