import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import '../css/technology.css';
import data from "../json/data.json"
import 'aos/dist/aos.css';
import Aos from 'aos';

export default function Technology() {

  useEffect(() => {
    Aos.init();
  })


  const tech = data.technology;
  const[value, setValue] = useState(0);
  const { name, images, description } = tech[value];

  const handleTechOnClick = (index) => {
    setValue(index);
  }

  const getIndexText = (index) => {
    return (index + 1).toString();
  }


  return (
    <div className='techDiv'>
      <Navbar />

      <div className="techOverlayDiv">
        <div className="techTitleDiv">
              <b className="numberedTech">03</b>
              <h5 className="techTitleH5">SPACE LAUNCH 101</h5>
        </div>
        <div className="mainTechDiv">
        
          <div className="buttonDiv">
            {tech.map((item, index) => (
              <button
                className={`techButton ${value === index ? 'active' : ''}`}
                key={index}
                onClick={() => handleTechOnClick(index)}
              >
                {getIndexText(index)}
              </button>
            ))}
        
          </div>
          <div className="descriptionDiv">
              <h5 className="terminology">
                The Terminology..
              </h5>
              <h3 className="chosenTech">
                {name}
              </h3>
              <p className="techDescription">
                {description}
              </p>
          </div>
          <div className="imageDiv">
              <img src={images.portrait} alt={name} className="techImg" />
          </div>
        
        </div>
      </div>

    </div>
  )
}
