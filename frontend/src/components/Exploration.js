import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SketchPad = () => {
    const [drawing, setDrawing] = useState([]);
    const [isDrawing, setIsDrawing] = useState(false);
    const [generatedCode, setGeneratedCode] = useState(null);

    useEffect(() => {
        const canvas = document.getElementById('sketchPad');
        const context = canvas.getContext('2d');

        const handleMouseDown = ({ offsetX, offsetY }) => {
            setIsDrawing(true);
            setDrawing([{ x: offsetX, y: offsetY }]);
        };

        const handleMouseMove = ({ offsetX, offsetY }) => {
            if (!isDrawing) return;

            const updatedDrawing = [...drawing, { x: offsetX, y: offsetY }];
            setDrawing(updatedDrawing);
            draw(updatedDrawing, context);
        };

        const handleMouseUp = () => {
            setIsDrawing(false);
            generateCode();
        };

        const draw = (drawing, context) => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.lineWidth = 2;
            context.strokeStyle = '#000';

            context.beginPath();
            context.moveTo(drawing[0].x, drawing[0].y);

            drawing.forEach(point => {
                context.lineTo(point.x, point.y);
            });

            context.stroke();
            context.closePath();
        };

        const generateCode = () => {
            // Logic to generate code based on drawing goes here
            const generatedCode = `<!DOCTYPE html>
            <html>
              <head>
                <title>Generated Website</title>
                <style>
                  /* CSS styles based on drawing */
                </style>
              </head>
              <body>
                <!-- HTML structure based on drawing -->
              </body>
            </html>`;

            setGeneratedCode(generatedCode);
        };

        canvas.addEventListener('mousedown', handleMouseDown);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseup', handleMouseUp);

        return () => {
            canvas.removeEventListener('mousedown', handleMouseDown);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseup', handleMouseUp);
        };
    }, [drawing, isDrawing]);

    return (
        <div>
            <canvas id="sketchPad" width={800} height={400} />
            {generatedCode ? (
                <textarea value={generatedCode} readOnly />
            ) : (
                <p>Draw on the sketch pad</p>
            )}
        </div>
    );
};

export default SketchPad;