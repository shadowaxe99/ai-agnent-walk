import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

const Analytics = () => {
  useEffect(() => {
    ReactGA.initialize('UA-000000-01'); // Replace with your Google Analytics tracking ID
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return null;
};

export const trackUserEngagement = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label
  });
};

export const trackQuizPerformance = (category, action, value) => {
  ReactGA.event({
    category: category,
    action: action,
    value: value
  });
};

export const trackLiveDemoInteraction = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label
  });
};

export default Analytics;