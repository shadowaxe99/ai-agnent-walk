import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Exploration = React.lazy(() => import('./Exploration'));
const Quiz = React.lazy(() => import('./Quiz'));
const LiveDemo = React.lazy(() => import('./LiveDemo'));
const Glossary = React.lazy(() => import('./Glossary'));
const Resources = React.lazy(() => import('./Resources'));
const Feedback = React.lazy(() => import('./Feedback'));

function CodeSplitting() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/exploration" component={Exploration} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/live-demo" component={LiveDemo} />
        <Route path="/glossary" component={Glossary} />
        <Route path="/resources" component={Resources} />
        <Route path="/feedback" component={Feedback} />
      </Switch>
    </Suspense>
  );
}

export default CodeSplitting;