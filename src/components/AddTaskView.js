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
            <Card className="p-4 shadow-lg" style={{ width: '600px' }}>
                <h2 className="fw-bold text-center mb-2" style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
                    Add New Task
                </h2>
                <p className="fs-6 text-center text-muted mb-4" style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
                    Create and prioritize your tasks easily using this form.
                </p>

                {success && (
                    <Alert variant="success" className="text-center py-2">
                        ✅ Task successfully added!
                    </Alert>
                )}

                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold">Task Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter task title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold">Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter task description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label className="fw-semibold">Priority Level</Form.Label>
                        <Form.Select
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                        >
                            <option value="">-- Select priority --</option>
                            {options.map((option, idx) => (
                                <option key={idx} value={option}>{option}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <div className="d-grid">
                        <Button variant="primary" size="lg" onClick={handleAddTask}>
                            Add Task
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
}

export default AddTaskView;