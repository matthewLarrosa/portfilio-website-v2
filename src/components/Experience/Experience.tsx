import React from 'react'
import "./Experience.css";
import AMEX from "/src/assets/CompanyHeaders/AMEX.svg"
import ExperienceTitle from "/src/assets/TitleHeaders/ExperienceTitle.svg"

function Experience() {
  return (
    <div className='expContainer'>
        <div className='expItemsContainer'>
            <div>
                <img src={ExperienceTitle} alt="" />  
            </div>
            <div>
                <img src={AMEX} alt="" />
            </div>

        </div>
    </div>
  )
}

export default Experience