import React from 'react';
import style from '../projects/projects.module.css';

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

      <div className={style.container}>

        {projectData.map((data, index) => (
          <div style={{marginBottom: '30.025vw'}} key={index}>
          <div className={style.projectImage}>
        <a 
        href={data.projectLink}
        target='__blank'
        >
          <img 
          alt='thumbnail_image'
              src={data.projectImage}
              width={"100%"}
              height={"100%"}
              style={{objectFit: 'cover'}}
              />
        </a>
          </div>
          <p className={style.projectHeading}>
            {data.projectHeading}
          </p>
          <a 
        href={data.projectLink}
        target='__blank'
        >
          <p className={style.projectName}>
            {data.projectName}
          </p>
        </a>
          <div className={style.discriptionDiv}>
            <p className={style.discriptionText}>
            {data.smallDiscription}
            </p>
          </div>
          <pre>
          {data.techUse}
          </pre>
          <a 
        href={data.projectLink}
        target='__blank'
        >
          <div className={style.gitSvg}>
            <svg width="5.623vw" height="6.064vw" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.3337 4.16715H4.08366C3.44272 4.16715 2.82803 4.42177 2.37482 4.87498C1.9216 5.32819 1.66699 5.94288 1.66699 6.58382V18.6672C1.66699 19.3081 1.9216 19.9228 2.37482 20.376C2.82803 20.8292 3.44272 21.0838 4.08366 21.0838H16.167C16.8079 21.0838 17.4226 20.8292 17.8758 20.376C18.329 19.9228 18.5837 19.3081 18.5837 18.6672V11.4172M10.1253 12.6255L21.0003 1.75049M21.0003 1.75049H14.9587M21.0003 1.75049V7.79215" stroke="#CCD6F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </div>
          </a>
        </div>
        ))}
        
      </div>
    </div>
  )
}

export default Projects
