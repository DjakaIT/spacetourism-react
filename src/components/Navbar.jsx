import React from 'react'
import '../css/navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbarDiv'>
       <nav className="navbar">
        	<img src="public/assets/logo_48x48.png" alt="starry logo for navbar"  className='navbar-logo'/>
          <div className='navbar-dash'></div>
          <ul className="navbarList">
            <li className="navbarList-item"><Link to="/" className='navbar-link'><b>00</b> HOME</Link></li>
            <li className="navbarList-item"><Link to="/destination" className='navbar-link'><b>01</b> DESTINATION</Link></li>
            <li className="navbarList-item"><Link to="/crew" className='navbar-link'><b>02</b> CREW</Link></li>
            <li className="navbarList-item"><Link to="/technology" className='navbar-link'><b>03</b> TECHNOLOGY</Link></li>
          </ul>
       </nav>
    </div>
  )
}


