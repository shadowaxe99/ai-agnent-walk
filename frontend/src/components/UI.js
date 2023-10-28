import React from 'react';
import Exploration from './Exploration';
import Quiz from './Quiz';
import LiveDemo from './LiveDemo';
import Glossary from './Glossary';
import Resources from './Resources';
import Feedback from './Feedback';
import Navigation from './Navigation';

const UI = () => {
    return (
        <div>
            <Navigation />
            <div id="explorationContainer">
                <Exploration />
            </div>
            <div id="quizContainer">
                <Quiz />
            </div>
            <div id="liveDemoContainer">
                <LiveDemo />
            </div>
            <div id="glossaryContainer">
                <Glossary />
            </div>
            <div id="resourcesContainer">
                <Resources />
            </div>
            <div id="feedbackContainer">
                <Feedback />
            </div>
        </div>
    );
};

export default UI;