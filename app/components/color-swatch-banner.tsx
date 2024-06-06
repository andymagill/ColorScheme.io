"use client";

import React, { useState, useEffect } from 'react';
import { debounce } from '../utils/debounce';

const ColorSwatchBanner = () => {
  const [swatchCount, setSwatchCount] = useState(0);

  useEffect(() => {
    // Debounce the updateSwatchCount function
    const debouncedUpdateSwatchCount = debounce(() => {
      const swatchSize = window.innerHeight * 0.1; // 10vh
      const newSwatchCount = Math.floor(window.innerWidth / swatchSize);
      setSwatchCount(newSwatchCount);
    }, 100); // 0.1 seconds

    // Set the initial swatch count on mount
    debouncedUpdateSwatchCount();

    // Add event listener for window resize
    window.addEventListener('resize', debouncedUpdateSwatchCount);

    // Clean up event listener
    return () => window.removeEventListener('resize', debouncedUpdateSwatchCount);
  }, []);

  // Generate an array of swatches with incremental hues
  const hueIncrement = 360 / swatchCount;
  const swatches = Array.from({ length: swatchCount }, (_, index) => {
    const hue = index * hueIncrement;
    const invert = (hue + 180) % 360;

    return (
      <div
        key={index}
        className="inline-block w-[10vh] h-[10vh] outline outline-4 outline-transparent"
        style={{
          backgroundColor: `hsl(${hue}, 98%, 48%)`,
          transition: 'outline-color 0.25s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.outlineColor = `hsl(${invert}, 98%, 48%)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.outlineColor = 'transparent';
        }}
      />
    );
  });

  return (
    <div className="flex w-full gap-1 py-1 items-center">
      {swatches}
    </div>
  );
};

export default ColorSwatchBanner;
