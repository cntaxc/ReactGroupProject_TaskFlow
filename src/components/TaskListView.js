import React from 'react';

// Task Title, Description, Priority
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
                        <strong>{task[0]}</strong><br />
                        {task[1]}<br />
                        Priority: {task[2]}
                        <br /><br />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskListView;