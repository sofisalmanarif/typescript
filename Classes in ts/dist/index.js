"use strict";
class User {
    email;
    password;
    id;
    constructor(email, password) {
        this.email = email,
            this.password = password;
        this.id = String(Math.random());
    }
    get getEmail() {
        return this.email;
    }
    set setEmail(email) {
        this.email = email;
    }
}
const user1 = new User("sofi@gamail.com", "salman");
user1.setEmail = "salman@gmail.com";
console.log(user1.getEmail);
console.log(user1);
