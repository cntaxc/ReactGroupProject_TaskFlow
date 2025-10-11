import React from 'react';

function TaskListView({ tasks, markCompleted, deleteTask }) {
    return (
        <div>
            <h2 className="fw-bold mb-3">Task List</h2>
            <ul className="list-unstyled">
                {tasks.map((task, index) => (
                    <li key={index} className="mb-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">{task[0]}</h5>
                                <p className="card-text">{task[1]}</p>
                                <p className="card-text">
                                    Priority: <span className={task[2] === "Completed" ? "text-success" : "text-secondary"}>{task[2]}</span>
                                </p>
                                <button
                                    className="btn btn-primary me-2"
                                    onClick={() => markCompleted(index)}
                                    disabled={task[2] === "Completed"}
                                >
                                    Complete
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteTask(index)}
                                >
                                    Delete
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