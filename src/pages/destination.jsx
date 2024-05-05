import React, { useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import '../css/destination.css'
import { NavLink } from 'react-router-dom'
import data from "../json/data.json"
import 'aos/dist/aos.css';
import Aos from 'aos'

export default function Destination() {

  useEffect(() => {
    Aos.init();
})

  const destinations = data.destinations;
  const [value, setValue] = useState(0);
  const { name, images, description, distance, travel } = destinations[value];

  return (
    <div className='mainDivDestination'>

      <Navbar />

      <div className='destinationDiv'>

        <div className="pickDestinationDiv" data-aos="fade-left" data-aos-duration="1500">
          <h1 className="pickDestinationH1"><b className="numDestination">01</b>PICK YOUR DESTINATION</h1>
          <img src={images.png} alt={name} title={name} className="planetImg" data-aos="fade-left"  data-aos-duration="1500"/>
        </div>


          <article className="destination-card" data-aos="fade-right" data-aos-duration="1500">
            {destinations.map((item, index) => (
              <NavLink
                key={index}
                className={({isActive}) => (isActive ? 'destination-card-btn active' : 'destination-card-btn')}
                onClick={() => setValue(index)}
              >
                {item.name}
              </NavLink>
            ))}
            <div className="destination-card-itemsBelow">
              <h1 className='destination-card-bigTitle'>{name}</h1>
              <p className='destination-card-description'>{description}</p>
              <div className='divDash'></div>
              <div className="travelDetailsDiv">
                <div className="avgDistDiv">
                  <p className='avgDistanceText'>AVG. DISTANCE</p>
                  <p className='avgDistanceNum'>{distance}</p>
                </div>
                <div className="estTimeDiv">
                  <p className='estTimeText'>EST. TRAVEL TIME</p>
                  <p className='estTimeNum'>{travel}</p>
                </div>
              </div>
            </div>
          </article>

        </div>
      
     


    </div>
  )
}
