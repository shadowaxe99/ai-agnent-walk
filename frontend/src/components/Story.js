import React from 'react';

class SketchPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawing: false,
      coordinates: []
    };
  }

  handleMouseDown = (event) => {
    this.setState({
      drawing: true,
      coordinates: [...this.state.coordinates, { x: event.clientX, y: event.clientY }]
    });
  }

  handleMouseMove = (event) => {
    if (this.state.drawing) {
      this.setState({
        coordinates: [...this.state.coordinates, { x: event.clientX, y: event.clientY }]
      });
    }
  }

  handleMouseUp = () => {
    this.setState({
      drawing: false
    });
  }

  render() {
    const { drawing, coordinates } = this.state;

    return (
      <div id="sketchPad" onMouseDown={this.handleMouseDown} onMouseMove={this.handleMouseMove} onMouseUp={this.handleMouseUp}>
        {drawing && <div className="brush" style={{ top: coordinates[coordinates.length - 1].y, left: coordinates[coordinates.length - 1].x }}></div>}
      </div>
    );
  }
}

export default SketchPad;