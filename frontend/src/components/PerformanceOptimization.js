import React, { lazy, Suspense } from 'react';

// Lazy load components
const Exploration = lazy(() => import('./Exploration'));
const Quiz = lazy(() => import('./Quiz'));
const LiveDemo = lazy(() => import('./LiveDemo'));
const Glossary = lazy(() => import('./Glossary'));
const Resources = lazy(() => import('./Resources'));
const Feedback = lazy(() => import('./Feedback'));

const PerformanceOptimization = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading Exploration...</div>}>
        <Exploration />
      </Suspense>
      <Suspense fallback={<div>Loading Quiz...</div>}>
        <Quiz />
      </Suspense>
      <Suspense fallback={<div>Loading Live Demo...</div>}>
        <LiveDemo />
      </Suspense>
      <Suspense fallback={<div>Loading Glossary...</div>}>
        <Glossary />
      </Suspense>
      <Suspense fallback={<div>Loading Resources...</div>}>
        <Resources />
      </Suspense>
      <Suspense fallback={<div>Loading Feedback...</div>}>
        <Feedback />
      </Suspense>
    </div>
  );
};

export default PerformanceOptimization;