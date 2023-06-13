import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import Play from './pages/Play';
import Profile from './pages/Profile';
import Leaderboard from './pages/Leaderboard/Leaderboard';
import Admin from './pages/Admin/Admin';

function App() {
  return (
    <Router>
      <div className="bg-gray-800 mb-10">
        <nav className="container mx-auto flex items-center justify-between py-4">
          <h1 className="text-white text-2xl font-bold">JG TRIVIA</h1>
          <ul className="flex space-x-4">
            <li>
              <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
            </li>
            <li>
              <Link to="/profile" className="text-white hover:text-gray-300">Profile</Link>
            </li>
            <li>
              <Link to="/play" className="text-white hover:text-gray-300">Play</Link>
            </li>
            <li>
              <Link to="/leaderboard" className="text-white hover:text-gray-300">Leaderboard</Link>
            </li>
            <li>
              <Link to="/admin" className="text-white hover:text-gray-300">Admin</Link>
            </li>
          </ul>
        </nav>
      </div>


        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/play" element={<Play />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
    </Router>
  );
}

export default App;
