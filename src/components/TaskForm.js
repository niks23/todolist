import React, { useState } from "react"
import uuid from "react-uuid";

const TaskForm = props => {

    const [todo, setTodo] = useState({
      id: "",
      task: "",
      completed: false
    })

    const inputChangeHandler = (e) => {
      setTodo({...todo, task: e.target.value})
      console.log(e.target.value);
    }

    const inputSubmitHandler = (e) => {
      e.preventDefault();
      if(todo.task) {
        props.addtask({...todo, id: uuid()})
        setTodo({...todo, task: ""})
      } 
    }

    return (
        <form onSubmit={inputSubmitHandler}> 
            <input 
              name="task"
              type="text" 
              value={todo.task}
              onChange={inputChangeHandler} 
            />
            <button>Add Task</button>
        </form>
    )
}

export default TaskForm;