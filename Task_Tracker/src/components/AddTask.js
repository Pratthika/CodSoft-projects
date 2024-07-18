import React, { useState } from 'react';
import './TaskList.css';

const AddTask = ({ onAdd }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;
    onAdd(task);
    setTask('');
  };

  return (
    <div className="AddTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
