import React, { useRef, useState } from 'react';

const SketchPad = () => {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [coordinates, setCoordinates] = useState([]);

  const handleMouseDown = (event) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setDrawing(true);
    setCoordinates([...coordinates, [x, y]]);

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#000';
  }

  const handleMouseMove = (event) => {
    if (!drawing) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setCoordinates([...coordinates, [x, y]]);

    ctx.lineTo(x, y);
    ctx.stroke();
  }

  const handleMouseUp = () => {
    setDrawing(false);
  }

  const handleSubmit = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Generate code for website based on coordinates
    const code = generateCode(coordinates);

    console.log(code);
  }

  const generateCode = (coordinates) => {
    // Write code generation logic here based on coordinates
    // Return the generated code
  }

  return (
    <div>
      <canvas
        ref={canvasRef}
        width="500"
        height="500"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
      <button onClick={handleSubmit}>Generate Code</button>
    </div>
  );
}

export default SketchPad;