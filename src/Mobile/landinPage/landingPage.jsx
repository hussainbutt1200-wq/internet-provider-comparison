import React, { useState, useEffect } from 'react';
import { animated, useSpring } from '@react-spring/web';
import style from '../landinPage/landingPage.module.css';
import Aboutme from '../aboutMe/aboutMeMobile.jsx';
import ExperienceSlider from '../experienceSlider/experienceSlider.jsx';
import Projects from '../projects/projects.jsx';
import ContactUs from '../contactUs/contactUs.jsx';
import Navbar from '../navbar/navbar';

function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollInVh, setScrollInVh] = useState(0);
  const [section1, setsection1] = useState(false);
  const [section2, setsection2] = useState(false);
  const [section3, setsection3] = useState(false);
  const [section4, setsection4] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    // Clean up the timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, []);

  const fadeIn = useSpring({
    opacity: isVisible ? 1 : 0,
    config: { duration: 300},
  });

  const scroll = () => {
    const myDiv = document.getElementById("mainDivMobile");
    const scrollY = myDiv.scrollTop;
    const viewportHeight = window.innerHeight;
    const scrollXInViewWidth =
      (scrollY / (myDiv.scrollHeight - viewportHeight)) * 100;
    setScrollInVh(scrollXInViewWidth); 
    if(scrollInVh > 3 && scrollInVh < 10) {
      setsection1(true);
    } else if(scrollInVh > 33 && scrollInVh < 38) {
      setsection2(true);
    }else if(scrollInVh > 51 && scrollInVh < 53) {
      setsection3(true);
    }else if(scrollInVh > 94 && scrollInVh < 99) {
      setsection4(true);
    }
  };



  console.log("scrollInVh", scrollInVh);
  return (
    <div className={style.mainDiv}
    id='mainDivMobile'
    onScroll={scroll}
    >
      <animated.div style={fadeIn}>
        <Navbar/>
      </animated.div>
      <div className={style.introDiv}>
        <div className = {style.introDivContainer}
          >
            <div className={style.introNameText}>
              <p className={isVisible ? `${style.introText1}` : `${style.introText1Before}`}>
                Hi, my name is
              </p>
              <p className={isVisible ? `${style.introText2}` : `${style.introText2Before}`}>
              Ashar Khan
              </p>
              <p className={isVisible ? `${style.introText3}` : `${style.introText3Before}`}>
              I specialize in crafting creative and high-performance web/mobile applications with a focus on AI and Blockchain.
              </p>
              <p className={isVisible ? `${style.introText4}` : `${style.introText4Before}`}>
              I'm a tech enthusiast skilled in crafting elegant user interfaces and architecting robust back-end systems. Proficient in optimizing databases and well-versed in data science technologies, my commitment is to deliver seamless, end-to-end digital solutions for an unparalleled user experience
              </p>
            </div>
          </div>
      </div>
      <div className={section1 ? `${style.AboutmePageAfter}` : `${style.AboutmePage}`}
      id='aboutMeMobile'
      >
        <Aboutme />
      </div>
      <div 
      className={section2 ? `${style.experienceSliderPageAfter}` : `${style.experienceSliderPage}`}
      id='experienceSliderMobile'
      >
        <ExperienceSlider />
      </div>

      <div 
      className={section3 ? `${style.projectPageAfter}` : `${style.projectPage}`}
       id='projectsMobile'
      >
        <Projects />
      </div>
      <div
      className={section4 ? `${style.contactUsPageAfter}` : `${style.contactUsPage}`}
      id='contactUsMobile'
      >
        <ContactUs />
      </div>

    </div>
  )
}

export default LandingPage
