import React, { useState } from 'react';
import './TaskList.css';

const Task = ({ task, onToggle, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdate(task.id, newText);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span
          style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          onClick={() => onToggle(task.id)}
        >
          {task.text}
        </span>
      )}
      {isEditing ? (
        <div className="Save">
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <button className="Controls" onClick={handleEdit}>
            Edit
          </button>
          <button
            className="Del"
            onClick={() => onDelete(task.id)}
            style={{ backgroundColor: 'rgba(241, 49, 49, 0.911)', color: 'white' }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Task;
