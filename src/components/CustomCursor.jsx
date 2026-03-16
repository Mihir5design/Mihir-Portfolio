import React, { useEffect, useState } from "react";

export function CustomCursor({ isVisible }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="w-12 h-12 rounded-full bg-black/80 backdrop-blur-sm flex items-center justify-center transition-transform duration-300">
        <img 
          src="/assets/home/arrow-right.webp" 
          alt="cursor arrow" 
          className="w-5 h-5"
        />
      </div>
    </div>
  );
} 