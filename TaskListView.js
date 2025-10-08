// src/TaskListView.js
import React from "react";

export default function TaskListView({ tasks, onDelete, onToggle }) {
  return (
    <div className="container mt-4">
      <h2 className="mb-3">Task List</h2>
      {tasks.length === 0 ? (
        <p className="text-muted">No tasks yet. Click "Add Task" to create one.</p>
      ) : (
        <ul className="list-group">
          {tasks.map((task) => (
            <li 
              key={task.id} 
              className={`list-group-item d-flex justify-content-between align-items-center ${
                task.completed ? "list-group-item-success" : ""
              }`}
            >
              <div>
                <h5 style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                  {task.title}
                </h5>
                <p className="mb-0 text-muted">{task.description}</p>
              </div>
              <div>
                <button 
                  className="btn btn-sm btn-success me-2" 
                  onClick={() => onToggle(task.id)}
                >
                  {task.completed ? "Undo" : "Done"}
                </button>
                <button 
                  className="btn btn-sm btn-danger"
                  onClick={() => onDelete(task.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
