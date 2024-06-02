"use client";

import React, { useState, useEffect } from 'react';
import SchemeItem from './scheme-item';
import randomColor from 'randomcolor'; 
import '../styles/components/scheme-list.css';

export default function SchemeList({ title = '', src = '' }: { title?: string; src?: string }) {
  const [schemes, setSchemes] = useState<string[][]>([]);

  useEffect(() => {
    if (src === 'saved') {
      // Fetch saved schemes from local storage
      const loadedSchemes = JSON.parse(localStorage.getItem('savedSchemes') || '[]');
      setSchemes(loadedSchemes);
    } else {
      // Generate random colors if src is blank
      const randomSchemes = Array.from({ length: 5 }, () => randomColor({ count: 5 }));
      setSchemes(randomSchemes);
    }
  }, [src]);

  return (
    <section className="scheme-list py-8 px-4">
      <div className='wrapper max-w-7xl py-4'>
        <h2 className='bold text-2xl mb-8'>{title}</h2>

        <div className='inner flex flex-wrap justify-center gap-4'>
          {schemes.map((colors, index) => (
            <SchemeItem key={index} colors={colors} />
          ))}
        </div>
      </div>
    </section>
  );
};
