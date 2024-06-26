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
  const [value, setValue] = useState(0);
  const { name, images, description } = tech[value];

  const handleTechOnClick = (index) => {
    setValue(index);
  }

  const getIndexText = (index) => {
    return (index + 1).toString();
  }

  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", function () {
      setWindowSize(window.innerWidth);
    });
  }, []);

  return (
    <div className='techDiv'>
      <Navbar />

      <div className="techOverlayDiv">
        <div className="techTitleDiv" data-aos="fade-left" data-aos-duration="1500">
          <b className="numberedTech">03</b>
          <h5 className="techTitleH5">SPACE LAUNCH 101</h5>
        </div>
        <div className="mainTechDiv">

          <div className="buttonDiv" data-aos="fade-left" data-aos-duration="1500">
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
          <div className="descriptionDiv" data-aos="fade-right" data-aos-duration="1500">
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
          <div className="imageDiv" data-aos="fade-left" data-aos-duration="1500">
            <img
            src={windowSize > 980 ? images.portrait : images.landscape}
            alt={name}
            className={`techImg ${windowSize > 980 ? 'portrait' : 'landscape'}`}
            />
          </div>

        </div>
      </div>

    </div>
  )
}
