import React, { useState, useRef } from 'react';

const SketchPad = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef(null);

  const startDrawing = (event) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    setIsDrawing(true);
    ctx.beginPath();
    ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
  };

  const draw = (event) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    ctx.stroke();
  };

  const finishDrawing = () => {
    setIsDrawing(false);
    generateCode();
  };

  const generateCode = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    let htmlCode = '';
    let cssCode = '';

    // Generate HTML code
    htmlCode += `<div class="sketch-pad">\n`;
    htmlCode += `  <canvas id="canvas" width="${width}px" height="${height}px"></canvas>\n`;
    htmlCode += `</div>\n`;

    // Generate CSS code
    cssCode += `.sketch-pad {\n`;
    cssCode += `  position: relative;\n`;
    // Add additional styling based on the drawing (e.g., colors, shapes, etc.)
    cssCode += `}\n`;
    cssCode += `#canvas {\n`;
    cssCode += `  position: absolute;\n`;
    cssCode += `  top: 0;\n`;
    cssCode += `  left: 0;\n`;
    cssCode += `}\n`;

    console.log('HTML Code:', htmlCode);
    console.log('CSS Code:', cssCode);
  };

  return (
    <div>
      <h1>Sketch Pad</h1>
      <p>Draw on the canvas below to generate website code:</p>
      <div className="sketch-pad-container">
        <canvas
          ref={canvasRef}
          width={600}
          height={400}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={finishDrawing}
          onMouseLeave={finishDrawing}
        ></canvas>
      </div>
    </div>
  );
};

export default SketchPad;