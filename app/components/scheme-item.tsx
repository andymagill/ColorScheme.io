'use client';

import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import randomColor from 'randomcolor'; // Import randomColor for generating colors
import { Oswald } from "next/font/google";
import '../styles/components/scheme-item.css';

const oswald = Oswald({ subsets: ["latin"] });

// Define the props type for TypeScript
interface SchemeItemProps {
  id?: number;
  colors?: string[]; // Make colors optional
}
export interface SchemeItemMethods {
  getColorArray: () => string[];
}

// Use forwardRef and define the component with the props type
const SchemeItem = forwardRef(({ id, colors }: SchemeItemProps, ref) => {
  const [colorArray, setColorArray] = useState<string[]>(colors || []);

  // Expose the colorArray to the parent component
  useImperativeHandle(ref, () => ({
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
    <section className="scheme-item w-48">
      <div className='inner pt-4 px-4 pb-8'>
        {
          colorArray.map((color, index) => (
            <div className='swatch flex items-end justify-center p-2' key={index} style={{ backgroundColor: color }}>
              <span className={`${oswald.className} inline-block font-bold text-xs text-center`}>{color}</span>
            </div>
          ))
        }
      </div>
    </section>
  );
});

export default SchemeItem;
