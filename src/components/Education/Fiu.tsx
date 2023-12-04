import React, { useState, useEffect } from "react";
import "./Fiu.css";
import Education from "/src/assets/TitleHeaders/EducationTitle.svg";
import FiuTitleDesktop from "/src/assets/TitleHeaders/fiuLogoHeaderDesktop.svg";
import FiuHeader from "/src/assets/TitleHeaders/fiuLogoHeader.svg";
import init from "/src/assets/init.png";
import btt from "/src/assets/btt.svg";
import hackathon from "/src/assets/shgroup.jpg";

function Fiu() {
  const [imgSrc, setImgSrc] = useState(FiuHeader); // Set initial source for mobile

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setImgSrc(FiuHeader);
      }
      if(window.innerWidth > 601 && window.innerWidth < 800)
      {
        setImgSrc(FiuTitleDesktop);
      }
      if(window.innerWidth > 800 && window.innerWidth < 1199)
      {
        setImgSrc(FiuHeader);
      }
      if(window.innerWidth >= 1200)
      {
        setImgSrc(FiuTitleDesktop);
      }
    };

    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="secContainer">
      <div className="educationContainer">
        <div className="cont1">
          <img
            className="educationTitle"
            src={Education}
            alt="educationTitle"
          />
          <img className="fiuHeader" src={imgSrc} alt="FIU header" />
          <p className="educationDescription">
            Currently a senior at FIU, pursuing a Bachelor of Science in
            Computer Science. Throughout my college journey, I have actively
            participated in several organizations, with a primary focus on two
            key ones: BreakThroughTech MIA and INIT. In my involvement with
            BreakThroughTech, I successfully completed their development
            workshops and the 2023 internship program. Moreover, my
            accomplishments with INIT include being recognized as a 2023
            ShellHacks Winner for the Statefarm Challenge.
          </p>
          <div className="orgContainer">
            <img className="init" src={init} alt="init logo" />
            <img className="breakThroughTech" src={btt} alt="btt logo" />
          </div>
        </div>
        <div className="cont2">
          <div className="shellhacksContainer">
            <img
              className="shellhacksPicture"
              src={hackathon}
              alt="hackathon picture"
            />
            <p className="shellhacks2023">- ShellHacks 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fiu;
