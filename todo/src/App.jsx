import './App.css'
import React from 'react';
import TaskForm from './components/taskForm';


function App() {
  return(
    <div>
      <h1 className='header'><span className='orange'>To-Do</span> APP</h1>
      <TaskForm/>
    </div>
  );
}

export default App;
