import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Exploration from './Exploration';
import Quiz from './Quiz';
import LiveDemo from './LiveDemo';
import Glossary from './Glossary';
import Resources from './Resources';
import Feedback from './Feedback';

describe('Exploration Component', () => {
  it('renders without crashing', () => {
    render(<Exploration />);
  });

  // Add more tests as needed
});

describe('Quiz Component', () => {
  it('renders without crashing', () => {
    render(<Quiz />);
  });

  // Add more tests as needed
});

describe('LiveDemo Component', () => {
  it('renders without crashing', () => {
    render(<LiveDemo />);
  });

  // Add more tests as needed
});

describe('Glossary Component', () => {
  it('renders without crashing', () => {
    render(<Glossary />);
  });

  // Add more tests as needed
});

describe('Resources Component', () => {
  it('renders without crashing', () => {
    render(<Resources />);
  });

  // Add more tests as needed
});

describe('Feedback Component', () => {
  it('renders without crashing', () => {
    render(<Feedback />);
  });

  // Add more tests as needed
});