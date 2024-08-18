import './style.css'
interface Todo{
  id: string;
  title:string;
  isCompleated: boolean
}
let todos:Todo[] =[]

const input =  document.querySelector(".todo-input")as HTMLInputElement
const button = document.getElementById("btn") as HTMLButtonElement
const container = document.querySelector(".container") as HTMLDivElement;
button.onclick= ()=>{
  console.log("button clicked")
  // console.log(input.value)
  const newTodo:Todo = {
    id:Math.random().toString(36),
    title:input.value,
    isCompleated:false
  }
  todos.push(newTodo)
  displayTodos(todos)
}

const displayTodos =(todos:todos[])=>{
  container.innerHTML=""
  todos.forEach(item=>generate(item.id,item.title,item.isCompleated))
}


const generate = (id:string,title:string,isCompleated:boolean)=>{
  // const container = document.querySelector(".container") as HTMLDivElement;
  const div =document.createElement("div") as HTMLDivElement;
  div.className="todo-div"
  const dltbtn =  document.createElement("button") as HTMLButtonElement
  const para = document.createElement("p") as HTMLParagraphElement
  para
  const checkbox = document.createElement("input") as HTMLInputElement
  checkbox.type = "checkbox"
  checkbox.checked = isCompleated
  para.innerText = title
  dltbtn.innerText = "Delete"
  // console.log(id)
  dltbtn.onclick = ()=>{
    deletehandler(id)
  }
  div.append(checkbox,para,dltbtn)
  container.append(div)


}

const deletehandler =(id:string):void=>{
    console.log("first",id)
     const idx = todos.findIndex((todo)=>todo.id === id)
    todos.splice(idx,1)
    console.log(idx)
    displayTodos(todos)
}