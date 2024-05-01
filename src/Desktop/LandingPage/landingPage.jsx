import React, { useState, useEffect } from 'react';
import { animated, useSpring } from '@react-spring/web';
import Navbar from '../navBar/navbar';
import style from "../LandingPage/landingPage.module.css"
import AboutMe from '../aboutMe/aboutMe';
import ExperienceSlider from '../experienceSlider/experienceSlider';
import Projects from '../projects/projects';
import ContactUs from '../contactUs/contactUs';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isTwitterHovered, setIsTwitterHovered] = useState(false);
  const [isGitHovered, setIsGitHovered] = useState(false);
  const [isLinkdinHover, setIsLinkdinHover] = useState(false);
  const [isEmainHover, setIsEmainHover] = useState(false);
  const [isWhatsapp, setIsWhatsapp] = useState(false);
  const [scrollInVh, setScrollInVh] = useState(0);
  const [section1, setsection1] = useState(false);
  const [section2, setsection2] = useState(false);
  const [section3, setsection3] = useState(false);
  const [section4, setsection4] = useState(false);

  const handleTwitterHover = (isHovered) => {
    setIsTwitterHovered(isHovered);
  };
  const handleGitHover = (isHovered) => {
    setIsGitHovered(isHovered);
  };
  const handleLinkdinHover = (isHovered) => {
    setIsLinkdinHover(isHovered);
  };
  const handleWhatsappHover = (isHovered) => {
    setIsWhatsapp(isHovered);
  };

  const fadeIn = useSpring({
    opacity: isVisible ? 1 : 0,
    config: { duration: 500},
  });
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    // Clean up the timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, []);

  const scroll = () => {
    const myDiv = document.getElementById("mainDiv");
    const scrollY = myDiv.scrollTop;
    const viewportHeight = window.innerHeight;
    const scrollXInViewWidth =
      (scrollY / (myDiv.scrollHeight - viewportHeight)) * 100;
    setScrollInVh(scrollXInViewWidth);
    if (scrollInVh > 7 && scrollInVh < 30) {
      setsection1(true);
    } else if (scrollInVh > 33 && scrollInVh < 48) {
      setsection2(true);
    } else if (scrollInVh > 49 && scrollInVh < 90) {
      setsection3(true);
    } else if (scrollInVh > 92 && scrollInVh < 99) {
      setsection4(true);
    }
  };

  // -----------------------------------------------------------------------------------------------------------
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = {
    autoPlay: true,
    background: {
      color: {
        value: "red",
      },
      image: "",
      position: "",
      repeat: "",
      size: "",
      opacity: 1,
    },
    backgroundMask: {
      composite: "destination-out",
      cover: {
        color: {
          value: "#fff",
        },
        opacity: 1,
      },
      enable: false,
    },
    clear: true,
    defaultThemes: {},
    delay: 0,
    fullScreen: {
      enable: true,
      zIndex: 0,
    },
    detectRetina: true,
    duration: 0,
    fpsLimit: 120,
    interactivity: {
      detectsOn: "window",
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onDiv: {
          selectors: [],
          enable: false,
          mode: [],
          type: "circle",
        },
        onHover: {
          enable: true,
          mode: "grab",
          parallax: {
            enable: true,
            force: 60,
            smooth: 10,
          },
        },
        resize: {
          delay: 0.5,
          enable: true,
        },
      },
      modes: {
        trail: {
          delay: 1,
          pauseOnStop: false,
          quantity: 1,
        },
        attract: {
          distance: 200,
          duration: 0.4,
          easing: "ease-out-quad",
          factor: 1,
          maxSpeed: 50,
          speed: 1,
        },
        bounce: {
          distance: 200,
        },
        bubble: {
          distance: 400,
          duration: 2,
          mix: false,
          opacity: 0.8,
          size: 40,
          divs: {
            distance: 200,
            duration: 0.4,
            mix: false,
            selectors: [],
          },
        },
        connect: {
          distance: 80,
          links: {
            opacity: 0.5,
          },
          radius: 60,
        },
        grab: {
          distance: 400,
          links: {
            blink: false,
            consent: false,
            opacity: 1,
          },
        },
        push: {
          default: true,
          groups: [],
          quantity: 4,
        },
        remove: {
          quantity: 2,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad",
          divs: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: "ease-out-quad",
            selectors: [],
          },
        },
        slow: {
          factor: 3,
          radius: 200,
        },
        light: {
          area: {
            gradient: {
              start: {
                value: "#ffffff",
              },
              stop: {
                value: "#000000",
              },
            },
            radius: 1000,
          },
          shadow: {
            color: {
              value: "#000000",
            },
            length: 2000,
          },
        },
      },
    },
    manualParticles: [],
    particles: {
      bounce: {
        horizontal: {
          value: 1,
        },
        vertical: {
          value: 1,
        },
      },
      collisions: {
        absorb: {
          speed: 2,
        },
        bounce: {
          horizontal: {
            value: 1,
          },
          vertical: {
            value: 1,
          },
        },
        enable: false,
        maxSpeed: 50,
        mode: "bounce",
        overlap: {
          enable: true,
          retries: 0,
        },
      },
      color: {
        value: "#ffffff",
        animation: {
          h: {
            count: 0,
            enable: false,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: true,
            offset: 0,
          },
          s: {
            count: 0,
            enable: false,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: true,
            offset: 0,
          },
          l: {
            count: 0,
            enable: false,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: true,
            offset: 0,
          },
        },
      },
      effect: {
        close: true,
        fill: true,
        options: {},
        type: [],
      },
      groups: {},
      move: {
        angle: {
          offset: 0,
          value: 90,
        },
        attract: {
          distance: 200,
          enable: false,
          rotate: {
            x: 3000,
            y: 3000,
          },
        },
        center: {
          x: 50,
          y: 50,
          mode: "percent",
          radius: 0,
        },
        decay: 0,
        distance: {},
        direction: "none",
        drift: 0,
        enable: true,
        gravity: {
          acceleration: 9.81,
          enable: false,
          inverse: false,
          maxSpeed: 50,
        },
        path: {
          clamp: true,
          delay: {
            value: 0,
          },
          enable: false,
          options: {},
        },
        outModes: {
          default: "out",
        },
        random: false,
        size: false,
        speed: 2,
        spin: {
          acceleration: 0,
          enable: false,
        },
        straight: false,
        trail: {
          enable: false,
          length: 10,
          fill: {},
        },
        vibrate: false,
        warp: false,
      },
      number: {
        density: {
          enable: true,
          width: 1920,
          height: 1080,
        },
        limit: {
          mode: "delete",
          value: 0,
        },
        value: 100,
      },
      opacity: {
        value: {
          min: 0.1,
          max: 0.5,
        },
        animation: {
          count: 0,
          enable: true,
          speed: 3,
          decay: 0,
          delay: 0,
          sync: false,
          mode: "auto",
          startValue: "random",
          destroy: "none",
        },
      },
      reduceDuplicates: false,
      shadow: {
        blur: 0,
        color: {
          value: "#000",
        },
        enable: false,
        offset: {
          x: 0,
          y: 0,
        },
      },
      shape: {
        close: true,
        fill: true,
        options: {},
        type: "circle",
      },
      size: {
        value: {
          min: 1,
          max: 10,
        },
        animation: {
          count: 0,
          enable: true,
          speed: 20,
          decay: 0,
          delay: 0,
          sync: false,
          mode: "auto",
          startValue: "random",
          destroy: "none",
        },
      },
      stroke: {
        width: 0,
      },
      zIndex: {
        value: 0,
        opacityRate: 1,
        sizeRate: 1,
        velocityRate: 1,
      },
      destroy: {
        bounds: {},
        mode: "none",
        split: {
          count: 1,
          factor: {
            value: 3,
          },
          rate: {
            value: {
              min: 4,
              max: 9,
            },
          },
          sizeOffset: true,
        },
      },
      roll: {
        darken: {
          enable: false,
          value: 0,
        },
        enable: false,
        enlighten: {
          enable: false,
          value: 0,
        },
        mode: "vertical",
        speed: 25,
      },
      tilt: {
        value: 0,
        animation: {
          enable: false,
          speed: 0,
          decay: 0,
          sync: false,
        },
        direction: "clockwise",
        enable: false,
      },
      twinkle: {
        lines: {
          enable: false,
          frequency: 0.05,
          opacity: 1,
        },
        particles: {
          enable: false,
          frequency: 0.05,
          opacity: 1,
        },
      },
      wobble: {
        distance: 5,
        enable: false,
        speed: {
          angle: 50,
          move: 10,
        },
      },
      life: {
        count: 0,
        delay: {
          value: 0,
          sync: false,
        },
        duration: {
          value: 0,
          sync: false,
        },
      },
      rotate: {
        value: 0,
        animation: {
          enable: false,
          speed: 0,
          decay: 0,
          sync: false,
        },
        direction: "clockwise",
        path: false,
      },
      orbit: {
        animation: {
          count: 0,
          enable: false,
          speed: 1,
          decay: 0,
          delay: 0,
          sync: false,
        },
        enable: false,
        opacity: 1,
        rotation: {
          value: 45,
        },
        width: 1,
      },
      links: {
        blink: false,
        color: {
          value: "#ffffff",
        },
        consent: false,
        distance: 150,
        enable: true,
        frequency: 1,
        opacity: 0.4,
        shadow: {
          blur: 5,
          color: {
            value: "#000",
          },
          enable: false,
        },
        triangles: {
          enable: false,
          frequency: 1,
        },
        width: 1,
        warp: false,
      },
      repulse: {
        value: 0,
        enabled: false,
        distance: 1,
        duration: 1,
        factor: 1,
        speed: 1,
      },
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    responsive: [],
    smooth: false,
    style: {},
    themes: [],
    zLayers: 100,
    name: "Parallax",
    motion: {
      disable: false,
      reduce: {
        factor: 4,
        value: true,
      },
    },
  };


  // ----------------------------------------------------------------------------------------------------------------

  console.log("scrollInVh", scrollInVh);
  return (
    <div className={style.mainDiv}
      id='mainDiv'
      onScroll={scroll}
    >
      <div style={{ position: 'absolute' }}>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </div>
      <div>
        <Navbar />
      </div>

      <div className={style.introDiv}>
        <div
          className={isVisible ? `${style.introText1DivAfter}` : `${style.introText1Div}`}
        >
          <p>
            Hi, my name is
          </p>
        </div>
        <div
          className={isVisible ? `${style.introText2DivAfter}` : `${style.introText2Div}`}
        >
          <p>
          Ashar Khan
          </p>
        </div>
        <div
          className={isVisible ? `${style.introText3DivAfter}` : `${style.introText3Div}`}
        >
          <p>
            I specialize in crafting creative and high-performance web/mobile applications with a focus on AI and Blockchain.
          </p>
        </div>
        <div
          className={isVisible ? `${style.introText4DivAfter}` : `${style.introText4Div}`}
        >
          <p>
            I'm a tech enthusiast skilled in crafting elegant user interfaces and architecting robust back-end systems. Proficient in optimizing databases and well-versed in data science technologies, my commitment is to deliver seamless, end-to-end digital solutions for an unparalleled user experience
          </p>
        </div>
      </div>

      <animated.div className={style.socialMedia} style={fadeIn}>
        <a
          href='https://github.com/asharkhan1258/main-portfolio'
          target='__blank'
        >
          <div
            className={isGitHovered ? `${style.gitImageHover}` : `${style.gitImage}`}
            onMouseEnter={() => handleGitHover(true)}
            onMouseLeave={() => handleGitHover(false)}
          >
            <svg width="1.151vw" height="1.241vw" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.788 4.61233C21.7739 5.79533 22.2657 7.1755 22.2657 8.75283C22.2657 14.4696 19.0135 16.1455 15.9575 16.6384C16.3518 17.3285 16.4504 18.1172 16.4504 18.9058V22.9467C16.4504 23.4396 16.1546 23.7353 15.7603 23.7353C15.6563 23.7368 15.5531 23.7174 15.4568 23.6783C15.3604 23.6391 15.2729 23.5811 15.1994 23.5076C15.1258 23.4341 15.0678 23.3465 15.0287 23.2502C14.9896 23.1538 14.9702 23.0506 14.9716 22.9467V18.9058C15.0235 18.4927 14.9794 18.0731 14.8426 17.6798C14.7058 17.2866 14.4801 16.9302 14.183 16.6384L14.6759 15.3568C17.732 14.9625 20.8866 13.9767 20.8866 8.65425C20.8866 7.37266 20.3937 6.18966 19.5065 5.20383L19.3093 4.41625C19.6842 3.47163 19.7187 2.426 19.4068 1.45875C18.915 1.55625 17.9291 1.7545 16.2543 2.9375L15.6617 3.035C13.3334 2.44378 10.8942 2.44378 8.56588 3.035L7.97329 2.9375C6.20096 1.85308 5.21512 1.55733 4.72112 1.55733C4.42537 2.54316 4.42537 3.6265 4.81862 4.51483L4.62254 5.30241C3.63671 6.28825 3.14379 7.56983 3.14379 8.75283C3.14379 13.9767 6.10129 15.0611 9.35346 15.4554L9.74779 16.737C9.15629 17.3285 8.86054 18.1172 8.95912 18.9058V23.0452C8.96058 23.1492 8.94118 23.2524 8.90206 23.3488C8.86294 23.4451 8.80491 23.5326 8.73138 23.6062C8.65785 23.6797 8.57033 23.7377 8.47398 23.7768C8.37764 23.816 8.27443 23.8354 8.17046 23.8339C8.06648 23.8354 7.96328 23.816 7.86693 23.7768C7.77059 23.7377 7.68306 23.6797 7.60954 23.6062C7.53601 23.5326 7.47797 23.4451 7.43885 23.3488C7.39974 23.2524 7.38033 23.1492 7.38179 23.0452V20.7789C4.12962 21.469 2.84804 19.7931 1.86221 18.5126C1.36929 17.9211 0.974958 17.4282 0.482041 17.3296C0.384541 17.231 0.0877076 16.8367 0.186291 16.4423C0.284874 16.048 0.679208 15.7522 1.07462 15.9494C2.06046 16.1466 2.65087 16.9352 3.24129 17.6253C4.12962 18.8083 5.01687 19.8917 7.67754 19.3012V18.9069C7.58004 18.1182 7.77612 17.3296 8.17046 16.6395C5.21296 16.048 1.76362 14.3721 1.76362 8.75391C1.76362 7.17658 2.25654 5.79641 3.24237 4.61341C2.94662 3.23433 3.04521 1.75558 3.53812 0.572579L4.03104 0.178246C4.22821 0.0796625 5.60837 -0.216087 8.46512 1.55733C10.8272 0.965909 13.2986 0.965909 15.6606 1.55733C18.422 -0.315754 19.9008 -0.0210875 20.098 0.0785792L20.5909 0.472912C21.0838 1.85308 21.1824 3.23325 20.788 4.61233Z" fill={isGitHovered ? `#8c8989` : `#A4AFCE`} />
            </svg>
          </div>
        </a>

        <a
          href='https://twitter.com/asharkhan1258'
          target='__blank'
        >
          <div
            className={isTwitterHovered ? `${style.twiterHover}` : `${style.twiter}`}
            onMouseEnter={() => handleTwitterHover(true)}
            onMouseLeave={() => handleTwitterHover(false)}
          >

            <svg width="1.063vw" height="1.094vw" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.141 9.72598L19.7355 0.833984H17.9355L11.343 8.55448L6.075 0.833984H0L7.965 12.51L0 21.834H1.8L8.763 13.68L14.3265 21.834H20.4015L12.141 9.72598ZM9.6765 12.612L8.8695 11.4495L2.448 2.19898H5.2125L10.3935 9.66448L11.2005 10.827L17.937 20.532H15.1725L9.6765 12.612Z" fill={isTwitterHovered ? `#8c8989` : `#A4AFCE`} />
            </svg>
          </div>
        </a>

        <a
          href='https://www.linkedin.com/in/ashar-khan-71703023b/'
          target='__blank'
        >
          <div
            className={isLinkdinHover ? `${style.linkdinHover}` : `${style.linkdin}`}
            onMouseEnter={() => handleLinkdinHover(true)}
            onMouseLeave={() => handleLinkdinHover(false)}
          >
            <svg width="1.172vw" height="1.172vw" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.01829 0.833984C2.21779 0.833984 1.45008 1.15198 0.884038 1.71802C0.317998 2.28406 0 3.05178 0 3.85228C0 4.65278 0.317998 5.42049 0.884038 5.98653C1.45008 6.55257 2.21779 6.87057 3.01829 6.87057C3.81879 6.87057 4.58651 6.55257 5.15255 5.98653C5.71859 5.42049 6.03659 4.65278 6.03659 3.85228C6.03659 3.05178 5.71859 2.28406 5.15255 1.71802C4.58651 1.15198 3.81879 0.833984 3.01829 0.833984ZM1.64634 3.85228C1.64634 3.48841 1.79089 3.13945 2.04818 2.88216C2.30547 2.62487 2.65443 2.48033 3.01829 2.48033C3.38216 2.48033 3.73112 2.62487 3.98841 2.88216C4.2457 3.13945 4.39024 3.48841 4.39024 3.85228C4.39024 4.21614 4.2457 4.5651 3.98841 4.82239C3.73112 5.07968 3.38216 5.22423 3.01829 5.22423C2.65443 5.22423 2.30547 5.07968 2.04818 4.82239C1.79089 4.5651 1.64634 4.21614 1.64634 3.85228ZM0 8.24252C0 8.0242 0.0867266 7.81483 0.241101 7.66045C0.395475 7.50608 0.604852 7.41935 0.823171 7.41935H5.21341C5.43173 7.41935 5.64111 7.50608 5.79548 7.66045C5.94986 7.81483 6.03659 8.0242 6.03659 8.24252V22.5108C6.03659 22.7291 5.94986 22.9385 5.79548 23.0929C5.64111 23.2473 5.43173 23.334 5.21341 23.334H0.823171C0.604852 23.334 0.395475 23.2473 0.241101 23.0929C0.0867266 22.9385 0 22.7291 0 22.5108V8.24252ZM1.64634 9.06569V21.6876H4.39024V9.06569H1.64634ZM7.68293 8.24252C7.68293 8.0242 7.76965 7.81483 7.92403 7.66045C8.0784 7.50608 8.28778 7.41935 8.5061 7.41935H12.8963C13.1147 7.41935 13.324 7.50608 13.4784 7.66045C13.6328 7.81483 13.7195 8.0242 13.7195 8.24252V8.71886L14.197 8.51362C15.0201 8.16182 15.8935 7.94146 16.785 7.86057C19.8307 7.58398 22.5 9.97667 22.5 13.0498V22.5108C22.5 22.7291 22.4133 22.9385 22.2589 23.0929C22.1045 23.2473 21.8951 23.334 21.6768 23.334H17.2866C17.0683 23.334 16.8589 23.2473 16.7045 23.0929C16.5501 22.9385 16.4634 22.7291 16.4634 22.5108V14.8279C16.4634 14.464 16.3189 14.1151 16.0616 13.8578C15.8043 13.6005 15.4553 13.4559 15.0915 13.4559C14.7276 13.4559 14.3786 13.6005 14.1213 13.8578C13.8641 14.1151 13.7195 14.464 13.7195 14.8279V22.5108C13.7195 22.7291 13.6328 22.9385 13.4784 23.0929C13.324 23.2473 13.1147 23.334 12.8963 23.334H8.5061C8.28778 23.334 8.0784 23.2473 7.92403 23.0929C7.76965 22.9385 7.68293 22.7291 7.68293 22.5108V8.24252ZM9.32927 9.06569V21.6876H12.0732V14.8279C12.0732 14.0274 12.3912 13.2597 12.9572 12.6936C13.5232 12.1276 14.291 11.8096 15.0915 11.8096C15.892 11.8096 16.6597 12.1276 17.2257 12.6936C17.7918 13.2597 18.1098 14.0274 18.1098 14.8279V21.6876H20.8537V13.0498C20.8537 10.9601 19.0306 9.30935 16.9354 9.50033C16.2156 9.56581 15.5104 9.74358 14.8456 10.0272L13.2212 10.7241C13.0959 10.7779 12.9592 10.7998 12.8234 10.7877C12.6876 10.7756 12.5569 10.73 12.4431 10.6549C12.3292 10.5798 12.2359 10.4776 12.1713 10.3575C12.1067 10.2374 12.073 10.1031 12.0732 9.96679V9.06569H9.32927Z" fill={isLinkdinHover ? `#8c8989` : `#A4AFCE`} />
            </svg>
          </div>
        </a>


        <a
          href='https://wa.me/+923019370641'
          target='__blank'
        >
          <div
            className={isWhatsapp ? `${style.whatsappHover}` : `${style.whatsapp}`}
            onMouseEnter={() => handleWhatsappHover(true)}
            onMouseLeave={() => handleWhatsappHover(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="1.45vw" height="1.45vw" viewBox="0 0 50 50">
              <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 29.079097 3.1186875 32.88588 4.984375 36.208984 L 2.0371094 46.730469 A 1.0001 1.0001 0 0 0 3.2402344 47.970703 L 14.210938 45.251953 C 17.434629 46.972929 21.092591 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 21.278025 46 17.792121 45.029635 14.761719 43.333984 A 1.0001 1.0001 0 0 0 14.033203 43.236328 L 4.4257812 45.617188 L 7.0019531 36.425781 A 1.0001 1.0001 0 0 0 6.9023438 35.646484 C 5.0606869 32.523592 4 28.890107 4 25 C 4 13.390466 13.390466 4 25 4 z M 16.642578 13 C 16.001539 13 15.086045 13.23849 14.333984 14.048828 C 13.882268 14.535548 12 16.369511 12 19.59375 C 12 22.955271 14.331391 25.855848 14.613281 26.228516 L 14.615234 26.228516 L 14.615234 26.230469 C 14.588494 26.195329 14.973031 26.752191 15.486328 27.419922 C 15.999626 28.087653 16.717405 28.96464 17.619141 29.914062 C 19.422612 31.812909 21.958282 34.007419 25.105469 35.349609 C 26.554789 35.966779 27.698179 36.339417 28.564453 36.611328 C 30.169845 37.115426 31.632073 37.038799 32.730469 36.876953 C 33.55263 36.755876 34.456878 36.361114 35.351562 35.794922 C 36.246248 35.22873 37.12309 34.524722 37.509766 33.455078 C 37.786772 32.688244 37.927591 31.979598 37.978516 31.396484 C 38.003976 31.104927 38.007211 30.847602 37.988281 30.609375 C 37.969311 30.371148 37.989581 30.188664 37.767578 29.824219 C 37.302009 29.059804 36.774753 29.039853 36.224609 28.767578 C 35.918939 28.616297 35.048661 28.191329 34.175781 27.775391 C 33.303883 27.35992 32.54892 26.991953 32.083984 26.826172 C 31.790239 26.720488 31.431556 26.568352 30.914062 26.626953 C 30.396569 26.685553 29.88546 27.058933 29.587891 27.5 C 29.305837 27.918069 28.170387 29.258349 27.824219 29.652344 C 27.819619 29.649544 27.849659 29.663383 27.712891 29.595703 C 27.284761 29.383815 26.761157 29.203652 25.986328 28.794922 C 25.2115 28.386192 24.242255 27.782635 23.181641 26.847656 L 23.181641 26.845703 C 21.603029 25.455949 20.497272 23.711106 20.148438 23.125 C 20.171937 23.09704 20.145643 23.130901 20.195312 23.082031 L 20.197266 23.080078 C 20.553781 22.728924 20.869739 22.309521 21.136719 22.001953 C 21.515257 21.565866 21.68231 21.181437 21.863281 20.822266 C 22.223954 20.10644 22.02313 19.318742 21.814453 18.904297 L 21.814453 18.902344 C 21.828863 18.931014 21.701572 18.650157 21.564453 18.326172 C 21.426943 18.001263 21.251663 17.580039 21.064453 17.130859 C 20.690033 16.232501 20.272027 15.224912 20.023438 14.634766 L 20.023438 14.632812 C 19.730591 13.937684 19.334395 13.436908 18.816406 13.195312 C 18.298417 12.953717 17.840778 13.022402 17.822266 13.021484 L 17.820312 13.021484 C 17.450668 13.004432 17.045038 13 16.642578 13 z M 16.642578 15 C 17.028118 15 17.408214 15.004701 17.726562 15.019531 C 18.054056 15.035851 18.033687 15.037192 17.970703 15.007812 C 17.906713 14.977972 17.993533 14.968282 18.179688 15.410156 C 18.423098 15.98801 18.84317 16.999249 19.21875 17.900391 C 19.40654 18.350961 19.582292 18.773816 19.722656 19.105469 C 19.863021 19.437122 19.939077 19.622295 20.027344 19.798828 L 20.027344 19.800781 L 20.029297 19.802734 C 20.115837 19.973483 20.108185 19.864164 20.078125 19.923828 C 19.867096 20.342656 19.838461 20.445493 19.625 20.691406 C 19.29998 21.065838 18.968453 21.483404 18.792969 21.65625 C 18.639439 21.80707 18.36242 22.042032 18.189453 22.501953 C 18.016221 22.962578 18.097073 23.59457 18.375 24.066406 C 18.745032 24.6946 19.964406 26.679307 21.859375 28.347656 C 23.05276 29.399678 24.164563 30.095933 25.052734 30.564453 C 25.940906 31.032973 26.664301 31.306607 26.826172 31.386719 C 27.210549 31.576953 27.630655 31.72467 28.119141 31.666016 C 28.607627 31.607366 29.02878 31.310979 29.296875 31.007812 L 29.298828 31.005859 C 29.655629 30.601347 30.715848 29.390728 31.224609 28.644531 C 31.246169 28.652131 31.239109 28.646231 31.408203 28.707031 L 31.408203 28.708984 L 31.410156 28.708984 C 31.487356 28.736474 32.454286 29.169267 33.316406 29.580078 C 34.178526 29.990889 35.053561 30.417875 35.337891 30.558594 C 35.748225 30.761674 35.942113 30.893881 35.992188 30.894531 C 35.995572 30.982516 35.998992 31.07786 35.986328 31.222656 C 35.951258 31.624292 35.8439 32.180225 35.628906 32.775391 C 35.523582 33.066746 34.975018 33.667661 34.283203 34.105469 C 33.591388 34.543277 32.749338 34.852514 32.4375 34.898438 C 31.499896 35.036591 30.386672 35.087027 29.164062 34.703125 C 28.316336 34.437036 27.259305 34.092596 25.890625 33.509766 C 23.114812 32.325956 20.755591 30.311513 19.070312 28.537109 C 18.227674 27.649908 17.552562 26.824019 17.072266 26.199219 C 16.592866 25.575584 16.383528 25.251054 16.208984 25.021484 L 16.207031 25.019531 C 15.897202 24.609805 14 21.970851 14 19.59375 C 14 17.077989 15.168497 16.091436 15.800781 15.410156 C 16.132721 15.052495 16.495617 15 16.642578 15 z" fill={isWhatsapp ? `#8c8989` : `#A4AFCE`} />
            </svg>
          </div>
        </a>

        <div className={style.verticleLine}>
        </div>

      </animated.div>

      <animated.div className={style.emailDiv} style={fadeIn}>
        <a
          href="mailto:asharkhan1258@gmail.com"
          target='__blank'
        >
          <div
            className={isEmainHover ? `${style.emailHover}` : `${style.email}`}
            onMouseEnter={() => setIsEmainHover(true)}
            onMouseLeave={() => setIsEmainHover(false)}
          >
            <p>
              asharkhan1258@gmail.com
            </p>
          </div>
        </a>

        <div
          className={style.verticleLine}
          style={{ marginTop: '10.563vw' }}
        >
        </div>
      </animated.div>
      <div
        className={section1 ? `${style.aboutMeSectionAfter}` : `${style.aboutMeSection}`}
        id='aboutMe'
      >
        <AboutMe />
      </div>

      <div
        className={section2 ? `${style.experienceSliderSectionAfter}` : `${style.experienceSliderSection}`}
        id='experienceSlider'
      >
        <ExperienceSlider />
      </div>

      <div
        className={section3 ? `${style.projectSectionAfter}` : `${style.projectSection}`}
        id='projects'
      >
        <Projects />
      </div>
      <div
        className={section4 ? `${style.contactUsAfter}` : `${style.contactUs}`}
        id='contactUs'
      >
        <ContactUs />
      </div>

    </div>
  )
}

export default LandingPage