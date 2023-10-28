import React from 'react';

const Documentation = () => {
    return (
        <div id="documentationContainer">
            <h1>Documentation</h1>
            <p>
                This interactive exploration of AI agents is meticulously documented to ensure maintainability. 
                We utilize JSDoc for creating comprehensive code documentation. 
                Below are some key areas of our codebase and their respective documentation.
            </p>
            <ul>
                <li>
                    <a href="/docs/jsDocConfig.js" target="_blank" rel="noopener noreferrer">
                        JSDoc Configuration
                    </a>
                </li>
                <li>
                    <a href="/docs/frontend" target="_blank" rel="noopener noreferrer">
                        Frontend Documentation
                    </a>
                </li>
                <li>
                    <a href="/docs/backend" target="_blank" rel="noopener noreferrer">
                        Backend Documentation
                    </a>
                </li>
                <li>
                    <a href="/docs/ai" target="_blank" rel="noopener noreferrer">
                        AI Agent Documentation
                    </a>
                </li>
                <li>
                    <a href="/docs/tests" target="_blank" rel="noopener noreferrer">
                        Testing Documentation
                    </a>
                </li>
                <li>
                    <a href="/docs/analytics" target="_blank" rel="noopener noreferrer">
                        Analytics Documentation
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Documentation;