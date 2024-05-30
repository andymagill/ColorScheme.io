"use client";

import React, { useState } from 'react';
import { MaterialPicker } from 'react-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUnlock, faExpand } from '@fortawesome/free-solid-svg-icons';

const ToolTray = () => {
  const [baseColor, setBaseColor] = useState('#ffffff');
  const [colorModel, setColorModel] = useState('analogous');
  const [generatedColors, setGeneratedColors] = useState([]);
  const [lockedColors, setLockedColors] = useState([false, false, false, false, false]);
  const [isExpanded, setIsExpanded] = useState(false);

  const generateRandomScheme = () => {
    const newColors = generatedColors.map((color, index) => (
      lockedColors[index] ? color : `#${Math.floor(Math.random() * 16777215).toString(16)}`
    ));
    // TODO: set generated colors
    // setGeneratedColors(newColors);
  };

  const handleColorChange = (color) => {
    setBaseColor(color.hex);
  };

  const handleLockToggle = (index) => {
    const newLocks = [...lockedColors];
    newLocks[index] = !newLocks[index];
    setLockedColors(newLocks);
  };

  const saveScheme = () => {
    // TODO Save color scheme to local storage
    // const savedSchemes = JSON.parse(localStorage.getItem('savedSchemes')) || [];
    // savedSchemes.push(generatedColors);
    // localStorage.setItem('savedSchemes', JSON.stringify(savedSchemes));
  };

  const exportScheme = () => {
    // TODO: Implement export functionality here

  };

  const generateShareableLink = () => {
    // TODO: Implement shareable link generation here
  };

  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-white shadow-lg ${isExpanded ? 'h-64' : 'h-16'}`}>
      <div className="flex items-center justify-between p-2">
        <div>
          <MaterialPicker color={baseColor} onChangeComplete={handleColorChange} />
        </div>
        <div>
          <select
            className="border rounded p-1"
            value={colorModel}
            onChange={(e) => setColorModel(e.target.value)}
          >
            <option value="analogous">Analogous</option>
            <option value="complementary">Complementary</option>
            <option value="monochromatic">Monochromatic</option>
            {/* Add more color models as needed */}
          </select>
          <button
            className="ml-2 p-2 bg-blue-500 text-white rounded"
            onClick={generateRandomScheme}
          >
            Generate
          </button>
        </div>
        <div className="flex items-center space-x-2">
          {generatedColors.map((color, index) => (
            <div key={index} className="flex items-center space-x-1">
              <div
                className="w-10 h-10"
                style={{ backgroundColor: color }}
              />
              <button onClick={() => handleLockToggle(index)}>
                {lockedColors[index] ? <FontAwesomeIcon icon={faLock} /> : <FontAwesomeIcon icon={faUnlock} />}
              </button>
            </div>
          ))}
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
        </div>
        <button
          className="ml-2 p-2 bg-gray-500 text-white rounded lg:hidden"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <FontAwesomeIcon icon={faExpand} />
        </button>
      </div>
    </div>
  );
};

export default ToolTray;