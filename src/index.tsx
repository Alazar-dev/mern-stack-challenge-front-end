import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AddEmployee from './components/AddEmployee';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <AddEmployee />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
