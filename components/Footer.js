
import React, { useState } from 'react';

function Footer() {
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (feedback.trim() === '') {
            alert('Feedback cannot be empty.');
            return;
        }
        console.log('Feedback submitted:', feedback);
        // Additional logic for submitting feedback
    };

    return (
        <footer className="bg-gray-800 text-white text-center p-4">
            <form onSubmit={handleSubmit}>
                <label htmlFor="feedback" className="block mb-2">Your Feedback:</label>
                <textarea
                    id="feedback"
                    className="w-full p-2"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    required
                />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Submit
                </button>
            </form>
        </footer>
    );
}

export default Footer;
