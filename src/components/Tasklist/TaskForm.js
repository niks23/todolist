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
            <Input 
              name="task" 
              type="text"
              values={todo.task}
              changed={inputChangeHandler}/> 
            <Button>Add Tasks</Button>            
        </form>
    )
}

export default TaskForm;