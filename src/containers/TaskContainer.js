import React, { Component } from 'react';
import TaskForm from '../components/Tasklist/TaskForm';
import TaskList from '../components/Tasklist/TaskList';
import { library } from "@fortawesome/fontawesome-svg-core";
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class TaskContainer extends Component {                      
    render(){        
      return (
        <div>{console.log("dndnd",this.props.taskList) }
            <TaskForm addtask={this.props.addTaskHandler}/>
            <TaskList 
                taskList={this.props.tasklist}
                toggleComplete={this.props.toggleCompleteHandler} 
                deleteTask={this.props.deleteTaskHandler}
                updateTask={this.props.updateTaskHandler}
            />                    
        </div>
      );
    }
}

export default TaskContainer;