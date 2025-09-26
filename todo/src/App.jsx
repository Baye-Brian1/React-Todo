import './App.css'
import React from 'react';
import { useState } from "react";
import TodoList from "./components/taskList";
import TodoForm from "./components/taskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  // Add a new task (safe functional update)
  const addTask = (taskText) => {
    if (taskText.trim() === "") return;
    const newTask = { id: Date.now(), text: taskText.trim() };
    setTasks((prev) => [...prev, newTask]);
  };

  // Delete a task (safe functional update)
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
        <h1 className='header'><span className='orange'>To-Do</span> APP</h1>
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
