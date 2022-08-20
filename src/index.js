import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"

const iframe = document.createElement('iframe');
iframe.setAttribute('allow', 'fullscreen'); // must be 1st
iframe.setAttribute('allowFullScreen', '');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
