import React from 'react'
import '../css/navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navMainDiv'>
       <h2>Navbar</h2>
      <ul className="navbarList">
        <li className="navbarList-item"><Link to="/">00 Home</Link></li>
        <li className="navbarList-item"><Link to="destination">01 DESTINATION</Link></li>
        <li className="navbarList-item"><Link to="crew">02 CREW</Link></li>
        <li className="navbarList-item"><Link to="technology">03 TECHNOLOGY</Link></li>
      </ul>
     
    </div>
  )
}
