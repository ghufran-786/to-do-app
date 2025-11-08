import React from "react";
import TodoItem from "./Todoitems";

const Todolist = ({ tasks, deleteTask, editTask }) => {
  return (
    <div className="todo-list">
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          deleteTask={() => deleteTask(index)}
          editTask={(newText) => editTask(index, newText)}
        />
      ))}
    </div>
  );
};

export default Todolist;
