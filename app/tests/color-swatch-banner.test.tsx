import React from 'react';
import { render, screen } from '@testing-library/react';
import ColorSwatchBanner from '../components/color-swatch-banner';

describe('ColorSwatchBanner', () => {
  // Mock the window dimensions
  const originalInnerWidth = global.innerWidth;
  const originalInnerHeight = global.innerHeight;

  beforeEach(() => {
    // Set the window dimensions before each test
    global.innerWidth = 1000; // Example width
    global.innerHeight = 1000; // Example height
  });

  afterEach(() => {
    // Restore the window dimensions after each test
    global.innerWidth = originalInnerWidth;
    global.innerHeight = originalInnerHeight;
  });

  test('renders the correct number of color swatches based on window width', () => {
    // Calculate the expected number of swatches
    const swatchSize = global.innerHeight * 0.1;
    const expectedSwatchCount = Math.floor(global.innerWidth / swatchSize);

    // Render the component
    render(<ColorSwatchBanner />);

    // Get all the swatches
    const swatches = screen.getAllByRole('presentation');

    // Check if the correct number of swatches are rendered
    expect(swatches).toHaveLength(expectedSwatchCount);
  });
});
