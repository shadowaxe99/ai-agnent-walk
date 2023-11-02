```
import React, { useState } from 'react';

const SketchPad = () => {
  const [drawing, setDrawing] = useState([]);
  const [code, setCode] = useState('');

  const handleMouseDown = () => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (event) => {
    setDrawing([...drawing, { x: event.clientX, y: event.clientY }]);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);

    generateCode();
  };

  const generateCode = () => {
    // Process drawing and generate code for frontend and backend
    // Replace this implementation with your own logic

    // Frontend code
    const frontendCode = `
      import React from 'react';

      const App = () => {
        return (
          <div>
            // Drawing HTML elements here based on the drawing data
          </div>
        );
      };

      export default App;
    `;

    // Backend code
    const backendCode = `
      const express = require('express');
      const app = express();

      app.get('/', (req, res) => {
        // Drawing backend logic here based on the drawing data
      });

      app.listen(3000, () => {
        console.log('Server is running on port 3000');
      });
    `;

    setCode(frontendCode + backendCode);
  };

  return (
    <div>
      <div
        style={{ width: '500px', height: '500px', border: '1px solid black' }}
        onMouseDown={handleMouseDown}
      >
        {/* Render drawing here */}
      </div>

      <pre>{code}</pre>
    </div>
  );
};

export default SketchPad;
```