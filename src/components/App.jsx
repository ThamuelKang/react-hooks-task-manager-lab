import React, { useEffect, useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { TaskProvider } from "../context/TaskContext";
import TaskForm from "./TaskForm";
import SearchBar from "./SearchBar";

function App() {
  const [tasks, setTasks] = useState([]);



  return (
    <TaskProvider>
      <div>
        <h1>Task Manager</h1>
        <TaskForm />
        <SearchBar />
      </div>
    </TaskProvider>

  );
}

export default App;
