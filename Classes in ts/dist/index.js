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
class Admin extends User {
    isAdmin;
    constructor(email, password, isAdmin) {
        super(email, password);
        this.isAdmin = isAdmin;
    }
}
const user1 = new User("sofi@gamail.com", "salman");
const admin1 = new Admin("sofi@gamail.com", "salman", true);
user1.setEmail = "salman@gmail.com";
console.log(admin1.getEmail);
console.log(admin1);
