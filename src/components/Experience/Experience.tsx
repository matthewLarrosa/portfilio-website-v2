import React from 'react'
import "./Experience.css";
import AMEX from "/src/assets/CompanyHeaders/AMEX.svg"
import Group from "/src/assets/group.png"
import ExperienceTitle from "/src/assets/TitleHeaders/ExperienceTitle.svg"

function Experience() {
  return (
    <div className='expContainer'>
      <div className='experiences'>
        <img className='experienceTitle' src={ExperienceTitle} alt="experienceTitle" />  
        <img className='amexHeader' src={AMEX} alt="american express logo"/>
        <img className='amexGroup' src={Group} alt="american express group picture"/>
      </div>
      <div className='upcomingExperiences'>

      </div>
    </div>
  )
}

export default Experience