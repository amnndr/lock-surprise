interface EasterEggProps {
  onBack: () => void;
}

export default function EasterEgg({ onBack }: EasterEggProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 animate-fade-in w-full min-h-screen p-4 bg-black/80 fixed inset-0 z-[200]">
      <h2 className="text-3xl md:text-5xl font-extrabold text-pink-400 drop-shadow-md text-center">
        You found the Easter Egg!
      </h2>
      
      <div className="w-full max-w-2xl bg-white/10 p-8 rounded-2xl border-2 border-pink-500 shadow-2xl backdrop-blur-sm">
        <p className="text-xl md:text-2xl text-white text-center font-medium leading-relaxed">
          "Lowkey I can't wait to give you head. 
          <br /><br />
          I will give you a surprise later, i know you'll enjoy it" 
        </p>
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
