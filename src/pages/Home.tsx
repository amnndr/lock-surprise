import { useState } from 'react';
import EnvelopeLetter from '../components/EnvelopeLetter';

interface HomeProps {
  onEasterEggClick: () => void;
}

export default function Home({ onEasterEggClick }: HomeProps) {
  const [yesScale, setYesScale] = useState(1);
  const [noPosition, setNoPosition] = useState<{ top?: number; left?: number; position?: 'static' | 'fixed' }>({ position: 'static' });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNoInteraction = () => {
    setYesScale((prev) => prev + 0.3);
    
    const x = Math.random() * (window.innerWidth - 100); 
    const y = Math.random() * (window.innerHeight - 50);
    
    setNoPosition({ top: y, left: x, position: 'fixed' });
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center space-y-6 animate-fade-in w-full min-h-screen py-10 overflow-y-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-pink-600 drop-shadow-sm text-center">
          I Love You Too! 🥰
        </h1>
        
        <EnvelopeLetter onPlaneClick={onEasterEggClick} />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-8 w-full">
      <h1 className="text-4xl md:text-6xl font-extrabold text-pink-600 drop-shadow-sm text-center px-4">
        Do you love me? 🥺
      </h1>
      <div className="flex items-center space-x-6 relative">
        
        <button
          onClick={() => setIsSuccess(true)}
          style={{ transform: `scale(${yesScale})` }}
          className="px-8 py-3 bg-green-500 text-white font-bold text-xl rounded-xl shadow-lg hover:bg-green-600 transition-transform duration-200"
        >
          Yes
        </button>

        <button
          onMouseEnter={handleNoInteraction}
          onClick={handleNoInteraction}
          style={{
            position: noPosition.position,
            top: noPosition.top !== undefined ? `${noPosition.top}px` : 'auto',
            left: noPosition.left !== undefined ? `${noPosition.left}px` : 'auto',
          }}
          className="px-8 py-3 bg-red-500 text-white font-bold text-xl rounded-xl shadow-lg transition-all duration-200"
        >
          No
        </button>
        
      </div>
    </div>
  );
}
