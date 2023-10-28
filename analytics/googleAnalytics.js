```javascript
import ReactGA from 'react-ga';

// Initialize Google Analytics
export const initGA = () => {  
  ReactGA.initialize('UA-000000-01'); // Replace with your Google Analytics tracking ID
}

// Log page views
export const logPageView = () => {  
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

// Log events
export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
}

// Log exceptions
export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
}

// Track user engagement
export const trackUserEngagement = (action) => {
  logEvent('User Engagement', action);
}

// Track quiz performance
export const trackQuizPerformance = (action) => {
  logEvent('Quiz Performance', action);
}

// Track live demo interaction
export const trackLiveDemoInteraction = (action) => {
  logEvent('Live Demo Interaction', action);
}
```