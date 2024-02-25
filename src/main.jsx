import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'

// css
import './css/main.css'

// components
import App from './App';
import NotFound from './components/NotFound';
// pages
import Home from '../src/pages/home';
import Crew from './pages/crew';
import Destination from './pages/destination';
import Technology from './pages/technology';

const router = createBrowserRouter([

  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/destination',
    element: <Destination />,
    errorElement: <NotFound />,
  }
    ,
    {
      path: '/crew',
      element: <Crew />,
      errorElement: <NotFound />,
    }
    ,
    {
      path: '/technology',
      element: <Technology />,
      errorElement: <NotFound />,
    }, 
    {
      path: '/not-found',
      element: <NotFound />,
    },
  ]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
