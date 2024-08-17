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

class Admin extends User{
    isAdmin:boolean;
    constructor(email:string,password: string,isAdmin:boolean){
        super(email,password)
        this.isAdmin = isAdmin

    }
}



const user1 =new User("sofi@gamail.com","salman")

const admin1 =new Admin("sofi@gamail.com","salman",true)

user1.setEmail="salman@gmail.com"
console.log(admin1.getEmail)
console.log(admin1)


//---------------------------------------------------------------
//interfaces


interface productype{
    name:string;
    price:number;
    description:string;
    stock:number;
}


class Product implements productype{
    name:string;
    price:number;
    description:string;
    stock:number;
    private id : string;

    constructor( name:string,
        price:number,
        description:string,
        stock:number,
    ){
            this.name = name;
            this.price=price;
            this.description=description;
            this.stock=stock;
            this.id=String(Math.random())

    }
}

const product  =  new Product("macbook",28888,"mac is good ",4)
console.log(product)