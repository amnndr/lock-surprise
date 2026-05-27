import { useState } from 'react';
import '../App.css'; // Memastikan CSS ter-load
import AirplaneEasterEgg from './AirplaneEasterEgg';

interface EnvelopeLetterProps {
  onPlaneClick: () => void;
}

export default function EnvelopeLetter({ onPlaneClick }: EnvelopeLetterProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center mt-12 mb-8 relative">
      <div 
        className={`envelope-wrapper ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(true)}
      >
        <div className="envelope-back"></div>
        <div className="envelope-letter p-6 flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold text-pink-600 mb-4 font-serif">
            Happy 1st Anniversary! 🎉
          </h3>
          <div className="text-gray-700 space-y-3 text-sm md:text-base overflow-y-auto w-full custom-scrollbar">
            <p>Dear Baby,</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
            </p>
             <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="font-semibold text-pink-500 mt-4">
              Many more years to come together ❤️
            </p><br/><br/><br/><br/><br/>
          </div>
        </div>
        <div className="envelope-flap"></div>
        <div className="envelope-front"></div>
      </div>

      {!isOpen && (
        <p className="text-pink-600 mt-6 font-bold animate-pulse text-lg tracking-wide">
          Click the envelope! 💌
        </p>
      )}

      {/* Render the airplane once the envelope is opened */}
      {isOpen && <AirplaneEasterEgg onClick={onPlaneClick} />}
    </div>
  );
}
