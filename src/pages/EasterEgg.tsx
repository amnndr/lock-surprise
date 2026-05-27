interface EasterEggProps {
  onBack: () => void;
}

export default function EasterEgg({ onBack }: EasterEggProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 animate-fade-in w-full min-h-screen p-4 bg-black/80 fixed inset-0 z-[200]">
      <h2 className="text-3xl md:text-5xl font-extrabold text-pink-400 drop-shadow-md text-center">
        You found the Easter Egg!
      </h2>
      
      <div className="w-full max-w-3xl aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-pink-500">
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
      
      <button
        onClick={onBack}
        className="px-8 py-3 bg-pink-600 text-white font-bold text-xl rounded-xl shadow-lg hover:bg-pink-700 transition-colors duration-200"
      >
        Go Back
      </button>
    </div>
  );
}
