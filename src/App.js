import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AddTaskView from './components/AddTaskView';
import Header from './components/Header';
import TaskListView from './components/TaskListView';

function App() {
  const [tasks, setTasks] = useState([
    ["Setup", "Set up the development environment", "High"],
    ["Components", "Finish the project components", "High"]
  ]);

  const addTask = (taskDetails) => {
    setTasks(prev => [...prev, taskDetails]);
  };

  const deleteTask = (taskId) => {
    setTasks(prev => prev.filter((_, idx) => idx !== taskId));
  };

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

  function Home() {
    const uncompletedTasks = tasks.filter(task => task[2] !== "Completed");

    const priorityCount = { High: 0, Medium: 0, Low: 0 };
    uncompletedTasks.forEach(task => {
      if (priorityCount[task[2]] !== undefined) {
        priorityCount[task[2]] += 1;
      }
    });

    return (
      <div
        className="container-fluid py-5"
        style={{
          minHeight: '90vh',
          backgroundColor: '#121212',
          color: '#fff'
        }}
      >
        <div className="container">
          {

          }
          <div
            className="card text-center mx-auto mb-5 shadow-lg"
            style={{
              backgroundColor: '#1e1e1e',
              border: 'none',
              borderRadius: '15px',
              maxWidth: '1200px',
              color: '#fff'
            }}
          >
            <div className="card-body">
              <h1
                className="fw-bold mb-3"
                style={{ color: '#FFC107', letterSpacing: '1px' }}
              >
                TASKFLOW
              </h1>
              <p className="lead text-secondary mb-4">
                Welcome to TaskFlow your ultimate task management companion.
                Organize, prioritize, and track your tasks effortlessly with an intuitive
                interface designed to boost your productivity. Whether you're managing
                daily goals or long-term projects, TaskFlow keeps you focused and in control
                every step of the way.
              </p>

              <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
                <span><strong className="text-secondary">Uncompleted:</strong> {uncompletedTasks.length}</span>
                <span><strong className="text-danger">High:</strong> {priorityCount.High}</span>
                <span><strong className="text-warning">Medium:</strong> {priorityCount.Medium}</span>
                <span><strong className="text-success">Low:</strong> {priorityCount.Low}</span>
              </div>
            </div>
          </div>

          {

          }
          <div className="text-center mb-4">
            <h4 className="fw-bold" style={{ color: '#FFC107' }}>Task List</h4>
          </div>

          {

          }
          <div className="row justify-content-center">
            <div className="col-md-10">
              <TaskListView
                tasks={tasks}
                markCompleted={markCompleted}
                deleteTask={deleteTask}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  function Footer() {
    return (
      <footer
        className="footer text-light py-4 mt-5 shadow-lg"
        style={{
          backgroundColor: '#1d1d1dff',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.6)',
        }}
      >
        <div className="container text-center">
          <p className="mb-0 fw-semibold" style={{ color: '#bbb', letterSpacing: '0.5px' }}>
            © 2025 <span style={{ color: '#FFC107' }}>TaskFlow</span> | Created with React & Bootstrap
          </p>
          <p className="mb-0 fw-semibold" style={{ color: '#bbb', letterSpacing: '0.5px' }} >
            Contact: CSselrahC | cntaxc
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
            <Route path="/add" element={<AddTaskView addTask={addTask} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
