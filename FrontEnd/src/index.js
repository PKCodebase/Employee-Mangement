import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('myroot')); // Use createRoot
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <App /> 
   </BrowserRouter>
  </React.StrictMode>
)