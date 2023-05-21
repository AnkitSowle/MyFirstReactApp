// 1) Import React, ReactDOM from react, react-dom/client
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 2) Get the root div element
const element = document.getElementById('root');

// 3) Tell react to take control of this object
const root = ReactDOM.createRoot(element);

// 4) Show it on the screen
root.render(<App/>);