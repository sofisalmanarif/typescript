import { ReactNode } from "react";

type PropType ={
    name:string;
    age:number;
    children?:ReactNode
}

const Box = ({name,age,children}:PropType) => {
  return (
    <div>{name}
    <p>{age}</p>
    {
        children?children:<p>i have no children</p>
    }
    </div>
  )
}

export default Box