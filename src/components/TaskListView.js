import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

function TaskListView() {
    const { tasks, setTasks } = useContext(TaskContext);

    const markCompleted = (index) => {
        setTasks(prevTasks => {
            const updatedTasks = [...prevTasks];
            updatedTasks[index][2] = "Completed";
            return updatedTasks;
        });
    };

    return (
        <div className="p-4">
            <h2>Task List</h2>
            <ul className="list-unstyled">
                {tasks.map((task, index) => (
                    <li key={index} className="mb-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">{task[0]}</h5>
                                <p className="card-text">{task[1]}</p>
                                <p className="card-text">Priority: {task[2]}</p>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => markCompleted(index)}
                                    disabled={task[2] === "Completed"}
                                >
                                    Complete
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskListView;