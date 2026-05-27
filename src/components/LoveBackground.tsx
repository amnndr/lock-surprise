import { useMemo } from 'react';
import '../App.css'; // pastikan animasi heart ter-load

export default function LoveBackground() {
  const hearts = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: Math.random() * 3 + 3,
      delay: Math.random() * 5,
      size: Math.random() * 1.5 + 1,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-pink-100">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            fontSize: `${heart.size}rem`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
}
