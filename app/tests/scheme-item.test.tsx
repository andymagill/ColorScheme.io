import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import SchemeItem, { SchemeItemProps, SchemeItemMethods } from '../components/scheme-item';

// Mock the SchemeRectGraphic component since it's not relevant for this test
jest.mock('../components/scheme-rect-graphic', () => (props: { colors: string[] }) => (
  <div data-testid="mock-scheme-rect-graphic">
    {props.colors.map((color, index) => (
      <div key={index} data-testid={`color-${index}`} style={{ color }}>{color}</div>
    ))}
  </div>
));

// Mock randomColor function
jest.mock('randomColor', () => ({
  randomColor: jest.fn(() => ['#000000', '#111111', '#222222', '#333333', '#444444']),
}));

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
  
  it('generates default colors if none are provided', () => {
    const { getByTestId } = render(<SchemeItem />);
    const schemeRectGraphic = getByTestId('mock-scheme-rect-graphic');
    expect(schemeRectGraphic).toHaveTextContent('#000000');
    // ...assert other default colors
  });

  it('updates colors when setColorArray is called', () => {
    const ref = React.createRef<SchemeItemMethods>();
    const { getByTestId } = render(<SchemeItem ref={ref} />);
    act(() => {
      ref.current?.setColorArray(['#555555', '#666666', '#777777', '#888888', '#999999']);
    });
    const schemeRectGraphic = getByTestId('mock-scheme-rect-graphic');
    expect(schemeRectGraphic).toHaveTextContent('#555555');
  });
});
