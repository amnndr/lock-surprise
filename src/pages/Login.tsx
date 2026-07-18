import React, { useState } from 'react';

interface LoginProps {
  onLoginSuccess: () => void;
}

export default function Login({ onLoginSuccess }: LoginProps) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const correctNames = ["baby", "jiyun", "honey", "ragebaiter"];
    const correctDate = ["2025-07-18", "2025-07-19"];
    
    if (correctNames.includes(name.toLowerCase().trim()) && correctDate.includes(date)) {
      setError(false);
      onLoginSuccess();
    } else {
      setError(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl w-[90%] max-w-md animate-fade-in border border-pink-200">
      <h2 className="text-3xl font-extrabold text-pink-600 mb-6 drop-shadow-sm text-center">
        Verify It's You! 🔒
      </h2>
      
      <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <label className="text-pink-700 font-semibold">What is your name?</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-3 rounded-xl border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white/80"
            placeholder="Type your name..."
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-pink-700 font-semibold">What is our anniversary date?</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="px-4 py-3 rounded-xl border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white/80"
            required
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm font-bold text-center animate-bounce">
            Oops! you're wrong 😝
          </p>
        )}

        <button
          type="submit"
          className="mt-4 w-full px-8 py-3 bg-pink-500 text-white font-bold text-xl rounded-xl shadow-lg hover:bg-pink-600 transition-colors duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}
