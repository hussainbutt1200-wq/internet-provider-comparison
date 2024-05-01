import React, { useEffect } from 'react';
import style from './loadingAnimation.module.css'; // Make sure to import your CSS file

const SpiralAnimation = () => {
  const words = "Ashar  Software  Developer "; // Add more words if needed
  const ANIMATION_DURATION = 2000; // Define your animation duration in milliseconds

  useEffect(() => {
    const createElements = (offset, targetId) => {
      const characters = words.split("");
      characters.forEach((char, i) => {
        const div = document.createElement("div");
        div.innerText = char;
        div.classList.add(style.character);
        div.style.animationDelay = `-${i * (ANIMATION_DURATION / 20) - offset}ms`;

        document.getElementById(targetId).appendChild(div);
      });
    };

    createElements(0, "spiral");
    createElements(-1 * (ANIMATION_DURATION / 2), "spiral2");
    createElements(-2 * (ANIMATION_DURATION / 2), "spiral3");
    createElements(-3 * (ANIMATION_DURATION / 2), "spiral4");
  }, []);

  return (
    <div className={style.mainDiv}>
        <div className={style.container}>
            <div id="spiral" className={style.spiral}></div>
            <div id="spiral2" className={style.spiral}></div>
            <div id="spiral3" className={style.spiral}></div>
            <div id="spiral4" className={style.spiral}></div>
        </div>
      
    </div>
  );
};

export default SpiralAnimation;