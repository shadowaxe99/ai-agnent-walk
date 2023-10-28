import React from 'react';

const Glossary = () => {
    const glossaryItems = [
        { term: 'AI Agent', definition: 'An AI agent is a computer program that is capable of independent action on behalf of its user or owner.' },
        { term: 'Machine Learning', definition: 'Machine Learning is a type of artificial intelligence (AI) that allows software applications to become more accurate in predicting outcomes without being explicitly programmed.' },
        { term: 'TensorFlow', definition: 'TensorFlow is a free and open-source software library for machine learning and artificial intelligence.' },
        // Add more glossary items as needed
    ];

    return (
        <div id="glossaryContainer">
            <h2>Glossary</h2>
            {glossaryItems.map((item, index) => (
                <div key={index}>
                    <h3>{item.term}</h3>
                    <p>{item.definition}</p>
                </div>
            ))}
        </div>
    );
};

export default Glossary;