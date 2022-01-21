import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import App2 from "./App2.js";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>,
  document.getElementById('root2')
);

reportWebVitals();
