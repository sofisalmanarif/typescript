import React, { useState } from 'react'
import './App.css'
// import Box from './components/Box'


// const Semobox =()=>{
//   return(
//   <div>
//     <h1>hello i am a semi box</h1>
//   </div>)
// }
function App() {
  type User ={
    userName:string,
    password:string
  }
const [user, setUser] = useState<User>()

const submitHandler =(e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault()
console.log(user)
}

  return (
    <>
    <div>
      <form onSubmit={ submitHandler} >
        <input placeholder='name' type="text"  value={user?.userName || ""}  onChange={(e)=>(setUser((prev)=>( {...prev!,userName:e.target.value})) )}/>
        <input  placeholder='password'  type="text"  value={user?.password || ""} onChange={(e)=>{ setUser( (prev)=>( {...prev!, password:e.target.value} ) )}} />
        <button type='submit'> submit</button>
      </form>
      {/* <Box name='salman' age={23} >
        <Semobox/>
        </Box> */}
    </div>
    </>
  )
}

export default App



