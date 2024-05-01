import React, { useState, useEffect } from 'react';
import { shuffle } from 'txt-shuffle'
import style from '../navBar/navbar.module.css'
import { Link } from 'react-router-dom';
function Navbar() {
  const [randomText1, setrandomText1] = useState('');
  const [randomText2, setrandomTex2] = useState('');
  const [randomText3, setrandomText3] = useState('');
  const [randomText4, setrandomTex4] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
    shuffle({
      text: 'About', onUpdate: (output) => {
        setrandomText1(output);
      }
    });
    shuffle({
      text: 'Experience', fps: 20, onUpdate: (output) => {
        setrandomTex2(output);
      }
    });
    shuffle({
      text: 'Projects', fps: 20, onUpdate: (output) => {
        setrandomText3(output);
      }
    });
    shuffle({
      text: 'Contact Me', fps: 20, onUpdate: (output) => {
        setrandomTex4(output);
      }
    });
  }, []);
  const handleClick = (targetId) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className={style.mainDiv}>
      <div className={style.navbarDiv}>

        <div
          className={isVisible ? `${style.aboutTextAfter}` : `${style.aboutText}`}
          onClick={
            handleClick
          }
        >
          <Link to="#" onClick={() => handleClick('aboutMe')}>
            <p
              className={style.text}
            >
              <span
                className={style.numeric}
              >
                01.
              </span>
              {randomText1}
            </p>
          </Link>
        </div>



        <div
          className={isVisible ? `${style.experienceTextAfter}` : `${style.experienceText}`}
          onClick={
            handleClick
          }
        >
          <Link to="#" onClick={() => handleClick('experienceSlider')}>
            <p
              className={style.text}
            >
              <span
                className={style.numeric}
              >
                02.
              </span>

              {randomText2}
            </p>
          </Link>
        </div>

        <div
          className={isVisible ? `${style.workTextAfter}` : `${style.workText}`}
          onClick={
            handleClick
          }
        >
          <Link to="#" onClick={() => handleClick('projects')}>
            <p
              className={style.text}
            >
              <span
                className={style.numeric}
              >
                03.
              </span>
              {randomText3}
            </p>
          </Link>
        </div>

        <div
          className={isVisible ? `${style.contractTextAfter}` : `${style.contractText}`}
          onClick={
            handleClick
          }
        >
          <Link to="#" onClick={() => handleClick('contactUs')}>
            <p
              className={style.text}
            >
              <span
                className={style.numeric}
              >
                04.
              </span>
              {randomText4}
            </p>
          </Link>
        </div>

        <a
          href='https://drive.google.com/file/d/1_PotGjJlCcMKgcqItW60-zdtYpbyJqAN/view?usp=sharing'
          target='__blank'
        >
          <button
            className={isVisible ? `${style.resumeButtonAfter}` : `${style.resumeButton}`}
          >
            Resume
          </button>
        </a>

      </div>
    </div>
  )
}

export default Navbar
