import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SketchPad from './SketchPad';

describe('SketchPad Component', () => {
  it('renders without crashing', () => {
    render(<SketchPad />);
  });

  it('captures user drawing', () => {
    const { getByTestId } = render(<SketchPad />);
    const canvas = getByTestId('canvas');

    fireEvent.mouseDown(canvas, { clientX: 0, clientY: 0 });
    fireEvent.mouseMove(canvas, { clientX: 100, clientY: 100 });
    fireEvent.mouseUp(canvas, { clientX: 100, clientY: 100 });

    expect(canvas).toHaveAttribute('data-drawing', 'true');
  });

  it('spits out code for a website that matches the drawing', () => {
    const { getByTestId } = render(<SketchPad />);
    const canvas = getByTestId('canvas');

    fireEvent.mouseDown(canvas, { clientX: 0, clientY: 0 });
    fireEvent.mouseMove(canvas, { clientX: 100, clientY: 100 });
    fireEvent.mouseUp(canvas, { clientX: 100, clientY: 100 });

    fireEvent.mouseDown(canvas, { clientX: 100, clientY: 100 });
    fireEvent.mouseMove(canvas, { clientX: 50, clientY: 50 });
    fireEvent.mouseUp(canvas, { clientX: 50, clientY: 50 });

    fireEvent.mouseDown(canvas, { clientX: 50, clientY: 50 });
    fireEvent.mouseMove(canvas, { clientX: 150, clientY: 150 });
    fireEvent.mouseUp(canvas, { clientX: 150, clientY: 150 });

    const code = getByTestId('code');

    expect(code).toHaveTextContent('<div style="position: absolute; top: 0px; left: 0px; width: 100px; height: 100px;"></div>');
    expect(code).toHaveTextContent('<div style="position: absolute; top: 100px; left: 50px; width: 50px; height: 50px;"></div>');
    expect(code).toHaveTextContent('<div style="position: absolute; top: 50px; left: 150px; width: 100px; height: 100px;"></div>');
  });
});

Note: The SketchPad component and its functionality need to be implemented separately. The provided code is a sample test suite for testing the SketchPad component.