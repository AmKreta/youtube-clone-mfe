import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';

export function mount(el) {
    const root = createRoot(el);
    root.render(<App />);
}

if(process.env.NODE_ENV==='development'){
    const rootElement = document.getElementById('recommendationRoot');
    rootElement && mount(rootElement);
}
