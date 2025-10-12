import React from 'react';

function TaskListView({ tasks, markCompleted, deleteTask }) {
    return (
        <div className="mt-4 w-100">
            <div className="d-flex flex-wrap justify-content-center gap-4">
                {tasks.map((task, index) => (
                    <div
                        key={index}
                        className="card shadow-lg border-0 p-3 d-flex flex-column justify-content-between"
                        style={{
                            width: '18rem',
                            minHeight: '220px',
                            backgroundColor: '#1E1E1E',
                            color: '#ffffff',
                            borderRadius: '15px',
                            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
                        }}
                    >
                        <div className="card-body d-flex flex-column justify-content-between h-100">
                            <div>
                                <h5 className="card-title fw-semibold text-capitalize mb-2">{task[0]}</h5>
                                <p className="card-text mb-2">{task[1]}</p>
                                <p className="card-text mb-3">
                                    Priority:{" "}
                                    <span
                                        className={
                                            task[2] === "Completed"
                                                ? "text-success"
                                                : task[2] === "High"
                                                    ? "text-danger"
                                                    : task[2] === "Medium"
                                                        ? "text-warning"
                                                        : "text-info"
                                        }
                                    >
                                        {task[2]}
                                    </span>
                                </p>
                            </div>

                            {

                            }
                            <div className="mt-auto d-flex gap-2">
                                {/* Complete / Done Button */}
                                <button
                                    className="btn btn-sm fw-semibold flex-fill"
                                    style={{
                                        backgroundColor: task[2] === 'Completed' ? '#4CAF50' : '#FFD54F',
                                        color: task[2] === 'Completed' ? '#fff' : '#000',
                                        border: 'none',
                                        transition: '0.2s ease',
                                        opacity: task[2] === 'Completed' ? 0.8 : 1,
                                        cursor: task[2] === 'Completed' ? 'not-allowed' : 'pointer'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (task[2] !== 'Completed')
                                            e.currentTarget.style.backgroundColor = '#FFEE58';
                                    }}
                                    onMouseLeave={(e) => {
                                        if (task[2] !== 'Completed')
                                            e.currentTarget.style.backgroundColor = '#FFD54F';
                                    }}
                                    onClick={() => markCompleted(index)}
                                    disabled={task[2] === "Completed"}
                                >
                                    {task[2] === "Completed" ? "Done" : "Complete"}
                                </button>

                                {/* Delete Button */}
                                <button
                                    className="btn btn-sm fw-semibold flex-fill"
                                    style={{
                                        backgroundColor: '#FFD54F',
                                        color: '#000',
                                        border: 'none',
                                        transition: '0.2s ease',
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FF5252'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFD54F'}
                                    onClick={() => deleteTask(index)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TaskListView;
