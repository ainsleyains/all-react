import React from 'react';
import ReactDOM from 'react-dom/client';
import StarsRating from './components/StarsRating';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <StarsRating maxRating={5} />
        <StarsRating maxRating={10} /> */}
        <App />
    </React.StrictMode>
);
