import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElem = document.getElementById('root');
const elem = ReactDOM.createRoot(rootElem);

elem.render(<App/>);