import React, { useState } from 'react';
import '../styles/components/color-picker.css';

interface ColorPickerProps {
  initialColor?: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ initialColor = '#ffffff' }) => {
  const [color, setColor] = useState<string>(initialColor);
  const [isValidColor, setIsValidColor] = useState<boolean>(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
    const isValid = /^#([0-9a-f]{3}){1,2}$/i.test(newColor);
    setIsValidColor(isValid);
    setColor(newColor);
  };

  return (
    <input
      type="text"
      value={color}
      onChange={handleChange}
      className={`w-24 h-24 text-lg text-center rounded border-2 ${isValidColor ? 'border-transparent' : 'border-red-500'}`}
      style={{ backgroundColor: isValidColor ? color : 'white', color: isValidColor ? getContrastYIQ(color) : 'black'  }}
    />
  );
};

// Function to calculate contrast color for text
function getContrastYIQ(hexcolor: string): 'white' | 'black' {
  const r = parseInt(hexcolor.substr(1, 2), 16);
  const g = parseInt(hexcolor.substr(3, 2), 16);
  const b = parseInt(hexcolor.substr(5, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? 'black' : 'white';
}

export default ColorPicker;
