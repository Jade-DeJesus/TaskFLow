import React from 'react';

function TaskListView({ tasks, deleteTask }) {
  if (tasks.length === 0) {
    return <p style={{ marginTop: '1rem' }}>No tasks available. Add some tasks!</p>;
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'red';
      case 'medium': return 'orange';
      default: return 'gray';
    }
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <h2>Task List</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map(({ id, title, description, priority }) => (
          <li key={id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ddd', padding: '0.5rem 0' }}>
            <div>
              <h5 style={{ margin: 0 }}>
                {title} <span style={{ color: 'white', backgroundColor: getPriorityColor(priority), borderRadius: '4px', padding: '0.2rem 0.5rem', fontSize: '0.8rem' }}>
                  {priority}
                </span>
              </h5>
              <p style={{ margin: 0 }}>{description}</p>
            </div>
            <button
              style={{ backgroundColor: 'transparent', border: '1px solid red', color: 'red', padding: '0.3rem 0.7rem', borderRadius: '4px', cursor: 'pointer' }}
              onClick={() => deleteTask(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskListView;
