import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([
        ["setup", "Set up the development environment", "High"],
        ["components", "Finish the project components", "High"]
    ]);

    return (
        <TaskContext.Provider value={{ tasks, setTasks }}>
            {children}
        </TaskContext.Provider>
    );
}