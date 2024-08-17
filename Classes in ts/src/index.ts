class User{
    private email:string;
    password:string;
    protected readonly id:string;
    constructor(email:string,password: string){
        this.email = email,
        this.password = password
        this.id = String(Math.random()) 
        
    }
    get getEmail(){
        return this.email;
    }

    set setEmail(email:string){
        this.email = email;
    }
}
   



const user1 =new User("sofi@gamail.com","salman")

user1.setEmail="salman@gmail.com"
console.log(user1.getEmail)
console.log(user1)