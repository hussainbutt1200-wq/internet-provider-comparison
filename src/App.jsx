import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import style from './App.module.css';
import LandingPage from "./Desktop/LandingPage/landingPage";
import LoadingAnimation from "./Desktop/loadingAnimation/loadingAnimation";
import LandingPageMobile from "./Mobile/landinPage/landingPage";

function App() {
  const [showLandingPage, setShowLandingPage] = useState(false);
  const [showLoadingPage, setShowLoadingPage] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLandingPage(true);
    }, 2500);
    

    return () =>clearTimeout(timeoutId);
  }, []);
  
  useEffect(() => {
    const timeoutIdLoading = setTimeout(() => {
      setShowLoadingPage(false);
    }, 2200);
    

    return () => clearTimeout(timeoutIdLoading);
  }, []);


  return (
    <div className={style.mainDiv}>
      <div className={style.Desktop}>
        <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  showLandingPage ? (
                    <div className={`${style.LandingPage} ${style.fadeIn}`} >
                      <LandingPage />
                    </div>
                    
                  ) : (
                    <div className={ showLoadingPage ?   `${style.LoadingAnimation}` : `${style.fadeOut}`}>
                      <LoadingAnimation  />
                    </div> 
                  )
                }
              ></Route>
            </Routes>
          </BrowserRouter>
      </div>
      <div className={style.mobile}>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPageMobile />}>
                {" "}
              </Route>
            </Routes>
          </BrowserRouter>

        {/* <div className={style.logo}>
          <p>
          SAMI PORTFOLIO
          </p>
        </div>
        <div className={style.sorry}>
          <svg width="30" height="19" viewBox="0 0 30 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.18359L8.63582 8.1831M1 8.1831L8.63582 1.18359" stroke="#F2751A" stroke-width="2.14286" />
            <path d="M21.3633 1.18359L28.9991 8.1831M21.3633 8.1831L28.9991 1.18359" stroke="#F2751A" stroke-width="2.14286" />
            <line x1="1.63281" y1="17.9286" x2="28.3582" y2="17.9286" stroke="#F2751A" stroke-width="2.14286" />
          </svg>
          <p>Sorry,</p>
        </div>
        <p className={style.text}> <p>This Portfolio is only viewable on desktop for now.</p></p> */}
      
      </div>
    </div>
  );
}

export default App;
