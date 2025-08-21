import React, { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch("http://localhost:6001/tasks")
            .then(response => response.json())
            .then(data => setTasks(data))
    }, [])

    function toggleComplete(id) {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
        const taskToUpdate = tasks.find(task => task.id === id);
        if (!taskToUpdate) return;

        fetch(`http://localhost:6001/tasks/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ completed: !taskToUpdate.completed })
        });
    }

    function addTask(title) {
        const newTask = {
            id: Date.now().toString(),
            title,
            completed: false
        }

        setTasks(previousTasks => [...previousTasks, newTask])
    }


    return (
        <TaskContext.Provider value={{ tasks, toggleComplete, addTask }}>
            {children}
        </TaskContext.Provider>
    )

}
