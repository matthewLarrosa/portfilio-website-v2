import React from 'react'
import "./Experience.css";
import AMEX from "/src/assets/CompanyHeaders/AMEX.svg"
import AMEX2 from "/src/assets/CompanyHeaders/AMEX2.svg"
import Google from "/src/assets/CompanyHeaders/Google.svg"
import Break from "/src/assets/CompanyHeaders/Break.svg"
import Group from "/src/assets/TeamPicture.png"
import ExperienceTitle from "/src/assets/TitleHeaders/ExperienceTitle.svg"
import UpcomingTitle from "/src/assets/TitleHeaders/UpcomingTitle.svg"

function Experience() {
  return (
    <div className='sectionContainer'>
      <div className='expContainer'>
        <div className='experiences'>
          <img className='experienceTitle' src={ExperienceTitle} alt="experienceTitle" />  
          <img className='amexHeader' src={AMEX} alt="american express logo"/>
          <img className='amexGroup' src={Group} alt="american express group picture"/>
          <p className='amexDescription'>Month long internship at American Express, tasked with developing a React Module project tracker for Amex scrum teams with convenient features like adding and editing project details, as well as time stamps to track changes. Enhanced the user experience with seamless access to update and monitor project information, including real-time project status and updates.</p>
        </div>
        <div className='upcomingExperiences'>
        <img className='upcomingTitle' src={UpcomingTitle} alt="UpcomingTitle" />
          <img className='googleHeader' src={Google} alt="google title"/>
        
          <div className='googleDescription'>
            <ul className='bullet'>
              <li>Semester-long virtual academic program taught by Googlers and HBCU/HSI faculty</li>
              <li>One-on-one mentorship sessions with Googlers</li>
            </ul>
          </div>

          <img className='breakHeader' src={Break} alt="BreakThroughTech title"/>
          <div className='breakDescription'>
            <ul className='bullet'>
              <li>Full time month long internship at a chosen company partnering with BreakThroughTech</li>
            </ul>
          </div>

          <img className='AMEX2Header' src={AMEX2} alt="Amex title"/>
        
          <div className='AMEX2Description'>
            <ul className='bullet'>
              <li>10 weeks long software engineering internship at AMEX</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience