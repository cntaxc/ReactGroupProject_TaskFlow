import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Form, Button, Alert } from 'react-bootstrap';

function AddTaskView({ addTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const [options] = useState(['Low', 'Medium', 'High']);
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    const handleAddTask = () => {
        if (title.trim() && description.trim() && priority) {
            addTask([title, description, priority]);
            setTitle('');
            setDescription('');
            setPriority('');
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
                navigate('/');
            }, 1200);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center mt-4">
            <Card
                className="p-4 shadow-lg border-0"
                style={{
                    width: '600px',
                    backgroundColor: '#1E1E1E',
                    color: '#fff',
                    borderTop: '2px solid #FFC107',
                }}
            >
                <h2
                    className="fw-bold text-center mb-2"
                    style={{
                        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                        color: '#FFC107'
                    }}
                >
                    Add New Task
                </h2>

                <p
                    className="fs-6 text-center mb-4"
                    style={{
                        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                        color: '#ccc'
                    }}
                >
                    Create and prioritize your tasks easily using this form.
                </p>

                {success && (
                    <Alert
                        variant="success"
                        className="text-center py-2 border-0"
                        style={{ backgroundColor: '#2B2B2B', color: '#A3E635' }}
                    >
                        ✅ Task successfully added!
                    </Alert>
                )}

                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold text-light">Task Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter task title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            style={{
                                backgroundColor: '#2B2B2B',
                                color: '#fff',
                                border: '1px solid #3a3a3a',
                            }}
                            className="text-light dark-input"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold text-light">Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter task description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            style={{
                                backgroundColor: '#2B2B2B',
                                color: '#fff',
                                border: '1px solid #3a3a3a',
                            }}
                            className="text-light dark-input"
                        />
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label className="fw-semibold text-light">Priority Level</Form.Label>
                        <Form.Select
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                            style={{
                                backgroundColor: '#2B2B2B',
                                color: '#fff',
                                border: '1px solid #3a3a3a',
                            }}
                            className="text-light"
                        >
                            <option value="">-- Select priority --</option>
                            {options.map((option, idx) => (
                                <option key={idx} value={option}>{option}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <div className="d-grid">
                        <Button
                            size="lg"
                            onClick={handleAddTask}
                            style={{
                                backgroundColor: '#FFC107',
                                border: 'none',
                                color: '#000',
                                fontWeight: '600',
                                transition: 'all 0.2s ease-in-out'
                            }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#e0a800'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#FFC107'}
                        >
                            Add Task
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
}

export default AddTaskView;
