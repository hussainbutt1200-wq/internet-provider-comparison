import React, { useState } from 'react';
import style from '../aboutMe/aboutMe.module.css'
function AboutMe() {
  const [isImageHovered, setIsImageHovered] = useState(false);
  const handleTwitterHover = (isHovered) => {
    setIsImageHovered(isHovered);
  };
  const animals = ["React js","Next js","Svelte js","Redux", "HTML5, CSS3, RESTful APIs", "Node.js", "Git, GitHub", "Eslint, Jenkins"];
  return (
    <div className={style.maindDiv}>
      <div className={style.headingDiv}>
        <div className={style.headingText}>
          <p>
            <span>
              01.
            </span>
              About Me
          </p>
        </div>
        <div className={style.headingLine}></div>
      </div>

      <div className={style.discriptionDiv}>
        <div className={style.discriptionText}>
          <div className={style.text}>
            <p>
            Greetings! I'm Ashar Khan, a dynamic Software Engineer currently based in the Pakistan, Lahore. 
            </p>
            <br/>
            <p>
            With a robust 3-year journey in professional software development, I've been crafting cutting-edge web applications that blend the realms of Artificial Intelligence and Blockchain. However, my passion extends beyond these realms to include the fascinating landscape of Data Sciences technologies.
            </p>
            <br/>
            <p>
            Beyond the code, I'm always eager to embrace new challenges and continue my learning journey. You can catch a glimpse of my professional journey on my 
            <a href='https:/www.linkedin.com/in/ashar-khan-71703023b/' target='__blank'>
              <span >
                LinkedIn Page
              </span>
            </a>
            
              , and for a more casual interaction, join me on 
              <a href='https://www.instagram.com/___ashar_khanz/?hl=en'
              target='__blank'
              >
                <span >
                  Instagram
                </span>
              </a>
              
               for some fun chit chat. Your suggestions on personal growth are always welcome!
            </p>
            <br>
            </br>
            <p>
            Curious about my skills? I bring expertise in
            </p>
            <div className= {style.skillsetList}>
              <ul className={style.list}>
                {animals.map((animal, index) => (
                  <li className={style.listPoints} key={index} >{animal}</li>
                ))}
              </ul>
            </div>
            <p>
            I'd be thrilled if you take a moment to explore my 
            <a
            href='https://drive.google.com/file/d/1_PotGjJlCcMKgcqItW60-zdtYpbyJqAN/view?usp=sharing'
            target='__blank'
            >
              <span>
                Resume
              </span>
            </a>
            after checking out my portfolio. Looking forward to connecting and bringing my passion for software development to your team!
            </p>
          </div>
        </div>
        <div className={style.discriptionImage} 
        onMouseEnter={() => handleTwitterHover(true)}
        onMouseLeave={() => handleTwitterHover(false)}
        >
            <div className={style.myImage}>
                  <img 
                  alt=''
                  width={'100%'}
                  height={'100%'}
                  src='..\myImage\myImageWhtebg.jpg'
                  style={{objectFit:'cover'}}
                  />
            </div>
            <div
            className={isImageHovered ? `${style.myImageBoxHover}` : `${style.myImageBox}` }
            >
            </div>
        </div>
      </div>

      
    </div>
  )
}

export default AboutMe
