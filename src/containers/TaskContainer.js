import React, { Component } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const LOCAL_STORAGE_KEY = "current-tasklist";

class TaskContainer extends Component {       

    state = {
        task: []
    }

    componentDidMount() {
        const storageTask = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    }

    componentDidUpdate() {        
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.state.tasks))
        
    }

    addTaskHandler = todo => {            
        this.state.task.push(todo);        
        this.setState({task: this.state.task})
        
        // console.log(this.state.task);
    }

    toggleCompleteHandler = id => {                        
        const taskId = this.state.task.findIndex(element => element.id == id );
        const newTaskList = [...this.state.task];
        newTaskList[taskId] = {...newTaskList[taskId], completed: !newTaskList[taskId].completed}
        console.log(newTaskList[taskId].completed);
        this.setState({
            task: newTaskList
        })
    }

    deleteTaskHandler = id => {
        const task = [...this.state.task];
        task.splice(id, 1);
        this.setState({ task: task})
    }

    render(){
        return (
                <div>
                    <TaskForm addtask={this.addTaskHandler}/>
                    <TaskList 
                        taskList={this.state.task}
                        toggleComplete={this.toggleCompleteHandler} 
                        deleteTask={this.deleteTaskHandler}
                    />                    
                </div>
        );
    }
}

export default TaskContainer;