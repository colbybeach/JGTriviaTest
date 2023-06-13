import React from 'react';
import { useNavigate } from 'react-router-dom';
import SignInWithGoogle from '../components/Buttons/SignInWithGoogle';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/play');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-49">
    <div className="absolute inset-0 backdrop-filter backdrop-blur-lg"></div>
      <SignInWithGoogle onClick={handleLogin}/>
    </div>
  );
}
