import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';

const rootElement = document.getElementById('containerRoot');
const root = createRoot(rootElement);
root.render(<App />);