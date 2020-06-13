import React, { Component } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

class TaskContainer extends Component {       

    state = {
        task: []
    }

    addTaskHandler = todo => {            
        this.state.task.push(todo);        
        this.setState({task: this.state.task})
        
        // console.log(this.state.task);
    }

    render(){
        return (
                <div>
                    <TaskForm addtask={this.addTaskHandler}/>
                    <TaskList tasklist={this.state.task}/>                    
                </div>
        );
    }
}

export default TaskContainer;