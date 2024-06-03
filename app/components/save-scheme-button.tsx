
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { SchemeItemMethods } from './scheme-item';

import '../styles/components/save-scheme-button.css';

// Define the props type for the SaveSchemeButton component
interface SaveSchemeButtonProps {
  schemeItemRef: React.RefObject<SchemeItemMethods>;
}

const SaveSchemeButton: React.FC<SaveSchemeButtonProps> = ({ schemeItemRef }) => {
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

  return (
    <button className="ml-2 p-2 bg-green-500 text-white rounded" onClick={saveScheme}>
      <FontAwesomeIcon icon={faSave} />
      <span>Save</span>
    </button>
  );
};

export default SaveSchemeButton;
