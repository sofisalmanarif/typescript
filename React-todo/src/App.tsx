import { useEffect, useState } from "react"
 import TodoItem from "./components/TodoItem.tsx"
import { Todo } from "./vite-env"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, RootState } from "./redux/Store.ts"


function App() {
    const [todo, setTodo] = useState<string>("")
    
    const dispatch = useDispatch()

    const data = useSelector((state:RootState)=>state.todo)
    console.log("hay",data)
    

    const addTodoHandler =()=>{

      const newTodo:Todo={
        id:String(Date.now()),
        title:todo,
        isCompleted:false
      }
      
      dispatch(addTodo(newTodo))
      
    }
    useEffect(() => {
      
     
      
    }, [data])
    
  return (
    <>
    <div className="   container mx-auto max-w-3xl h-screen flex items-center flex-col " >
      <h1 className="text-center py-10 text-3xl ">Todo App</h1>

        <div className="flex gap-5 "> 
          <input value={todo} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setTodo(e.target.value)} type="text" placeholder="Enter Todo " className="px-5 py-2 outline-2 outline-zinc-200 rounded-md outline-none" />
        <button onClick={addTodoHandler} className="bg-blue-400 text-white px-5 py-2 rounded-md">Add</button> </div>
        <div className="my-10  w-[100%] px-10">
          {
            data.map((todo:Todo)=>(
              <TodoItem key={todo.id} todo={todo} />
            ))
          }
        </div>
    </div>
    </>
    
  )
}

export default App
