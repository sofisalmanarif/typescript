type PropType ={
    name:string;
    age:number;
}

const Box = ({name,age}:PropType) => {
  return (
    <div>{name}
    <p>{age}</p>
    </div>
  )
}

export default Box