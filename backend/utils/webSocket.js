```javascript
const WebSocket = require('ws');
const { handleUserInput, sendAiAgentResponse } = require('../controllers/aiAgentController');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
  ws.on('message', message => {
    const { type, data } = JSON.parse(message);
    if (type === 'userInput') {
      handleUserInput(data, ws);
    }
  });

  ws.on('close', () => {
    console.log('WebSocket connection closed');
  });
});

function sendResponse(ws, type, data) {
  ws.send(JSON.stringify({ type, data }));
}

module.exports = {
  wss,
  sendResponse,
  sendAiAgentResponse
};
```