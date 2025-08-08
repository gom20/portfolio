import { useState, useEffect } from 'react';

interface MouseLightProps {
  isTransitioning?: boolean;
}

export default function MouseLight({
  isTransitioning = false,
}: MouseLightProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        opacity: isTransitioning ? 0 : 1,
        transition: 'opacity 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(156, 163, 175, 0.15), transparent 50%)`,
      }}
    />
  );
}
