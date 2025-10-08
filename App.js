// src/App.js
import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Header";
import TaskListView from "./TaskListView";
import AddTaskView from "./AddTaskView";

export default function App() {
  // Global task list state
  const [tasks, setTasks] = useState([]);

  // Add a new task
  const addTask = (task) => {
    const id = Date.now();
    setTasks(prev => [{ ...task, id, completed: false }, ...prev]);
  };

  // Delete task by id
  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  // Toggle task completion status
  const toggleCompleted = (id) => {
    setTasks(prev => prev.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  // Navigation helper
  const navigate = useNavigate();

  return (
    <div>
      {/* Header with Add Task button */}
      <Header onAddClick={() => navigate("/add")} />

      <main className="container my-4">
        <Routes>
          {/* Task list view */}
          <Route 
            path="/" 
            element={
              <TaskListView 
                tasks={tasks} 
                onDelete={deleteTask} 
                onToggle={toggleCompleted} 
              />
            } 
          />

          {/* Add task form */}
          <Route 
            path="/add" 
            element={
              <AddTaskView 
                onAdd={(task) => { 
                  addTask(task); 
                  navigate("/"); 
                }} 
              />
            } 
          />

          {/* Catch all route: redirect to task list */}
          <Route 
            path="*" 
            element={
              <TaskListView 
                tasks={tasks} 
                onDelete={deleteTask} 
                onToggle={toggleCompleted} 
              />
            } 
          />
        </Routes>
      </main>
    </div>
  );
}
