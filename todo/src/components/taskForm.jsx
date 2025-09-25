import React from "react";
import { useState } from "react";

function TodoForm () {
  const [tasks, setTasks]= useState("");
  function handleSubmit(e) {
    e.preventDefault();
  }
  
return(
    <form className="task" onSubmit={handleSubmit}>
       <h4>To-Do List</h4>
      <div className="taskin">
       <input 
        type="text"
        placeholder="Enter task" 
        value={tasks}
        onChange={(e)=>setTasks(e.value.target)}
      />
       <button className="btn">Add Task</button>
      </div>
    </form>
    );
}
export default TodoForm;












// import React, { useState } from "react";

// function TaskForm() {
// //   const [tasks, setTasks]= useState([""]);
// //   const [NewTask, setNewTask] = useState("");

// //   function Change(event) {
// //     setNewTask(event.target.value)
// //   }
// //   function AddTask() {
// //     if (NewTask.trim() !=="")
// //     setTasks(t => [...t, NewTask])
// //     setNewTask("");
// //   }
// //   function DeleteTask(idx){
// //      tasks.splice(idx, 1);
// //   }
//   return(
//     <div className="task">
//        <h4>To-Do List</h4>
//       <div className="taskin">
//      <input 
//       type="text"
//       placeholder="Enter task" 
//       value={NewTask}
//       onChange={Change}
//       />
//       <button className="btn" onClick={AddTask}>Add Task</button>
//       </div>
//       {/* <ul>
//         {tasks.map((task, index)=>
//         <li key={index}>
//           <span className="text">{task}</span>
//            <button className="del" onClick={DeleteTask}>Delete</button>
//         </li>
//         )}
//       </ul> */}
//     </div>
//   );
// }

// export default TaskForm;