// DE LAS LLAGAS, SHANDARA MAE

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddTaskView({ addTask }) {
  const [task, setTask] = useState({
    title: '',
    description: '',
    priority: 'low',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.title.trim() || !task.description.trim()) {
      alert('Please fill in all fields');
      return;
    }

    addTask({ ...task, id: Date.now() });

    navigate('/');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '0 1rem' }}>
      <h2>Add a New Task</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            required
            placeholder="Enter task title"
            style={{ width: '100%', padding: '8px', marginBottom: '1rem' }}
          />
        </label>

        <label>
          Description
          <textarea
            rows={3}
            name="description"
            value={task.description}
            onChange={handleChange}
            required
            placeholder="Enter task description"
            style={{ width: '100%', padding: '8px', marginBottom: '1rem' }}
          />
        </label>

        <label>
          Priority
          <select
            name="priority"
            value={task.priority}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginBottom: '1rem' }}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>

        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTaskView;

