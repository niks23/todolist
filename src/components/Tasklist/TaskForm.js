import React, { useState } from "react"
import uuid from "react-uuid";
import Button from "../UI/Button";
import Input from "../UI/Input";

const TaskForm = props => {
    const [todo, setTodo] = useState({
      id: "",
      task: "",
      completed: false
    })

    const inputChangeHandler = (e) => {
      setTodo({...todo, task: e.target.value})      
    }

    const inputSubmitHandler = (e) => {
      e.preventDefault();
      if(todo.task) {
        props.addtask({...todo, id: uuid()})
        setTodo({...todo, task: ""})
      } 
    }

    return (
        <form onSubmit={inputSubmitHandler} className="newtask">             
            <Input 
              name="task" 
              type="text"
              value={todo.task}
              placeholder='Type here...'
              changed={inputChangeHandler}/> 
            <Button>Add Tasks</Button>            
        </form>
    )
}

export default TaskForm;