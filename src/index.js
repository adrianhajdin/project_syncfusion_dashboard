import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
