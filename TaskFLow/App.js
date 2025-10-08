// src/App.js
import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Header";
import TaskListView from "./TaskListView";
import AddTaskView from "./AddTaskView";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const id = Date.now();
    setTasks(prev => [{ ...task, id, completed: false }, ...prev]);
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const toggleCompleted = (id) => {
    setTasks(prev => prev.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const navigate = useNavigate();

  return (
    <div>
      <Header onAddClick={() => navigate("/add")} />

      <main className="container my-4">
        <Routes>
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
          <Route path="*" element={<TaskListView tasks={tasks} onDelete={deleteTask} onToggle={toggleCompleted} />} />
        </Routes>
      </main>
    </div>
  );
}
