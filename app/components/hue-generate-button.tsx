
import React from 'react';
import randomColor from 'randomcolor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface HueGenerateButtonProps {
  colorPickerValue: string;
  onSchemeGenerated: (colors: string[]) => void;
}

const HueGenerateButton: React.FC<HueGenerateButtonProps> = ({
  colorPickerValue,
  onSchemeGenerated,
}) => {
  const generateScheme = () => {
    const newScheme = randomColor({
      count: 5,
      hue: colorPickerValue,
    });
    onSchemeGenerated(newScheme);
  };

  return (
    <button
      className="p-2 bg-gray-500 text-white rounded"
      onClick={generateScheme}
    >
      <FontAwesomeIcon icon={faArrowLeft} />
    </button>
  );
};

export default HueGenerateButton;
