import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './assets/octofit-logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="OctoFit Tracker" className="logo-small" />
              OctoFit Tracker
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/activities">Activities</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/teams">Teams</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/workouts">Workouts</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main className="container">
          <Routes>
            <Route path="/" element={<h1 className="text-center mt-5">Welcome to OctoFit Tracker</h1>} />
            <Route path="/activities" element={<h2>Activities</h2>} />
            <Route path="/teams" element={<h2>Teams</h2>} />
            <Route path="/leaderboard" element={<h2>Leaderboard</h2>} />
            <Route path="/workouts" element={<h2>Workouts</h2>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
