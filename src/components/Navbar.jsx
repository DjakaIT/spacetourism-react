import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../css/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {

  const[showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }



  return (
    <div className='navbarDiv'>
      <nav className="navbar">
        <img src="/assets/logo_48x48.png" alt="starry logo for navbar" className='navbar-logo' />
        <div className='navbar-dash'></div>
          <button className='burger-button' onClick={toggleMenu}>{<FontAwesomeIcon icon={showMenu ? faTimes : faBars}  className='burger-button-icon'/>}</button>
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

      {showMenu && (
        <div className='overlay'> 
          <ul className="overlay-menu">
            <li className="overlay-menu-item"><NavLink to="/">00 HOME</NavLink></li>
            <li className="overlay-menu-item"><NavLink to="/destination">01 DESTINATION</NavLink></li>
            <li className="overlay-menu-item"><NavLink to="/crew">02 CREW</NavLink></li>
            <li className="overlay-menu-item"><NavLink to="/technology">03 TECHNOLOGY</NavLink></li>
          </ul>
        </div>
      )}
      
    </div>
  );
}
