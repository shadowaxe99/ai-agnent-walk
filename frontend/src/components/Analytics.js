import React, { useState, useRef, useEffect } from 'react';

const SketchPad = () => {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [ctx, setCtx] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    setCtx(context);
  }, []);

  const startDrawing = (e) => {
    setDrawing(true);
    const { offsetX, offsetY } = e.nativeEvent;
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
  };

  const draw = (e) => {
    if (!drawing) return;
    const { offsetX, offsetY } = e.nativeEvent;
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setDrawing(false);
  };

  const clearCanvas = () => {
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  const generateWebsiteCode = () => {
    const canvasData = ctx.getImageData(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );

    // Convert canvasData to website code
    // ... code to convert canvasData to website code ...
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
      />
      <button onClick={clearCanvas}>Clear</button>
      <button onClick={generateWebsiteCode}>Generate Website Code</button>
    </div>
  );
};

export default SketchPad;