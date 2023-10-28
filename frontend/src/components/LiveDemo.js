```javascript
import React, { useEffect, useRef } from 'react';
import { aiAgent } from '../ai/aiAgent';
import { WebSocket } from 'ws';

const LiveDemo = () => {
  const liveDemoContainer = useRef(null);
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:5000');
    ws.current.onopen = () => console.log('ws opened');
    ws.current.onclose = () => console.log('ws closed');

    return () => {
      ws.current.close();
    };
  }, []);

  useEffect(() => {
    if (!ws.current) return;

    ws.current.onmessage = e => {
      const message = JSON.parse(e.data);
      if (message.name === 'aiAgentResponse') {
        displayAiAgentResponse(message.data);
      }
    };
  }, []);

  const handleUserInput = (input) => {
    const message = {
      name: 'userInput',
      data: input
    };
    ws.current.send(JSON.stringify(message));
  };

  const displayAiAgentResponse = (response) => {
    // Display the AI agent's response in the live demo container
    liveDemoContainer.current.innerHTML = response;
  };

  const startLiveDemo = () => {
    // Initialize the AI agent
    aiAgent.initialize();

    // Start the live demo
    handleUserInput('start');
  };

  return (
    <div ref={liveDemoContainer} id="liveDemoContainer">
      <button onClick={startLiveDemo}>Start Live Demo</button>
    </div>
  );
};

export default LiveDemo;
```