import { useDispatch, useSelector } from "react-redux";
import { Todo } from "../vite-env"
import { deleteTodo, RootState, updateTodo } from "../redux/Store";
import { useState } from "react";

interface TodoItemProps {
  todo: Todo;
}
const TodoItem : React.FC<TodoItemProps>= ({todo}) => {
  // console.log(todo.isCompleted)

  const dispatch = useDispatch()
  const data = useSelector((state:RootState)=>state.todo)

  const [isEditing, setIsEditing] = useState<Boolean>(false)
  const [editedTitle, setEditedTitle] = useState<string>()

  
  const deleteHandler =(id:string)=>{
    // console.log(id)
    dispatch(deleteTodo(todo.id))

   
  }

  const handleIsCompleated =(id:string)=>{
    const prevTodo = data.find((todo:Todo)=>todo.id === id)
    console.log("prevTodo",prevTodo)
    if(prevTodo){
      const updatedTodo: Todo = {
        ...prevTodo, 
        isCompleted: !prevTodo.isCompleted, 
      };
      dispatch(updateTodo(updatedTodo))
    }


  }
  const updateTitle =(id:string)=>{
    const prevTodo = data.find((todo:Todo)=>todo.id === id)
    // console.log("prevTodo",prevTodo)
    if(prevTodo){
      const updatedTodo: Todo = {
        ...prevTodo, 
        title: editedTitle, 
      };
      dispatch(updateTodo(updatedTodo))
      // setIsEditing()
      // setEditedTitle("")
    }


  }

  return (
    <div className='flex items-center py-1 gap-2   border-b-zinc-500'>
      <input className='rounded-full p-5 flex w-8 bg-green-400 py-10' checked ={todo.isCompleted} onChange={()=>{handleIsCompleated(todo.id)}} type="checkbox" />
      { isEditing?< input onChange={(e)=>setEditedTitle(e.target.value)} className='w-[90%] py-1' value={isEditing?editedTitle:todo.title} type="label"/>: <label className='w-[90%] py-1'>{todo.title}</label>}
      <div onClick={()=>{setIsEditing(prev=>!prev)}} className='px-4 py-1 bg-yellow-300 rounded-md'>{!isEditing?"Edit":<button onClick={()=>updateTitle(todo.id)}>Save</button>}</div>
      <button onClick={()=>{deleteHandler(todo.id)}} className='px-4 py-1 bg-red-300 rounded-md'>delete</button>
    </div>
  )
}

export default TodoItem
