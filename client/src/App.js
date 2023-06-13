import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import Play from './pages/Play';
import Leaderboard from './pages/Leaderboard';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <div>
        <nav className='m-10'>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/play">Play</Link>
            </li>
            <li>
              <Link to="/leaderboard">Leaderboard</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/play" element={<Play />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
