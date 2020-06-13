import React from 'react'

const TaskList = props => {
  return (
    <ul>      
      { props.taskList.map(task => { 
        return (
          <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : null}}>
            <input type="checkbox" onClick={() => props.toggleComplete(task.id)}/>
            <span>{task.task}</span>
            <button onClick={() => props.deleteTask(task.id)}>x</button>            
          </li>)})
        }
    </ul>
  )
}

export default TaskList;