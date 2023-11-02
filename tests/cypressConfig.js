const sketchPad = {
  canvas: null,
  context: null,
  isDrawing: false,
  lastX: 0,
  lastY: 0,
  colors: [],
  code: "",
  
  init: function() {
    this.canvas = document.querySelector("#sketch-pad");
    this.context = this.canvas.getContext("2d");
    this.canvas.addEventListener("mousedown", this.startDrawing.bind(this));
    this.canvas.addEventListener("mousemove", this.draw.bind(this));
    this.canvas.addEventListener("mouseup", this.stopDrawing.bind(this));
    this.canvas.addEventListener("mouseout", this.stopDrawing.bind(this));
  },
  
  startDrawing: function(e) {
    this.isDrawing = true;
    this.lastX = e.offsetX;
    this.lastY = e.offsetY;
    this.colors = [];
    this.code = "";
  },
  
  draw: function(e) {
    if (!this.isDrawing) return;
    const x = e.offsetX;
    const y = e.offsetY;
    this.drawOnCanvas(x, y);
    this.buildCode(x, y);
  },
  
  stopDrawing: function() {
    this.isDrawing = false;
    console.log(this.code); // Print the generated code
  },
  
  drawOnCanvas: function(x, y) {
    this.context.beginPath();
    this.context.moveTo(this.lastX, this.lastY);
    this.context.lineTo(x, y);
    this.context.stroke();
    this.lastX = x;
    this.lastY = y;
  },
  
  buildCode: function(x, y) {
    const color = this.getColor(x, y);
    if (color) {
      if (!this.colors.includes(color)) {
        this.colors.push(color);
        this.code += `<div style="background-color: ${color}; width: 100px; height: 100px;"></div>\n`;
      }
    }
  },
  
  getColor: function(x, y) {
    const imageData = this.context.getImageData(x, y, 1, 1).data;
    if (imageData[3] === 0) return null;
    const [r, g, b] = imageData;
    return `rgb(${r}, ${g}, ${b})`;
  }
};

window.onload = function() {
  sketchPad.init();
};