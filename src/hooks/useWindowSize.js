import { useState, useEffect } from 'react';

function calcWindowSize() {
  const { innerWidth: width, innerHeight: height } = window;
  return { height, width };
}

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState(calcWindowSize());

  useEffect(() => {
    function handleResize() {
        setWindowSize(calcWindowSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}

