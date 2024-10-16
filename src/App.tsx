import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Portfolio</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>Hello! I'm a full-stack developer specializing in React and Flask. I love creating modern web applications that solve real-world problems.</p>
      </section>

      <section id="projects">
        <h2>My Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>Task Manager</h3>
            <p>A task management app built with React and Flask.</p>
            <a href="https://github.com/your-github/task-manager" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
          <div className="project-card">
            <h3>E-commerce Platform</h3>
            <p>An e-commerce platform with advanced search and filter functionalities.</p>
            <a href="https://github.com/your-github/ecommerce-platform" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <p>Feel free to reach out via <a href="mailto:your.email@example.com">email</a>!</p>
      </section>

      <footer>
        <p>&copy; 2024 My Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
