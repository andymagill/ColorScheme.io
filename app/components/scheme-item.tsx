'use client';

import React, { useState, useEffect } from 'react';
import { Oswald } from "next/font/google";
import '../styles/components/scheme-item.css';
import randomColor from 'randomcolor';

const oswald = Oswald({ subsets: ["latin"] });

export default function SchemeItem({ id = 0, colors: initialColors = [] } :
	{ id?: number; colors?: string[] })
{
	const [colorArray, setColorArray] = useState<string[]>([]);
  
	useEffect(() => {
	  	if (id) {
			// TODO: Fetch scheme by ID and update state
	 	} else if (initialColors && initialColors.length > 0) {
			// TODO: Render specific colors
			setColorArray(initialColors);
	  	} else {
			// generate random colors if no colors or ID are provided
			const newColors = randomColor({
		  		count: 5
			});
		setColorArray(newColors);
    	}
  	// The empty dependency array ensures this effect runs only once on mount
  	}, []);

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
};