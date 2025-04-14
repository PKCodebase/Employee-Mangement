import React from 'react';
import './App.css'; 
import Header from './pages/header/Header';
import { Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import { Routes } from 'react-router-dom';



const App = () =>{
    
    return(
        <div>
       <Header/>
       <Routes>
        <Route path='/' element={<Dashboard/>}/>
       </Routes>
       </div>
    )
}



export default App; 
