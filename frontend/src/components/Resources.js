import React from 'react';

const Resources = () => {
    const resources = [
        {
            title: 'Introduction to AI',
            link: 'https://www.example.com/introduction-to-ai'
        },
        {
            title: 'AI Agents',
            link: 'https://www.example.com/ai-agents'
        },
        {
            title: 'Real-world Applications of AI',
            link: 'https://www.example.com/real-world-applications-of-ai'
        },
        {
            title: 'AI in Business',
            link: 'https://www.example.com/ai-in-business'
        },
        {
            title: 'AI in Education',
            link: 'https://www.example.com/ai-in-education'
        },
        {
            title: 'AI in Healthcare',
            link: 'https://www.example.com/ai-in-healthcare'
        },
        {
            title: 'AI in Entertainment',
            link: 'https://www.example.com/ai-in-entertainment'
        },
        {
            title: 'AI in Manufacturing',
            link: 'https://www.example.com/ai-in-manufacturing'
        },
        {
            title: 'AI in Transportation',
            link: 'https://www.example.com/ai-in-transportation'
        },
        {
            title: 'AI in Agriculture',
            link: 'https://www.example.com/ai-in-agriculture'
        },
    ];

    return (
        <div id="resourcesContainer">
            <h2>Resources</h2>
            <ul>
                {resources.map((resource, index) => (
                    <li key={index}>
                        <a href={resource.link} target="_blank" rel="noopener noreferrer">
                            {resource.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Resources;