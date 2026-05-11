// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BrainChain title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BrainChain/i);
    expect(titleElement).toBeInTheDocument();
});
