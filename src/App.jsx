import React from 'react';
import { Outlet } from 'react-router-dom';

// components
import Navbar from './components/Navbar';


export default function App(){
  return(
    <div className='App'>
     
      <Outlet />
     </div>
  );
}