```javascript
const express = require('express');
const router = express.Router();

const aiAgentController = require('./controllers/aiAgentController');
const userSessionController = require('./controllers/userSessionController');
const userProgressController = require('./controllers/userProgressController');

// Routes for AI agent interactions
router.post('/ai-agent/start', aiAgentController.start);
router.post('/ai-agent/interact', aiAgentController.interact);

// Routes for user session management
router.post('/user-session/start', userSessionController.start);
router.get('/user-session/load', userSessionController.load);

// Routes for user progress management
router.post('/user-progress/save', userProgressController.save);
router.get('/user-progress/load', userProgressController.load);

module.exports = router;
```