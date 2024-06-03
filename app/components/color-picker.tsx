import React, { useState } from 'react';
import '../styles/components/color-picker.css';
import { getContrastColor } from '../utils/get-contrast-color';

interface ColorPickerProps {
  initialColor?: string;
  onChange?: (color: string) => void; // Add an optional onChange prop
}

const ColorPicker: React.FC<ColorPickerProps> = ({ initialColor = '#ffffff', onChange }) => {
  const [color, setColor] = useState<string>(initialColor);
  const [isValidColor, setIsValidColor] = useState<boolean>(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
    const isValid = /^#([0-9a-f]{3}){1,2}$/i.test(newColor);
    setIsValidColor(isValid);
    setColor(newColor);

    if (isValid && onChange) {
        onChange(newColor); // Call the onChange prop with the new color
    }
  };

  return (
    <input
      type="text"
      value={color}
      onChange={handleChange}
      className={`w-24 h-24 text-lg text-center rounded border-2 ${isValidColor ? 'border-transparent' : 'border-red-500'}`}
      style={{ backgroundColor: isValidColor ? color : 'white', color: isValidColor ? getContrastColor(color) : 'black' }}
    />
  );
};

export default ColorPicker;
