import React from 'react';

const Infographics = () => {
    return (
        <div id="infographicsContainer">
            <div className="infographic">
                <h2>What are AI Agents?</h2>
                <img src="/images/ai_agents.png" alt="AI Agents" />
                <p>AI agents are systems that can perceive their environment, reason about it, and take actions to achieve specific goals.</p>
            </div>
            <div className="infographic">
                <h2>History of AI</h2>
                <img src="/images/ai_history.png" alt="History of AI" />
                <p>The field of AI has a long history of advancements, from the early days of rule-based systems to the current era of machine learning and deep learning.</p>
            </div>
            <div className="infographic">
                <h2>How AI Works</h2>
                <img src="/images/ai_works.png" alt="How AI Works" />
                <p>AI works by using algorithms to learn from data, enabling it to make predictions or decisions without being explicitly programmed to perform the task.</p>
            </div>
            <div className="infographic">
                <h2>Applications of AI</h2>
                <img src="/images/ai_applications.png" alt="Applications of AI" />
                <p>AI has a wide range of applications, from autonomous vehicles and healthcare to finance and entertainment.</p>
            </div>
        </div>
    );
}

export default Infographics;