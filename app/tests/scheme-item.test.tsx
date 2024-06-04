import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SchemeItem, { SchemeItemProps } from '../components/scheme-item';

// Mock the SchemeRectGraphic component since it's not relevant for this test
jest.mock('../components/scheme-rect-graphic', () => (props: { colors: string[] }) => (
  <div data-testid="mock-scheme-rect-graphic">
    {props.colors.map((color, index) => (
      <div key={index} data-testid={`color-${index}`} style={{ color }}>{color}</div>
    ))}
  </div>
));

describe('SchemeItem', () => {
  // Test to validate the SchemeItemProps interface
  it('accepts SchemeItemProps and renders correctly', () => {
    const testProps: SchemeItemProps = {
      colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff']
    };

    const { getByTestId } = render(<SchemeItem {...testProps} />);
    const schemeRectGraphic = getByTestId('mock-scheme-rect-graphic');

    // Check if SchemeRectGraphic received the correct colors prop
    testProps.colors!.forEach((color, index) => {
      const colorDiv = getByTestId(`color-${index}`);
      expect(colorDiv).toHaveStyle(`color: ${color}`);
    });
  });
});
