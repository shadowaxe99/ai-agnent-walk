import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Exploration from './components/Exploration';
import Quiz from './components/Quiz';
import LiveDemo from './components/LiveDemo';
import Glossary from './components/Glossary';
import Resources from './components/Resources';
import Feedback from './components/Feedback';
import Analytics from './components/Analytics';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/exploration" component={Exploration} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/live-demo" component={LiveDemo} />
        <Route path="/glossary" component={Glossary} />
        <Route path="/resources" component={Resources} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/analytics" component={Analytics} />
        <Route path="/" component={Exploration} />
      </Switch>
    </Router>
  );
}

export default App;