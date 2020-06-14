import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TaskList = props => {
  return (
    <ul>      
      { props.taskList.map(task => { 
        return (
          <li key={task.id} >
            <div className="taskcard">
              <input type="checkbox" onClick={() => props.toggleComplete(task.id)} key={task.id}/>
              <input 
                type="text" 
                style={{ textDecoration: task.completed ? 'line-through' : null, color: task.completed ? 'lightgray' : null}}
                value={task.task} id={task.id} onChange={(e) => props.updateTask(e.target.value, task.id)}
              />
              <span onClick={() => props.deleteTask(task.id)}>
                <FontAwesomeIcon className="faicons" icon="trash" />
              </span>            
            </div>
          </li>)})
        }
    </ul>
  )
}

export default TaskList;