import React, { useEffect, useState } from "react";

interface CursorPosition {
  x: number;
  y: number;
}

interface CustomCursorProps {
  isVisible: boolean;
}

export function CustomCursor({ isVisible }: CustomCursorProps) {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
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
      <div className="w-8 h-8 rounded-full border-2 border-white/50 transition-transform duration-300" />
    </div>
  );
}
