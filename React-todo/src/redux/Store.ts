import { configureStore,PayloadAction } from '@reduxjs/toolkit'
import { Todo } from "../vite-env"



import { createSlice } from '@reduxjs/toolkit'

const initialState:Todo[] =[]

export const TodoSlice = createSlice({
  name:"todo",
  initialState,
  reducers: {
    addTodo(state,action : PayloadAction<Todo>){
      state.push(action.payload)
    },
    deleteTodo:(state,action:PayloadAction<string>) :Todo[]=>{
      return state.filter((todo:Todo)=>todo.id !== action.payload)
    }
  }
})


export const {addTodo ,deleteTodo}= TodoSlice.actions
export default TodoSlice.reducer



export const store = configureStore({
  reducer: {
    todo:TodoSlice.reducer
   
  },
})
export type RootState = ReturnType<typeof store.getState>;