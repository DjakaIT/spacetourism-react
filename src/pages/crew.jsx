import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import '../css/crew.css'
import { NavLink } from 'react-router-dom'
import data from "../json/data.json"
import 'aos/dist/aos.css';
import Aos from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';


export default function Crew() {


  const crew = data.crew;
  const[value, setValue] = useState(0);
  const {name, images, role, bio} = crew[value];

const handlMemberOnClick = (index) => {
  setValue(index);
}

  return (
    <div className='crewDiv'>
      <Navbar />
      <div className="crewMainDiv">

        <div className="crewTextDiv">

          <div className="crewTitleDiv">
            <b className="numberedCrew">02</b>
            <h5 className="crewTitleH5">MEET YOUR CREW</h5>
          </div>

          <div className="crewMemberDiv">
            <h4 className="crewMemberRole">{role}</h4>
            <h3 className="crewMemberName">{name}</h3>
            <p className="crewMemberBio">{bio}</p>
          </div>

          <div className="crewSelectorDiv">
           {crew.map((item, index) => (
              <FontAwesomeIcon 
                icon={faCircle} 
                className={`crewMemberSelector ${value === index ? 'active' : ''}`}
                key={index}
                onClick={() => handlMemberOnClick(index) }
                />

           ))}
          </div>

        </div>

        <div className="crewImageDiv">
            <img src={images.png} alt={name} />
        </div>

      </div>

    </div>
  )
}
