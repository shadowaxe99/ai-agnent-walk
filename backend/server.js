```javascript
const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const aiAgentController = require('./controllers/aiAgentController');
const userSessionController = require('./controllers/userSessionController');
const userProgressController = require('./controllers/userProgressController');
const webSocketController = require('./controllers/webSocketController');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.json());

// Routes
app.use('/ai-agent', aiAgentController);
app.use('/user-session', userSessionController);
app.use('/user-progress', userProgressController);

// WebSocket setup
wss.on('connection', webSocketController);

server.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
```