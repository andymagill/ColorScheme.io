"use client";

import React, { useState, useRef } from 'react';
import SchemeItem, { SchemeItemMethods } from './scheme-item';
import ColorPicker from './color-picker';
import HueGenerateButton from './hue-generate-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUnlock, faExpand } from '@fortawesome/free-solid-svg-icons';
import randomColor from 'randomcolor';
import '../styles/components/tool-tray.css';


const ToolTray = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [colorPickerValue, setColorPickerValue] = useState('#ff0000'); // Define the colorPickerValue state
  const schemeItemRef = useRef<SchemeItemMethods>(null);// Create a ref to the SchemeItem component
  

  // Define the handleSchemeGenerated function
  const handleSchemeGenerated = (colors: string[]) => {
    if (schemeItemRef.current) {
      schemeItemRef.current.setColorArray(colors);
    }
  };

  const generateRandomScheme = () => {
    console.log('generateRandomScheme');
    // Generate a new color scheme using randomColor
    const newScheme = randomColor({
      count: 5,
      hue: colorPickerValue // Use the color picker's value as the hue
    });
    handleSchemeGenerated(newScheme);
  };

  const saveScheme = () => {
    if (schemeItemRef.current) {
      const colorsToSave = schemeItemRef.current.getColorArray();
      // Retrieve the existing saved schemes from local storage
      const savedSchemes = JSON.parse(localStorage.getItem('savedSchemes') || '[]');
      // Add the new color scheme to the array of saved schemes
      savedSchemes.push(colorsToSave);
      // Save the updated array back to local storage
      localStorage.setItem('savedSchemes', JSON.stringify(savedSchemes));
      // throw custom event to tell SchemeList to update Schemes from local storage
      window.dispatchEvent(new Event('schemesChanged'));
    } else {
      console.log('SchemeItem is not mounted yet.');
    }
  };
  
  const exportScheme = () => {
    // TODO: Implement export functionality here
    console.log('exportScheme');
  };

  const generateShareableLink = () => {
    // TODO: Implement shareable link generation here
    console.log('generateShareableLink');
  };

  return (
    <div className={`tool-tray fixed z-20 bottom-0 left-0 right-0 bg-white shadow-lg transition-[height]
      ${ isExpanded ? 'expanded h-64' : 'h-16' }`} >
      <div className="flex items-end justify-between max-h-full p-4 ">

        {/* SchemeItem component */}
        <SchemeItem ref={schemeItemRef} />

        {/* HueGenerateButton component */}
        <HueGenerateButton 
          colorPickerValue={colorPickerValue}
          onSchemeGenerated={handleSchemeGenerated}
        />
        
        {/* ColorPicker component with onChange handler */}
        <ColorPicker initialColor={colorPickerValue} onChange={setColorPickerValue} />

        <div>
          <button className="ml-2 p-2 bg-blue-500 text-white rounded" onClick={generateRandomScheme} >
            Randomize
          </button>
        </div>

        <div>
          <button className="p-2 bg-green-500 text-white rounded" onClick={saveScheme}>
            Save
          </button>
          <button className="ml-2 p-2 bg-yellow-500 text-white rounded" onClick={exportScheme}>
            Export
          </button>
          <button className="ml-2 p-2 bg-purple-500 text-white rounded" onClick={generateShareableLink}>
            Share
          </button>
          <button
            className="ml-2 p-2 bg-gray-500 text-white rounded sm:hidden"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <FontAwesomeIcon icon={faExpand} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolTray;
