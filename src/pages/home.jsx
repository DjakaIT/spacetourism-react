import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/home.css'
import Navbar from '../components/Navbar'
import 'aos/dist/aos.css';
import Aos from 'aos'
export default function Home() {

    useEffect(() => {
        Aos.init();
    })

  return(
    <div className="homeDiv">
        <Navbar />                                                                                                                                                                                                                                                                                                                                                                                          
            <div className="overlay-container" >
                <section className='home-text-container' data-aos="fade-right"  data-aos-duration="1500">
                    <h5>So, you want to travel to</h5>
                    <h1>Space</h1>
                    <p className="description">
                    Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                    </p>
                </section>
                <section className="explore-btn-container" data-aos="zoom-in-left"  data-aos-duration="1500">
                    <div className="explore-btn-bg" >  
                            <Link to="destination"><button className="explore-btn" >Explore</button></Link>
                    </div>                    
                </section>
            </div>
    </div>
  
)
  
  
}


 



