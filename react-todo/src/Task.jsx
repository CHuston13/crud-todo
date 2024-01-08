// src/components/Task.jsx

import PropTypes from "prop-types";
import "./Task.jsx"; // Updated import path

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className="task">
      <span
        className={`task-text ${task.completed ? "completed" : ""}`}
        onClick={() => onToggle(task.id)}
      >
        {task.text}
      </span>
      <button className="delete-button" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Task;
