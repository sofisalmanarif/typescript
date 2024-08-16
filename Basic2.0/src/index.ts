type User= {
    userName:string,
    age:number,
    course:string
    gender?:string  //gender is optional

}


// interface is same as type but it can be inherited
interface Users {
    userName:string,
    age:number,
    course:string
    gender?:string  //gender is optional

}

interface latestUser extends User{
    email:string
}

const user1 : latestUser={
    userName:"salman",
    age:21,
    course:"BCA",
    email:"salman@gmail.com"
}