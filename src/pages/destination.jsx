import React, { useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import '../css/destination.css'
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

        <div className="pickDestinationDiv">
          <h1 className="pickDestinationH1"><b className="numDestination">01</b>PICK YOUR DESTINATION</h1>
          <img src={images.png} alt={name} title={name} className="planetImg" data-aos="fade-right"  data-aos-duration="1500"/>
        </div>


          <article className="destination-card" data-aos="zoom-in-left" data-aos-duration="1500">
            {destinations.map((item, index) => (
              <h2
                key={index}
                className='destination-card-btn'
                onClick={() => setValue(index)}
              >
                {item.name}
              </h2>
            ))}
            <div className="destination-card-itemsBelow">
              <h1 className='destination-card-bigTitle'>{name}</h1>
              <p className='destination-card-description'>{description}</p>
            </div>
          </article>

        </div>
      
     


    </div>
  )
}
