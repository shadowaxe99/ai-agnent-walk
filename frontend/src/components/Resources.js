import React, { useState, useEffect, useRef } from 'react';

const SketchPad = () => {
  const [drawing, setDrawing] = useState(false);
  const [coordinates, setCoordinates] = useState([]);
  const canvasRef = useRef(null);

  const startDrawing = () => {
    setDrawing(true);
  };

  const endDrawing = () => {
    setDrawing(false);
    generateCode();
  };

  const drawLine = (event) => {
    if (!drawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setCoordinates((prevCoordinates) => [...prevCoordinates, { x, y }]);
    
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const generateCode = () => {
    const canvas = canvasRef.current;
    const imageData = canvas.toDataURL("image/png");
    const code = `
      <html>
        <head>
          <title>Generated Website</title>
        </head>
        <body>
          <div style="background-image: url(${imageData});"></div>
        </body>
      </html>
    `;
    
    console.log(code);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'black';

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', endDrawing);
    canvas.addEventListener('mousemove', drawLine);

    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mouseup', endDrawing);
      canvas.removeEventListener('mousemove', drawLine);
    };
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        style={{ border: '1px solid black' }}
      ></canvas>
    </div>
  );
};

export default SketchPad;