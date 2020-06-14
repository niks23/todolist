import React, { useState } from "react";
import TaskList from "../Tasklist/TaskList";

const SearchList = (props) => {
  var items = props.tasklist;

  const searchString = props.searchString.trim().toLowerCase();

  if (searchString.length > 0) {
    items = items.filter((items) => {
      return items.task.toLowerCase().match(searchString);
    });
  }

  return (
    <TaskList
      taskList={items}
      updateTask={props.updateTask}
      deleteTask={props.deleteTask}
      toggleComplete={props.toggleTask}
    />
  );
};

export default SearchList;
