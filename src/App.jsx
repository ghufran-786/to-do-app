import React, { useState, useEffect } from "react";
import Todolist from "./Components/Todolist";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    // ✅ Load from localStorage when component first renders
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });


  const [input, setInput] = useState("");

  // ✅ Save to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    const trimmedInput = input.trim();

    if (trimmedInput === "") {
      return alert("Please enter a task");
    }

    // ✅ Prevent duplicate tasks
    if (tasks.some((task) => task.text.toLowerCase() === trimmedInput.toLowerCase())) {
      return alert("This task already exists!");
    }

    setTasks([...tasks, { text: trimmedInput }]);
    setInput("");
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const editTask = (index, newText) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = newText;
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1>To Do App</h1>
      <div className="input-section">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <Todolist tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
};

export default App;
