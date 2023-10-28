```javascript
const aiAgentModel = require('../models/aiAgentModel');
const webSocket = require('../utils/webSocket');

exports.handleUserInput = async (req, res) => {
    try {
        const userInput = req.body.userInput;
        const aiAgent = await aiAgentModel.findById(req.params.id);

        if (!aiAgent) {
            return res.status(404).json({
                status: 'fail',
                message: 'No AI agent found with that ID'
            });
        }

        const aiAgentResponse = aiAgent.processInput(userInput);

        webSocket.send('aiAgentResponse', aiAgentResponse);

        res.status(200).json({
            status: 'success',
            data: {
                aiAgentResponse
            }
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'An error occurred while processing the user input'
        });
    }
};

exports.sendAiAgentResponse = async (req, res) => {
    try {
        const aiAgentResponse = req.body.aiAgentResponse;

        webSocket.send('aiAgentResponse', aiAgentResponse);

        res.status(200).json({
            status: 'success',
            message: 'AI agent response sent successfully'
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'An error occurred while sending the AI agent response'
        });
    }
};
```