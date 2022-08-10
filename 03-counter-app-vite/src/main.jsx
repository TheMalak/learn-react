import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './components/HelloWorldApp';
import './style.css';
import {CounterApp} from './components/CounterApp'

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp value={3} />
    </React.StrictMode>
);