import React, { useState, useContext } from "react";
import TaskList from "./TaskList";
import { TaskContext } from "../context/TaskContext";

function SearchBar() {
  const [query, setQuery] = useState("");
  const { tasks } = useContext(TaskContext);

  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(query.toLowerCase()));


  return (
    <div>
      <input
        type="text"
        placeholder="Search tasks..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}

export default SearchBar;
