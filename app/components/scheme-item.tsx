'use client';

import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import randomColor from 'randomcolor'; // Import randomColor for generating colors
import SchemeRectGraphic from './scheme-rect-graphic'; // import rectangle graphic
import '../styles/components/scheme-item.css';

// Define the props type for TypeScript
interface SchemeItemProps {
  id?: number;
  colors?: string[]; // Make colors optional
}
export interface SchemeItemMethods {
  setColorArray: (colors: string[]) => void;
  getColorArray: () => string[];
}

// define the component with props types
const SchemeItem = forwardRef(({ id, colors }: SchemeItemProps, ref) => {
  const [colorArray, setColorArray] = useState<string[]>(colors || []);

  // expose methods to the parent component
  useImperativeHandle(ref, () => ({
    setColorArray,
    getColorArray: () => colorArray,
  }));

  useEffect(() => {
    if (colors) {
      setColorArray(colors);
    } else if (id) {
      // TODO: Fetch scheme by ID and update state
    } else {
      // Generate random colors if no colors or ID are provided
      const newColors = randomColor({
        count: 5
      });
      setColorArray(newColors);
    }
  }, [id, colors]);

  return (
    <section className="scheme-item relative w-48">
      <SchemeRectGraphic colors={colorArray} />
    </section>
  );
});

export default SchemeItem;
