import React from 'react'
import "./Experience.css";
import AMEX from "/src/assets/CompanyHeaders/AMEX.svg"
import Group from "/src/assets/group.png"
import ExperienceTitle from "/src/assets/TitleHeaders/ExperienceTitle.svg"
import UpcomingTitle from "/src/assets/TitleHeaders/UpcomingTitle.svg"

function Experience() {
  return (
    <div className='expContainer'>
      <div className='experiences'>
        <img className='experienceTitle' src={ExperienceTitle} alt="experienceTitle" />  
        <img className='amexHeader' src={AMEX} alt="american express logo"/>
        <img className='amexGroup' src={Group} alt="american express group picture"/>
        <p className='amexDescription'>Month long internship at American Express, tasked with developing a React Module project tracker for Amex scrum teams with convenient features like adding and editing project details, as well as time stamps to track changes. Enhanced the user experience with seamless access to update and monitor project information, including real-time project status and updates.</p>

        <img className='upcomingTitle' src={UpcomingTitle} alt="UpcomingTitle" />
      </div>
    </div>
  )
}

export default Experience