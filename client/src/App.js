import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

import Play from './pages/Play';
import Profile from './pages/Profile';
import Leaderboard from './pages/Leaderboard/Leaderboard';
import Admin from './pages/Admin/Admin';
import { Amplify } from 'aws-amplify'
import awsconfig from './aws-exports'
import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsconfig);


function App() {

  return (
    <Router>

      <div className="bg-neutral mb-10">
        <nav className="container mx-auto flex items-center justify-between py-4">
          <h1 className="text-white text-2xl font-bold">JG TRIVIA</h1>
          <ul className="flex space-x-4">
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
        <Route path="/profile" element={<Profile />} />
        <Route path="/play" element={<Play />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/*" element={<Navigate to="/play" />} />
      </Routes>


    </Router>
  );
}

export default withAuthenticator(App);
