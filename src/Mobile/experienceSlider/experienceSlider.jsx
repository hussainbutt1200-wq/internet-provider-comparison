import React, { useState } from 'react';
import style from '../experienceSlider/experienceSlider.module.css';

function ExperienceSlider() {
  const experienceData = [
    {
      name: "Opus AI",
      websiteLink: "https://opus.ai",
      designation: "Associate Software Engineer ",
      time: "Jun / 2022 - Present · 1 yr 10 months, ",
      location: "Lahore Pakistan",
      listPoints: [{
        point: "I am currently serving as an Associate Software Engineer, specializing in frontend development",
      },
      {
        point:"I have worked on both web and mobile development projects",
      },
      {
        point: "Leading a Front-end team, providing guidance and collaboration with juniors",
      },{
        point: "I am excited about working on diverse and complicated projects to challenge my self and contributing my skills.",
      }
      ,{
        point: "Developed and implemented RESTful APIs with Svelte.js, enhancing data exchange and system interoperability.",
      },{
        point: "This exposure has equipped me with a deep understanding of the mechanics behind large-scale projects",
      }]
    },{
      name: "Leilani Inc",
      websiteLink: "https://www.linkedin.com/company/leilani-inc/",
      designation: "Frontend Developer",
      time: "Dec / 2021 - May / 2022, ",
      location: " Lahore Pakistan",
      listPoints: [{
        point: "Actively contributed to Frontend Development",
      },
      {
        point: "Engaged in front-end development using React.js, enhancing user interfaces for optimal experiences.",
      },
      {
        point: "Gained hands-on experience with React, JavaScript, Tailwind, Bootstrap, Pure css",
      },]
    },
];
const [selectedItemId, setSelectedItemId] = useState(0);

const handleItemClick = (itemId) => {
  setSelectedItemId(itemId);
};

  return (
    <div className={style.mainDiv}>
      <div className={style.headingDiv}>
        <div className={style.headingText}>
          <p>
            <span>
              02.
            </span>
            Where I’ve Worked
          </p>
        </div>
        <div className={style.headingLine}></div>
      </div>





      <div className={style.sliderDiv}>
      <div className={style.CompanyNameDiv}>
        <div className={style.smallMoveableLine} 
        style={{left:`${28.6 * selectedItemId}vw`}}
        />
          {experienceData.map((item, index) => (
                <div onClick={() => handleItemClick(index)}
                className={`  ${selectedItemId === index ? style.companyNameActive : style.companyName}`}
                >
                  <p 
                  key={index} 
                  >
                    {item.name}
                  </p>
                </div>
              ))}
      </div>

      <div 
      className={style.companyDetailDiv} >
        <div className={style.designationText}>
          <p>
            {experienceData[selectedItemId].designation}
            <a 
            href={experienceData[selectedItemId].websiteLink}
            target='__blank'
            >
            <span>
              @
              {experienceData[selectedItemId].name}              
            </span>
            </a>
            
          </p>
        </div>
        <div className={style.durationDiv}>
          <p>
            {experienceData[selectedItemId].time}
            <span>
              {experienceData[selectedItemId].location}
            </span>
          </p>          
        </div>
        <div className={style.discriptionDiv}>
          <ul>
              {experienceData[selectedItemId].listPoints.map((points, index) => (
                <li key={index}>
                  {points.point}
                </li>
              ))}
          </ul>
        </div>
      </div>      
    </div>





    </div>
  )
}

export default ExperienceSlider
