import React, { Component } from 'react';
import TaskForm from '../components/Tasklist/TaskForm';
import TaskList from '../components/Tasklist/TaskList';
import { library } from "@fortawesome/fontawesome-svg-core";
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

const LOCAL_STORAGE_KEY = "current-tasklist";

class TaskContainer extends Component {             
    state = {
        task: []
    }

    componentDidMount() {
        const userData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));                      
        if(userData !== null) {             
            this.setState({task: userData})            
        } 
    }
    
    componentDidUpdate() {
        console.log("[component update]");
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.state.task));        
    }

    addTaskHandler = todo => {            
        this.state.task.push(todo);        
        this.setState({task: this.state.task})                    
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

    updateTaskHandler = (taskName, id) => {
        const items = this.state.task;

        items.map(item => {
            if(item.id === id) {
                item.task = taskName
            }
        })

        this.setState({ task: items })
    } 

    render(){
        return (
                <div>
                    <TaskForm addtask={this.addTaskHandler}/>
                    <TaskList 
                        taskList={this.state.task}
                        toggleComplete={this.toggleCompleteHandler} 
                        deleteTask={this.deleteTaskHandler}
                        updateTask={this.updateTaskHandler}
                    />                    
                </div>
        );
    }
}

export default TaskContainer;