import React, { useState } from 'react';

function AddTaskView({ addTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const [options, setOptions] = useState(['Low', 'Medium', 'High']);
    const [newOptionText, setNewOptionText] = useState('');

    const handleAddTask = () => {
        if (title.trim() && description.trim() && priority) {
            addTask([title, description, priority]);
            setTitle('');
            setDescription('');
            setPriority('');
        }
    };

    return (
        <div className="p-4">
            <h2 className="fw-bold" style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
                Add Task
            </h2>
            <p className="fs-5 lh-base" style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
                Here you can add a new task to your TaskFlow application.
            </p>

            <div className="mb-3">
                <label className="form-label fw-semibold">Task Title</label>
                <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter task title"
                />
            </div>

            <div className="mb-3">
                <label className="form-label fw-semibold">Description</label>
                <input
                    type="text"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter task description"
                />
            </div>

            <div className="mb-3">
                <label className="form-label fw-semibold">Priority Level</label>
                <select
                    className="form-select"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option value="">-- Select priority --</option>
                    {options.map((option, idx) => (
                        <option key={idx} value={option}>{option}</option>
                    ))}
                </select>
            </div>

            <button className="btn btn-primary" onClick={handleAddTask}>
                Add Task
            </button>
        </div>
    );
}

export default AddTaskView;