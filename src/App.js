import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TaskListView from './components/TaskListView';
import AddTaskView from './components/AddTaskView';
import Header from './components/Header';

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
      <div className="container">
        <h1>🦖 TaskFlow</h1>
        <p>Welcome to TaskFlow, your Task Management Application!</p>
        <p>This application is designed to help you manage your tasks efficiently,
          make you more productive, and keep track of your to-do list with ease.</p>

        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Uncompleted Tasks:</h5>
            <ul className="list-unstyled">
              <li className="mb-2">High: {priorityCount.High}</li>
              <li className="mb-2">Medium: {priorityCount.Medium}</li>
              <li className="mb-2">Low: {priorityCount.Low}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  function Footer() {
    return (
      <footer className="footer bg-dark text-light py-3 mt-auto">
        <div className="container text-center">
          <p className="mb-0">© 2025 TaskFlow | Created with React and Bootstrap</p>
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
            <Route path="/addtask" element={
              <AddTaskView addTask={addTask} />
            } />
            <Route path="/tasklist" element={
              <TaskListView tasks={tasks} setTasks={setTasks} deleteTask={deleteTask} />
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
