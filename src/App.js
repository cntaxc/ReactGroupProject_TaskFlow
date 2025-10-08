import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import TaskListView from './components/TaskListView';
import AddTaskView from './components/AddTaskView';
import Header from './components/HeaderNew';

function Home() {
  return (
    <div className="container">
      <Header />
      <h1>🐳 Docker React App</h1>
      <p>Welcome to your Dockerized React application!</p>
      <p>This app is running in a Docker container with hot reload enabled.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Header></Header>
      <div className="App">
        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/addtask" className="nav-link">AddTask</Link>
          <Link to="/tasklist" className="nav-link">ViewTask</Link>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addtask" element={<AddTaskView />} />
            <Route path="/tasklist" element={<TaskListView />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

function Footer() {
  return (
    <footer className="footer bg-dark text-light py-3 mt-auto">
      <div className="container text-center">
        <p className="mb-0">© 2025 TaskManager | Developed by Coach CC</p>
      </div>
    </footer>
  );
}

export default App;
