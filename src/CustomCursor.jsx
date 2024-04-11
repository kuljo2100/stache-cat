import useMousePosition from './useMousePosition';
import customCursor from './assets/images/tache-pointer.png';
import { useEffect, useState } from 'react';

const TRAIL_LIMIT = 20;

const CustomCursor = () => {
   
  const { x, y } = useMousePosition();
  const [trailPositions, setTrailPositions] = useState([]);

  useEffect(() => {
    // Introduce a small delay to make the trailing effect more pronounced
    const timeoutId = setTimeout(() => {
      const newTrailPositions = trailPositions.concat({ x, y });
      if (newTrailPositions.length > TRAIL_LIMIT) {
        newTrailPositions.shift(); // Remove the oldest position
      }
      setTrailPositions(newTrailPositions);
    }, 8); // Adjust this delay to control the responsiveness of the trail

    return () => clearTimeout(timeoutId);
  }, [x, y, trailPositions]);

  return (
    <>
      {trailPositions.map((pos, index) => (
        <div
          key={index}
          style={{
            position: 'fixed',
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            width: '40px', // Smaller size for trailing effect
            height: '18px',
            backgroundImage: `url(${customCursor})`,
            backgroundSize: 'cover',
            pointerEvents: 'none',
            zIndex: 9998 - index, // Ensure newer positions are on top, but behind the main cursor
            transform: 'translate(-50%, -50%)',
            opacity: (1 / TRAIL_LIMIT) * (index + 1), // Adjust for a fading in effect
            transition: 'opacity 0.6s, left 0.2s, top 0.2s', // Smooth transition for fading
          }}
        />
      ))}
      <div
        style={{
          position: 'fixed',
          left: `${x}px`,
          top: `${y}px`,
          width: '60px',
          height: '27px',
          backgroundImage: `url(${customCursor})`,
          backgroundSize: 'cover',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
        }}
      ></div>
    </>
  );
};

export default CustomCursor;