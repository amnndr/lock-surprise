import '../App.css'; 

interface AirplaneEasterEggProps {
  onClick: () => void;
}

export default function AirplaneEasterEgg({ onClick }: AirplaneEasterEggProps) {
  return (
    <div 
      onClick={onClick}
      className="fixed z-[9999] cursor-pointer paper-plane w-16 h-16 p-2 md:w-[100px] md:h-[100px] md:p-[10px]"
      title="Click me!"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ec4899" className="w-full h-full drop-shadow-2xl hover:scale-125 transition-transform duration-200">
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
      </svg>
    </div>
  );
}
