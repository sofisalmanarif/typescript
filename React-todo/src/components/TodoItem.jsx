import React from 'react'

const TodoItem = () => {
  return (
    <div className='flex items-center py-1 gap-2   border-b-zinc-500'>
      <input className='rounded-full p-5 flex w-8 bg-green-400 py-10'  type="checkbox" />
      <div className='w-[90%] py-1'>hayyy laus shdhjfhsdh dsbhsdjfg jshdhgadg </div>
      <button className='px-4 py-1 bg-red-300 rounded-md'>delete</button>
    </div>
  )
}

export default TodoItem
