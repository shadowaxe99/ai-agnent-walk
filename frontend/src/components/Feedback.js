import React, { useState } from 'react';

const SketchPad = () => {
  const [drawing, setDrawing] = useState('');

  const handleDrawingChange = (event) => {
    setDrawing(event.target.value);
  }

  const generateCode = () => {
    // Here, we would generate the code for the website based on the drawing
    // For the purpose of this demo, we'll just log the drawing
    console.log(drawing);
  }

  return (
    <div id="sketchPadContainer">
      <h2>Sketch Pad</h2>
      <textarea 
        value={drawing} 
        onChange={handleDrawingChange} 
        placeholder="Please draw here..."
      />
      <button onClick={generateCode}>Generate Code</button>
    </div>
  );
}

export default SketchPad;