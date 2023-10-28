```javascript
const WebSocket = require('ws');
const aiAgent = require('../models/aiAgentModel');
const { handleUserInput, sendAiAgentResponse } = require('../controllers/aiAgentController');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
  ws.on('message', message => {
    const userInput = JSON.parse(message);
    if (userInput.type === 'userInput') {
      handleUserInput(userInput, aiAgent, ws);
    }
  });

  ws.on('close', () => {
    console.log('WebSocket connection closed');
  });
});

function handleUserInput(userInput, aiAgent, ws) {
  const aiAgentResponse = aiAgent.processInput(userInput.data);
  sendAiAgentResponse(aiAgentResponse, ws);
}

function sendAiAgentResponse(aiAgentResponse, ws) {
  ws.send(JSON.stringify({
    type: 'aiAgentResponse',
    data: aiAgentResponse
  }));
}

module.exports = wss;
```