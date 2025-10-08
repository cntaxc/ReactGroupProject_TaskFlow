import React from 'react';

// Task Title, Descripition, Priority
let tasks = [
    ["setup", "Set up the development environment", "High"],
    ["components", "Finish the project components", "High"]
];

function TaskListView() {
    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <strong>{task[0]}</strong>: {task[1]} (Priority: {task[2]})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskListView;