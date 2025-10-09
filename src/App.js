import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import TaskListView from './components/TaskListView';
import AddTaskView from './components/AddTaskView';
import Header from './components/Header';

function Home() {
  return (
    <div className="container">
      <h1>🦖 TaskFlow</h1>
      <p>Welcome to TaskFlow, your Task Management Application!</p>
      <p>This application is designed to help you manage your tasks efficiently,
      make you more productive, and keep track of your to-do list with ease.</p>
    </div>
  );
}

function App() {
  useEffect(() => {
    document.title = "TaskFlow";
  }, []);

  return (
    <Router>
      <Header />
      <div className="App d-flex flex-column min-vh-100 h-100">
        <main className="main-content flex-grow-1 h-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addtask" element={<AddTaskView />} />
            <Route path="/tasklist" element={<TaskListView />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
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

export default App;
