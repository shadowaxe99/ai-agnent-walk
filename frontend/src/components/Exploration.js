import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Exploration = () => {
    const [explorationData, setExplorationData] = useState(null);

    useEffect(() => {
        const fetchExplorationData = async () => {
            try {
                const response = await axios.get('/api/exploration');
                setExplorationData(response.data);
            } catch (error) {
                console.error('Error fetching exploration data:', error);
            }
        };

        fetchExplorationData();
    }, []);

    const startExploration = () => {
        // Logic to start the exploration goes here
    };

    return (
        <div id="explorationContainer">
            <h1>AI Unveiled: An Interactive Exploration</h1>
            {explorationData ? (
                <div>
                    <h2>{explorationData.title}</h2>
                    <p>{explorationData.description}</p>
                    <button onClick={startExploration}>Start Exploration</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Exploration;