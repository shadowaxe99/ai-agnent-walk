import React, { useState } from 'react';

const FutureEnhancements = () => {
    const [feedback, setFeedback] = useState('');

    const handleFeedbackChange = (event) => {
        setFeedback(event.target.value);
    }

    const submitFeedback = () => {
        // Here we would typically send the feedback to a server
        // For the purpose of this demo, we'll just clear the feedback field
        setFeedback('');
        alert('Thank you for your feedback!');
    }

    return (
        <div id="feedbackContainer">
            <h2>Future Enhancements</h2>
            <p>We are always looking to improve our interactive exploration. Please provide your feedback and suggestions below:</p>
            <textarea value={feedback} onChange={handleFeedbackChange} />
            <button onClick={submitFeedback}>Submit Feedback</button>
        </div>
    );
}

export default FutureEnhancements;