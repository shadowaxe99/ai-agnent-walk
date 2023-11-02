const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
app.use(express.json());

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    // Process the message received from the user
      
    // Generate the code for the website based on the user's drawing
    const generatedCode = generateCodeFromDrawing(message);

    // Send the generated code back to the user
    ws.send(generatedCode);
  });
});

// Function to generate the code for the website based on the user's drawing
const generateCodeFromDrawing = (drawing) => {
  // Implement your code generation logic here

  // Return the generated code
  return generatedCode;
};

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});

module.exports = {
  app,
  wss,
};