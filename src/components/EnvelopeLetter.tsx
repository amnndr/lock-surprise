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
            <p>Dear Honey,</p>
            <p>
              I don't know what to say. I think I already said so many. The only one thing that won't ever change is that I love you. 
            </p>
             <p>
              I wanna do so many things with you and do nothing and just chill at home at the same time :( No matter what we do, I just want you beside me. That's my only selfish wish. I want you to love me forever. P.s. theres a hidden letter. u should try clicking on something. 
            </p> 
            <p className="font-semibold text-pink-500 mt-4">
              I miss you so much my love ❤️
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
