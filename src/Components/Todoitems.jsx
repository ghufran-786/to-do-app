import React, { useState } from "react";

function TodoItem({ task, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSave = () => {
    editTask(newText);
    setIsEditing(false);
  };

  return (
    <div
      className="todo-item"
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "10px",
        marginBottom: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            style={{
              flex: 1,
              marginRight: "10px",
              padding: "5px",
              borderRadius: "5px",
            }}
          />
          <button onClick={handleSave}> Save</button>
        </>
      ) : (
        <>
        <input type="checkbox" checked={isCompleted} onChange={() => setIsCompleted(!isCompleted)}/>
          <span style={{textDecoration: isCompleted ? "line-through" : "none", color: isCompleted ? "gray" : "black",}}>{task.text}</span>
          <div>
            <button onClick={() => setIsEditing(true)}> Edit</button>
            <button onClick={deleteTask}> Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;
