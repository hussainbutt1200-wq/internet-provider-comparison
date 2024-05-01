import React, { useState } from 'react';
import style from '../projects/projects.module.css'


  const projectData = [ 
    {
      projectImage: "../projects/pitchDeck.png",
      projectHeading: "Featured Project",
      projectName: "Pitch Deck",
      smallDiscription: "Unveil the future in a web project seamlessly intertwining artificial intelligence, Web 3.0, gaming tech, and next-level entertainment, inviting you into a boundless digital realm.",
      techUse: "JavaScript    Svelte JS    HTML/CSS    Gsap-Animation",
      projectLink: "https://pitchdeck.opus.ai/",
    },
    {
      projectImage: "../projects/commoncoin.png",
      projectHeading: "Featured Project",
      projectName: "Common Coin",
      smallDiscription: "Embark on a visual journey into the future of finance with CommonCoin's website, a digital currency hub designed to redefine the future of finance through innovation and accessibility.",
      techUse: "JavaScript    Svelte JS    HTML/CSS",
      projectLink: "https://commoncoin.club/",
    },
    {
      projectImage: "../projects/abdullahQ.png",
      projectHeading: "Featured Project",
      projectName: "ABDULLAH Q",
      smallDiscription: "A futuristic portfolio merging futuristic animations, artificial intelligence  and smart tech, elevating the boundless creativity of a visionary artist.",
      techUse: "React Js   Redux    JavaScript    Axios    HTML/CSS",
      projectLink: "https://aq-design.vercel.app/",
    },
  ]
  function Projects() {
    const [isLinkHover, setisLinkHover] = useState(Array(projectData.length).fill(false));
  
    const handleLinkHover = (index, isHovered) => {
      const newHoverState = [...isLinkHover];
      newHoverState[index] = isHovered;
      setisLinkHover(newHoverState);
    };
  return (
    <div className={style.mainDiv}>
      <div className={style.headingDiv}>
        <div className={style.headingText}>
          <p>
            <span>
              03.
            </span>
            Some Things I’ve Built
          </p>
        </div>
        <div className={style.headingLine}></div>
      </div>
    {projectData.map((data, index)=>(
      <div className={style.projectMainDiv}
      key={index}
      >
        <a 
        href={data.projectLink}
        target='__blank'
        >
          <div
          className = {`  ${index % 2 === 0 ? style.imageDiv : style.imageDivOdd}`}
          >
              <img 
              alt='thumbnail_image'
              src={data.projectImage}
              width={"100%"}
              height={"100%"}
              style={{objectFit: 'cover'}}
              />
          </div>
        </a>
        
        <div 
        className = {`  ${index % 2 === 0 ? style.projectDetails : style.projectDetailsOdd}`}>
          <div 
          className = {`  ${index % 2 === 0 ? style.projectHeadingMainDiv : style.projectHeadingMainDivOdd}`}>
            <p className={style.projectHeading}>
            {data.projectHeading}
            </p>
          </div>
          <a 
          key={index}
          href={data.projectLink}
          target='__blank'
          >
            <div 
            className={`${index % 2 === 0 ? style.projectNameMainDiv : style.projectNameMainDivOdd}`}
            >
              <p className={style.projectName}>
                {data.projectName}
              </p>
            </div>
          </a>
          
          <div
          className={`${index % 2 === 0 ? style.projectDicriptionMainDiv : style.projectDicriptionMainDivOdd}`}
          >
            <p>
              {data.smallDiscription}
            </p>
          </div>
          <div
             className={`${index % 2 === 0 ? style.techMaindDiv : style.techMaindDivOdd}`}
          >
            <pre>
              {data.techUse}
            </pre>
          </div>
          <a
            href={data.projectLink}
            target='__blank'
          >
            <div
              className={`${index % 2 === 0 ? style.projectLinkMainDiv : style.projectLinkMainDivOdd}`}
              onMouseEnter={() => handleLinkHover(index, true)}
              onMouseLeave={() => handleLinkHover(index, false)}
            >
              <svg width="1.007vw" height="1.007vw" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5002 4.24992H4.25016C3.60922 4.24992 2.99453 4.50453 2.54132 4.95774C2.08811 5.41096 1.8335 6.02564 1.8335 6.66658V18.7499C1.8335 19.3909 2.08811 20.0055 2.54132 20.4588C2.99453 20.912 3.60922 21.1666 4.25016 21.1666H16.3335C16.9744 21.1666 17.5891 20.912 18.0423 20.4588C18.4955 20.0055 18.7502 19.3909 18.7502 18.7499V11.4999M10.2918 12.7083L21.1668 1.83325M21.1668 1.83325H15.1252M21.1668 1.83325V7.87492" stroke={isLinkHover[index] ? `#8c8989` : `#A4AFCE`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </a>
        </div>

      </div>
    ))}
      



    </div>
  )
}

export default Projects
