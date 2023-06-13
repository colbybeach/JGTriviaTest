import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/play');
  };

  return (
    <button type="button" className="login-with-google-btn" onClick={handleLogin}>
      Sign in with Google
    </button>
  );
}
