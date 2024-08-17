class User{
    private email:string;
    password:string;
    // protected readonly id: Math.random();
    constructor(email:string,password: string){
        this.email = email,
        this.password = password
        
    }
    
}
   



const user1 =new User("sofi@gamail.com","salman")

