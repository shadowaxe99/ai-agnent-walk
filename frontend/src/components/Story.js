import React from 'react';

class Story extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSection: 0,
            sections: [
                {
                    title: 'Introduction to AI Agents',
                    content: 'AI agents are systems that perceive their environment and take actions to achieve their goals. They can be as simple as a thermostat or as complex as a self-driving car.'
                },
                {
                    title: 'History of AI Agents',
                    content: 'The concept of AI agents dates back to the early days of computer science. Alan Turing, often considered the father of AI, proposed the idea of machines that could mimic human intelligence.'
                },
                {
                    title: 'Working Mechanism of AI Agents',
                    content: 'AI agents work by perceiving their environment through sensors, processing the information, and then acting on it. The processing step often involves machine learning algorithms.'
                },
                {
                    title: 'Real-world Applications of AI Agents',
                    content: 'AI agents are used in a wide range of applications, from recommendation systems on e-commerce websites to autonomous vehicles, voice assistants, and more.'
                }
            ]
        };
    }

    nextSection = () => {
        if (this.state.currentSection < this.state.sections.length - 1) {
            this.setState({ currentSection: this.state.currentSection + 1 });
        }
    }

    prevSection = () => {
        if (this.state.currentSection > 0) {
            this.setState({ currentSection: this.state.currentSection - 1 });
        }
    }

    render() {
        const { title, content } = this.state.sections[this.state.currentSection];

        return (
            <div id="explorationContainer">
                <h2>{title}</h2>
                <p>{content}</p>
                <button onClick={this.prevSection} disabled={this.state.currentSection === 0}>Previous</button>
                <button onClick={this.nextSection} disabled={this.state.currentSection === this.state.sections.length - 1}>Next</button>
            </div>
        );
    }
}

export default Story;