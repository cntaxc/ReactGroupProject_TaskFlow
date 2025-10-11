import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AddTaskView from './components/AddTaskView';
import Header from './components/Header';
import TaskListView from './components/TaskListView';

function App() {
  // Global task state
  const [tasks, setTasks] = useState([
    ["setup", "Set up the development environment", "High"],
    ["components", "Finish the project components", "High"]
  ]);

  // Add a new task
  const addTask = (taskDetails) => {
    setTasks(prev => [...prev, taskDetails]);
  };

  // Delete a task by index
  const deleteTask = (taskId) => {
    setTasks(prev => prev.filter((_, idx) => idx !== taskId));
  };

  // Mark a task as completed
  const markCompleted = (index) => {
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index][2] = "Completed";
      return updatedTasks;
    });
  };

  useEffect(() => {
    document.title = "TaskFlow";
  }, []);

  // Home component using props
  function Home() {
    // Filter uncompleted tasks
    const uncompletedTasks = tasks.filter(task => task[2] !== "Completed");

    // Count priorities
    const priorityCount = { High: 0, Medium: 0, Low: 0 };
    uncompletedTasks.forEach(task => {
      if (priorityCount[task[2]] !== undefined) {
        priorityCount[task[2]] += 1;
      }
    });

    return (
      <div className="container p-4">
        <h1>🦖 TaskFlow</h1>
        <p>Welcome to TaskFlow, your Task Management Application!</p>
        <div className="card mb-4" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Uncompleted Tasks: {uncompletedTasks.length}</h5>
            <ul className="list-unstyled">
              <li className="mb-2">High: {priorityCount.High}</li>
              <li className="mb-2">Medium: {priorityCount.Medium}</li>
              <li className="mb-2">Low: {priorityCount.Low}</li>
            </ul>
          </div>
        </div>
        <TaskListView
          tasks={tasks}
          markCompleted={markCompleted}
          deleteTask={deleteTask}
        />
      </div>
    );
  }

  function Footer() {
  return (
    <footer 
      className="footer text-light py-4 mt-auto shadow-lg"
      style={{
        backgroundColor: '#121212',
        borderTop: '2px solid #FFC107',
      }}
    >
      <div className="container text-center">
        <p 
          className="mb-0 fw-semibold"
          style={{
            color: '#FFC107',
            letterSpacing: '0.5px',
          }}
        >
          © 2025 TaskFlow | Created with React and Bootstrap
        </p>
      </div>
    </footer>
  );
}

  return (
    <Router>
      <Header />
      <div className="App d-flex flex-column min-vh-100 h-100">
        <main className="main-content flex-grow-1 h-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={
              <AddTaskView addTask={addTask} />
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
