import React from 'react';
import './App.css';
import MoviesList from './Components/MoviesList';

function App() {
  return (
    <div>
      {/* Header */}
      <div className="header">
        <div className="logo">
          <img src="/logo.png" alt="Logo" /> {/* Placeholder for your logo */}
          YourTubeClone
        </div>
        <div className="search-bar">
          <input type="search" placeholder="Search" />
        </div>
        <div className="user-actions">
          {/* Placeholder for user actions (e.g., sign in, upload) */}
          Sign In
        </div>
      </div>

      {/* Sidebar */}
      <div className="sidebar">
        <a href="#home">Home</a>
        <a href="#trending">Trending</a>
        <a href="#subscriptions">Subscriptions</a>
        {/* Add more sidebar items as needed */}
      </div>

      {/* Main Content */}
      <div className="main-content">
        <MoviesList />
      </div>
    </div>
  );
}

export default App;
