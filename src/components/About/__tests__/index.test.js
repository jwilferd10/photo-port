import React from 'react';
// Jest creates a simulated DOM in a Node.js environment to approximate the DOM (no component is actually visibly rendered).
// The cleanup function is used to remove components from the DOM to prevent memory leaking, 
// As well as variable or data collisions between tests that could corrupt test results.
import { render, cleanup } from '@testing-library/react';
// jest-dom offers access to custom matchers that are used to test DOM elements.
import '@testing-library/jest-dom/extend-expect';
import About from '..';

//This will ensure that after each test, we won't have any leftover memory data that could give us false results.
afterEach(cleanup);

// In the first argument, a string declares what is being tested. In the second argument, a callback function runs the test.
describe('About component', () => {
    // Renders About Test
    // First Test
    it('renders', () => {
        render(<About />);
    });
    // Second Test
    it('matches snapshot DOM node structure', () => {
        // Render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})

