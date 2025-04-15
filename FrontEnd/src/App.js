import React from 'react';
import './App.css'; 
import Header from './pages/header/Header';
import { Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import { Routes } from 'react-router-dom';
import Nomatch from './pages/nomatch/Nomatch';
import PostUser from './pages/Employee/PostUser';
import UpdateUser from './pages/Employee/UpdateUser';



const App = () =>{
    
    return(
        <div>
       <Header/>
       <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/employee' element={<PostUser/>}/>
        <Route path='/employee/:id' element={<UpdateUser/>}/>
        <Route path='*' element={<Nomatch/>}/>
       </Routes>
       </div>
    )
}



export default App; 
