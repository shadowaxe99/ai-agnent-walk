import React, { useRef, useState } from 'react';

const SketchPad = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const startDrawing = (event) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const { offsetX, offsetY } = event.nativeEvent;
    context.beginPath();
    context.moveTo(offsetX, offsetY);

    setIsDrawing(true);
  };

  const continueDrawing = (event) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const { offsetX, offsetY } = event.nativeEvent;
    context.lineTo(offsetX, offsetY);
    context.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  // Render the sketch pad
  return (
    <div>
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        onMouseDown={startDrawing}
        onMouseMove={isDrawing ? continueDrawing : null}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      ></canvas>
      {/* Drawing logic to generate code will be implemented here */}
    </div>
  );
};

export default SketchPad;