import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import LoginForm from './components/1_Registro/2_Login/LoginForm';
import RecoverPassword from './components/1_Registro/3_RecoverPassword/RecoverPassword';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
      <App/>
      <LoginForm/>
      <RecoverPassword/>
      
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
