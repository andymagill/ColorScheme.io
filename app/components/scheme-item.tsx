'use client';

import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { generateRandomCclor } from '../utils/generate-random-color';
import SchemeRectGraphic from './scheme-rect-graphic'; // import rectangle graphic
import '../styles/components/scheme-item.css';

// Define the props type for TypeScript
export interface SchemeItemProps {
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
      const newColors = Array.from({ length: 5 }, generateRandomColor);
      setColorArray(newColors);
    }
  }, [id, colors]);

  return (
    <section className="scheme-item relative">
      <SchemeRectGraphic colors={colorArray} />
    </section>
  );
});

export default SchemeItem;
