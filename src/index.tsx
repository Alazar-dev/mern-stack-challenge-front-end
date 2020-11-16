import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AddEmployee from './components/AddEmployee';
import Main from './components/styles/app'

ReactDOM.render(
  <React.StrictMode>
    <Main>
      <App />
      <AddEmployee />
    </Main>
    </React.StrictMode>,
  
  document.getElementById('root')
);


reportWebVitals();
