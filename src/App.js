import React, { Component } from "react";
import TaskContainer from "./containers/TaskContainer";
import { Link, Route, Switch } from "react-router-dom";
import SearchContainer from "./containers/SearchContainer";
import classes from "./css/style.scss";

const LOCAL_STORAGE_KEY = "current-tasklist";

class App extends Component {
  state = {
    task: [],
    searchTerm: "",
  };

  componentDidMount() {
    const userData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (userData !== null) {
      this.setState({ task: userData });
    }
  }

  componentDidUpdate() {
    console.log("[component update]");
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.state.task));
  }

  addTaskHandler = (todo) => {
    this.state.task.push(todo);
    this.setState({ task: this.state.task });
  };

  toggleCompleteHandler = (id) => {
    const taskId = this.state.task.findIndex((element) => element.id == id);
    const newTaskList = [...this.state.task];
    newTaskList[taskId] = {
      ...newTaskList[taskId],
      completed: !newTaskList[taskId].completed,
    };
    console.log(newTaskList[taskId].completed);
    this.setState({
      task: newTaskList,
    });
  };

  deleteTaskHandler = (id) => {
    const newTask = this.state.task.filter((task) => task.id !== id);
    this.setState({ task: newTask });
  };

  updateTaskHandler = (taskName, id) => {
    const items = this.state.task;

    items.map((item) => {
      if (item.id === id) {
        item.task = taskName;
      }
    });

    this.setState({ task: items });
  };

  render() {
    return (
      <div className="main-container">
        <div className="wrapper">
          <h1>Task Manager</h1>
          <div className="taskbar">
            <Link to="/addtask">Add task</Link>
            <Link to="/searchtask">Search Task</Link>
          </div>
          <div className="task-manager">
            <Route
              path="/addtask"
              render={(props) => (
                <TaskContainer
                  tasklist={this.state.task}
                  addTaskHandler={this.addTaskHandler}
                  toggleCompleteHandler={this.toggleCompleteHandler}
                  deleteTaskHandler={this.deleteTaskHandler}
                  updateTaskHandler={this.updateTaskHandler}
                />
              )}
            />

            <Route
              path="/searchtask"
              render={(props) => (
                <SearchContainer
                  tasklist={this.state.task}
                  addTaskHandler={this.addTaskHandler}
                  toggleCompleteHandler={this.toggleCompleteHandler}
                  deleteTaskHandler={this.deleteTaskHandler}
                  updateTaskHandler={this.updateTaskHandler}
                />
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;