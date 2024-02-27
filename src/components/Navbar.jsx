import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../css/navbar.css';

export default function Navbar() {
  return (
    <div className='navbarDiv'>
      <nav className="navbar">
        <img src="public/assets/logo_48x48.png" alt="starry logo for navbar" className='navbar-logo' />
        <div className='navbar-dash'></div>
        <ul className="navbarList">
          <li className="navbarList-item">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}
            >
              <b>00</b> HOME
            </NavLink>
          </li>
          <li className="navbarList-item">
            <NavLink
              to="/destination"
              className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}
            >
              <b>01</b> DESTINATION
            </NavLink>
          </li>
          <li className="navbarList-item">
            <NavLink
              to="/crew"
              className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}
            >
              <b>02</b> CREW
            </NavLink>
          </li>
          <li className="navbarList-item">
            <NavLink
              to="/technology"
              className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}
            >
              <b>03</b> TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
