Shared Dependencies:

1. **Exported Variables**: 
   - `aiAgent`: The AI agent object used across the frontend and backend.
   - `userSession`: The user session object used across the backend.
   - `userProgress`: The user progress object used across the backend.

2. **Data Schemas**: 
   - `aiAgentModel`: The data schema for the AI agent used in the backend.
   - `userSessionModel`: The data schema for user sessions used in the backend.
   - `userProgressModel`: The data schema for user progress used in the backend.

3. **DOM Element IDs**: 
   - `explorationContainer`: The main container for the exploration component.
   - `quizContainer`: The main container for the quiz component.
   - `liveDemoContainer`: The main container for the live demo component.
   - `glossaryContainer`: The main container for the glossary component.
   - `resourcesContainer`: The main container for the resources component.
   - `feedbackContainer`: The main container for the feedback component.

4. **Message Names**: 
   - `aiAgentResponse`: The message name for the AI agent's responses in the WebSocket communication.
   - `userInput`: The message name for the user's inputs in the WebSocket communication.

5. **Function Names**: 
   - `startExploration`: The function to start the exploration in the frontend.
   - `submitQuiz`: The function to submit the quiz in the frontend.
   - `startLiveDemo`: The function to start the live demo in the frontend.
   - `saveUserProgress`: The function to save user progress in the backend.
   - `loadUserSession`: The function to load a user session in the backend.
   - `handleUserInput`: The function to handle user inputs in the backend.
   - `sendAiAgentResponse`: The function to send the AI agent's responses in the backend.
   - `trackUserEngagement`: The function to track user engagement in the analytics.
   - `trackQuizPerformance`: The function to track quiz performance in the analytics.
   - `trackLiveDemoInteraction`: The function to track live demo interaction in the analytics.