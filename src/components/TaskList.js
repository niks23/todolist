import React from 'react'

const TaskList = props => {
  return (
    <ul>
      {/* {console.log("dd",props.tasklist)} */}
      { props.tasklist.map(task => <li key={task.id}>{task.task}</li>) }
    </ul>
  )
}

export default TaskList;