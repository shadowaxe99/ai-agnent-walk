Here is the code for building a sketch pad that generates code based on the user's drawing:

```jsx
import React from 'react';

class SketchPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawing: [],
      code: ''
    };
  }

  handleMouseDown = () => {
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseMove = (event) => {
    const { drawing } = this.state;
    const { clientX, clientY } = event;

    drawing.push({ x: clientX, y: clientY });
    this.setState({ drawing });
  }

  handleMouseUp = () => {
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);

    this.generateCode();
  }

  generateCode = () => {
    const { drawing } = this.state;

    let code = '';
    for (let i = 0; i < drawing.length - 1; i++) {
      const start = drawing[i];
      const end = drawing[i + 1];
      code += `<div style="position: absolute; left: ${start.x}px; top: ${start.y}px; width: ${end.x - start.x}px; height: ${end.y - start.y}px;"></div>\n`;
    }

    this.setState({ code });
  }

  render() {
    const { drawing, code } = this.state;

    return (
      <div id="sketchPadContainer">
        <h2>Sketch Pad</h2>
        <div
          id="sketchPad"
          onMouseDown={this.handleMouseDown}
        >
          {drawing.length > 0 && drawing.map((point, index) => (
            <div
              key={index}
              className="point"
              style={{ left: point.x, top: point.y }}
            ></div>
          ))}
        </div>
        <button onClick={this.generateCode}>Generate Code</button>
        <textarea
          value={code}
          readOnly
        ></textarea>
      </div>
    );
  }
}

export default SketchPad;
```

Please note that this code only tracks the user's mouse movements and generates code based on the drawn paths. It does not generate a complete website, frontend, or backend.