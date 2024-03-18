import React, { useEffect, useState } from 'react';
import Grain from '../../assets/Grain.png';
import DesktopGrain from '../../assets/DesktopGrain.webp';
import Navbar from "../Header/Navbar.jsx";
import "../Header/Hero.css";

function Hero() {

  const [grainSize, setGrainSize] = useState(Grain);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1000) {
        setGrainSize(DesktopGrain);
      } else {
        setGrainSize(Grain);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="header-container">
      <div className="navbar-index">
        <Navbar />
      </div>
      <div className="title-container">
        <p className="name">Matthew Larrosa</p>
        <div className="title-info">
          <div className="job-title">
            <p>Freelance Full Stack developer</p>
            <p>Based in Miami Florida</p>
          </div>
          <p className="year">2024</p>
        </div>
      </div>
      <div className="moon"><div className="circle"></div></div>
      <div><img className="grain" src={grainSize} alt="grain" />
      </div>
    </div>
  );
}

export default Hero;
