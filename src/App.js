import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Header() {
  return (
    <header className="header">
      <div class ="container">
        <h2>TaskManiger</h2>
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">Add Task</Link>
        </nav>
      </div>
    </header>
  );
}

function Home() {
  return (
    <div class ="container">
      <h1>🐳 Docker React App</h1>
      <p>Welcome to your Dockerized React application!</p>
      <p>This app is running in a Docker container with hot reload enabled.</p>
    </div>
  );
}

function AddTask() {
  return (
    <div class ="container">
      <h1>Add Task</h1>
      <p>This is a sample React app containerized with Docker.</p>
      <p>Features:</p>
      <ul>
        <li>React 18</li>
        <li>React Router</li>
        <li>Hot reload in development</li>
        <li>Production-ready builds</li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">AddTask</Link>
        </nav>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addtask" element={<AddTask />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

// Gawa ni GPT with bootstrap design
function Footer() {
  return (
    <footer className="footer bg-dark text-light py-3 mt-auto"> 
      <div className="container text-center">
        <p className="mb-0">© 2025 TaskManager | Developed by Coach B</p>
      </div>
    </footer>
  );
}

export default App;
