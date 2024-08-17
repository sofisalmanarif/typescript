"use strict";
class User {
    email;
    password;
    // protected readonly id: Math.random();
    constructor(email, password) {
        this.email = email,
            this.password = password;
    }
}
const user1 = new User("sofi@gamail.com", "salman");
