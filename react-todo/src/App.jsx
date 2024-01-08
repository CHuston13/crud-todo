// src/App.jsx
import { useState } from "react";
import Task from "./Task";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Remind people when things are low", completed: false },
    { id: 2, text: "Pickup TP rolls", completed: false },
  ]);

  const addTask = (text) => {
    setTasks([...tasks, { id: tasks.length + 1, text, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h1>To Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask(e.target.value);
              e.target.value = "";
            }
          }}
        />
      </div>
      <div>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={deleteTask} onToggle={toggleTask} />
        ))}
      </div>
    </div>
  );
};

export default App;
