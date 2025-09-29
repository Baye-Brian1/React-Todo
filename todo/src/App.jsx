import './App.css'
import React from 'react';
import { useState, useEffect } from "react";
import TodoList from "./components/taskList";
import TodoForm from "./components/taskForm";

function App() {
  
const [tasks, setTasks] = useState(() => {
    try {
      const stored = localStorage.getItem("tasks");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskText) => {
    if (taskText.trim() === "") return;
    const newTask = { id: Date.now(), text: taskText.trim(), completed: false };
    setTasks((prev) => [...prev, newTask]);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  
  const completeTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="app">
        <h1 className='header'>TODO APP</h1>
      <div className="task">
  <TodoForm addTask={addTask} />
  <TodoList tasks={tasks} deleteTask={deleteTask} completeTask={completeTask} />
        </div>
    </div>
  );
}

export default App;
