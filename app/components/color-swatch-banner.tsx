"use client"
import React, { useState, useEffect } from 'react';

const ColorSwatchBanner = () => {
  const [swatchCount, setSwatchCount] = useState(0);

  useEffect(() => {
    // Calculate the number of swatches based on the window width
    const updateSwatchCount = () => {
      const swatchSize = window.innerHeight * 0.1; // 10vh
      const newSwatchCount = Math.floor(window.innerWidth / swatchSize);
      setSwatchCount(newSwatchCount);
    };

    // Set the initial swatch count on mount
    updateSwatchCount();

    // Add event listener for window resize
    window.addEventListener('resize', updateSwatchCount);

    // Clean up event listener
    return () => window.removeEventListener('resize', updateSwatchCount);
  }, []);

  // Generate an array of swatches with incremental hues
  const hueIncrement = 360 / swatchCount;
  const swatches = Array.from({ length: swatchCount }, (_, index) => {
    const hue = index * hueIncrement;
    const invert = ( hue + 180 > 360 ) ? hue - 180 : hue + 180;

    return (
      <div
        key={index}
        data-hover-outline-color={invert}
        className="inline-block w-[10vh] h-[10vh] outline-4 outline-transparent hover:outline-[hsl(attr('data-hover-outline-color), 98%, 48%)]"
        style={{ backgroundColor: `hsl(${hue}, 98%, 48%)` }}
      />
    );
  });

  return (
    <div className="flex w-full gap-1 py-1 items-center ">
      {swatches}
    </div>
  );
};

export default ColorSwatchBanner;
