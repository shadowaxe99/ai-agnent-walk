import React, { useState } from 'react';

const Feedback = () => {
    const [feedback, setFeedback] = useState('');

    const handleFeedbackChange = (event) => {
        setFeedback(event.target.value);
    }

    const submitFeedback = () => {
        // Here, we would typically send the feedback to the server
        // For the purpose of this demo, we'll just clear the feedback field
        setFeedback('');
        alert('Thank you for your feedback!');
    }

    return (
        <div id="feedbackContainer">
            <h2>Your Feedback</h2>
            <textarea 
                value={feedback} 
                onChange={handleFeedbackChange} 
                placeholder="Please enter your feedback here..."
            />
            <button onClick={submitFeedback}>Submit Feedback</button>
        </div>
    );
}

export default Feedback;