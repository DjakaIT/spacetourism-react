import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import '../css/crew.css'
import { NavLink } from 'react-router-dom'
import data from "../json/data.json"
import 'aos/dist/aos.css';
import Aos from 'aos';

export default function Crew() {


  const crew = data.crew;
  const[value, setValue] = useState(0);
  const {name, images, role, bio} = crew[value];
  return (
    <div className='crewDiv'>
      <Navbar />
      <div className="crewMainDiv">
        
        <div className="crewTitleDiv">
          <h5 className="crewTitleH5"><b className="numberedCrew">02</b>MEET YOUR CREW</h5>
        </div>

        <div className="crewMemberDiv">
          <h4 className="crewMemberRole">{role}</h4>
          <h3 className="crewMemberName">{name}</h3>
          <p className="crewMemberBio">{bio}</p>
        </div>

        <div className="crewSelectorDiv">
        </div>

        <div className="crewImageDiv">

        </div>

      </div>
    </div>
  )
}
