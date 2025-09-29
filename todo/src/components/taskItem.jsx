import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


function TodoItem({ task, deleteTask, completeTask }) {
  return (
    <li className={`list${task.completed ? ' check' : ''}`}>
      <div className="btns">
         <input className='complete' type="checkbox" onClick={() => completeTask(task.id)}/>
         <span style={task.completed ? { textDecoration: 'line-through' } : {}}>{task.text}</span>
        {/* {task.completed ? 'Undo' : 'Complete'} */}
      </div>
        <button className="deletebtn" onClick={() => deleteTask(task.id)}>
           <FontAwesomeIcon icon={faTrash} size="lg" className='trash' />
        </button>
    </li>
  );
}

export default TodoItem;
