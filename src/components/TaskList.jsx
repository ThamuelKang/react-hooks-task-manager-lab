import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList({ tasks }) {
  const { toggleComplete } = useContext(TaskContext);

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.title}
          </span>
          <button key = {task.id} id={task.id} onClick={() => toggleComplete(task.id)}>
            {task.completed ? "Undone" : "Complete"}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
