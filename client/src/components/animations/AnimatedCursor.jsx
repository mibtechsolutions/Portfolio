import { useEffect, useState, useRef } from 'react';

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const requestRef = useRef(null);
  const lastPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const animateCursor = () => {
      setTrailPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      requestRef.current = requestAnimationFrame(animateCursor);
    };
    requestRef.current = requestAnimationFrame(animateCursor);

    const handleMouseMove = (e) => {
      lastPosition.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const isInteractive =
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('a') ||
        e.target.closest('button');
      setIsHovering(isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [position]);

  return (
    <>
      {/* Main Cursor Dot */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s ease-out, height 0.2s ease-out',
        }}
      >
        <div
          style={{
            width: isHovering ? '24px' : '10px',
            height: isHovering ? '24px' : '10px',
            borderRadius: '50%',
            background: 'rgba(212, 175, 55, 0.9)',
            boxShadow: isHovering
              ? '0 0 30px rgba(212, 175, 55, 0.8), 0 0 60px rgba(212, 175, 55, 0.4)'
              : '0 0 15px rgba(212, 175, 55, 0.5)',
          }}
        />
      </div>

      {/* Smooth Trailing Dot */}
      <div
        className="fixed pointer-events-none z-40"
        style={{
          left: trailPosition.x,
          top: trailPosition.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: 'rgba(212, 175, 55, 0.2)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
          }}
        />
      </div>
    </>
  );
};

export default AnimatedCursor;
