import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");
    
    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value);

        setValue("");
        
    }
    
  return (
    <form className='TodoForm' onSubmit={ handleSubmit }>
        <input type="text" value={value} className='todo-input' placeholder='What is the task today?' onChange={(e) => setValue( e.target.value )}/>
        <button className="todo-btn" type='submit'>Add Task</button>
    </form>
  )
}
