import React from "react";
import TodoItem from "./taskItem";

function TodoList({ tasks, deleteTask, completeTask }) {
  return (
    <ul className="todolist">
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} deleteTask={deleteTask} completeTask={completeTask} />
      ))}
    </ul>
  );
}

export default TodoList;
