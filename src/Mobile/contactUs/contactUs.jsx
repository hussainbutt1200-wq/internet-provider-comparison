import React from 'react'
import style from '../contactUs/contactUs.module.css';

function ContactUs() {
  return (
    <div className={style.mainDiv}>
      <div className={style.container}>
        <div className={style.headingDiv}>
          <div className={style.headingText}>
            <p>
              <span>
                04.
              </span>
              What’s Next?
            </p>
          </div>
          <div className={style.headingLine}></div>
        </div>
        <p className={style.getText}>
        Get In Touch
        </p>
        <p className={style.inboxText}>
        my inbox is always open. Whether you have a question or just want to create your next idea together!
        </p>
        <a
        href="mailto:asharkhan1258@gmail.com"
        target='__blank'
        >
          <div className={style.buttonDiv}>
            <button className={style.button}>
              Say Hello
            </button>
          </div>
        </a>
      </div>
    </div>
  )
}

export default ContactUs
