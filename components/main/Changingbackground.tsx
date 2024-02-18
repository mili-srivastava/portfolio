"use client"

import { useEffect, useState } from 'react';

const ChangingBackground = () => {
  const [gradientIndex, setGradientIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientIndex((prevIndex) => (prevIndex + 1) % gradients.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const gradients = [
    'gradient-1',
    'gradient-2',
    'gradient-3'
  ];

  return (
    <div className={`changing-gradient ${gradients[gradientIndex]}`}>
    </div>
  );
};

export default ChangingBackground;
