import { useDispatch, useSelector } from "react-redux";
import { Todo } from "../vite-env"
import { deleteTodo, RootState, updateTodo } from "../redux/Store";

interface TodoItemProps {
  todo: Todo;
}
const TodoItem : React.FC<TodoItemProps>= ({todo}) => {
  console.log(todo.isCompleted)

  const dispatch = useDispatch()
  const data = useSelector((state:RootState)=>state.todo)
  
  const deleteHandler =(id:string)=>{
    console.log(id)
    dispatch(deleteTodo(todo.id))

   
  }

  const handleIsCompleated =(id:string)=>{
    const prevTodo = data.find((todo:Todo)=>todo.id === id)
    console.log("prevTodo",prevTodo)
    if(prevTodo){
      const updatedTodo: Todo = {
        ...prevTodo, // Spread the existing properties
        isCompleted: !prevTodo.isCompleted, // Toggle the isCompleted status
      };
      dispatch(updateTodo(updatedTodo))
    }


  }

  return (
    <div className='flex items-center py-1 gap-2   border-b-zinc-500'>
      <input className='rounded-full p-5 flex w-8 bg-green-400 py-10' checked ={todo.isCompleted} onChange={()=>{handleIsCompleated(todo.id,todo.title)}} type="checkbox" />
      <div className='w-[90%] py-1'>{todo.title} </div>
      <button onClick={()=>{deleteHandler(todo.id)}} className='px-4 py-1 bg-red-300 rounded-md'>delete</button>
    </div>
  )
}

export default TodoItem
