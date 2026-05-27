import { useState } from 'react';
import './App.css';
import LoveBackground from './components/LoveBackground';
import Login from './pages/Login';
import Home from './pages/Home';
import EasterEgg from './pages/EasterEgg';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  return (
    <div className="overflow-hidden font-sans relative min-h-screen">
      
      <LoveBackground />

      <div className="relative z-10 flex min-h-screen items-center justify-center">
        {showEasterEgg ? (
          <EasterEgg onBack={() => setShowEasterEgg(false)} />
        ) : !isLoggedIn ? (
          <Login onLoginSuccess={() => setIsLoggedIn(true)} />
        ) : (
          <Home onEasterEggClick={() => setShowEasterEgg(true)} />
        )}
      </div>
      
    </div>
  );
}