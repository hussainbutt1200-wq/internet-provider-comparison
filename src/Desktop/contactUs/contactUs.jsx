import React from 'react'
import style from '../contactUs/contactUs.module.css'
function ContactUs() {
  return (
    <div className={style.mainDiv}>
      <div className={style.text1}>
        <p>
          04. What’s Next?
        </p>
      </div>
      <div className={style.text2}>
        <p>
          Get In Touch
        </p>
      </div>
      <div className={style.text3}>
        <p>
          my inbox is always open. Whether you have a question or just want to create
          your next idea together!
        </p>
      </div>
      <a
        href="mailto:asharkhan1258@gmail.com"
        target='__blank'
        >
        <div className={style.helloButton}>
          <button>
            Say Hello
          </button>
        </div>
      </a>
    </div>
  )
}

export default ContactUs 
