
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { getContrastColor } from '../utils/get-contrast-color';
import '../styles/components/color-picker.css';

interface ColorSelectorProps {
  initialColor?: string;
  onChange?: (color: string) => void;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({ initialColor = '#ffffff', onChange }) => {
  const [color, setColor] = useState<string>(initialColor);
  const [isValidColor, setIsValidColor] = useState<boolean>(true);
  const [isColorPickerOpen, setIsColorPickerOpen] = useState<boolean>(false); // State to track color picker visibility
  const colorInputRef = useRef<HTMLInputElement>(null); // Ref for the hidden color input
  const textInputRef = useRef<HTMLInputElement>(null); // Ref for the text input
  const colorSelectorButtonRef = useRef<HTMLButtonElement>(null); // Ref for the color selector button

  // Load color from session storage on mount
  useEffect(() => {
    const savedColor = sessionStorage.getItem('colorPickerValue');
    if (savedColor) {
      setColor(savedColor);
      if (onChange) {
        onChange(savedColor);
      }
    }
  }, [onChange]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
    const isValid = /^#([0-9a-f]{3}){1,2}$/i.test(newColor);
    setIsValidColor(isValid);
    setColor(newColor);

    if (isValid) {
      if (onChange) {
        onChange(newColor);
      }
      sessionStorage.setItem('colorPickerValue', newColor); // Save to session storage
    }
  };

  // toggle browser color picker
  const handleColorSelectorClick = () => {
    if (colorInputRef.current && textInputRef.current) {
      if (isColorPickerOpen) {
        // If the color picker is open, focus the text input and close the color picker
        textInputRef.current.focus();
        setIsColorPickerOpen(false);
      } else {
        // If the color picker is not open, open it
        colorInputRef.current.click();
        setIsColorPickerOpen(true);
      }
    }
  };


  const handleColorSelectorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
    setColor(newColor);
    if (onChange) {
      onChange(newColor);
    }
    sessionStorage.setItem('colorPickerValue', newColor); // Save to session storage
  };

  return (
    <div className='color-picker flex items-end'>
      <input
        ref={textInputRef}
        type="text"
        value={color}
        onChange={handleChange}
        className={`w-24 h-24 text-lg text-center rounded-md border-2 ${isValidColor ? 'border-transparent' : 'border-red-500'}`}
        style={{ backgroundColor: isValidColor ? color : 'white', color: isValidColor ? getContrastColor(color) : 'black' }}
      />

      <button
        ref={colorSelectorButtonRef}
        onClick={handleColorSelectorClick}
        className="color-picker-button rounded bg-slate-400 px-2 py-1 mx-2"
      >
        <FontAwesomeIcon icon={faSliders} />
      </button>

      <input
        ref={colorInputRef}
        type="color"
        value={color}
        onChange={handleColorSelectorChange}
        className="h-px w-px opacity-0" // Hide the color input
      />
    </div>
  );
};

export default ColorSelector;
