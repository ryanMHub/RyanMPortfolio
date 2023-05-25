import React from 'react';
import { easeInOut, motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';


/**this function is used for animation. Need to figure out how it works */
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    /**this div contains the name and the job type. It also has the profile picture overlay and skills bubbles */
    <div className="app__header app__flex">
      <motion.div
        whileInView={{x: [-100, 0], opacity: [0,1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
        >
          <div className="app__header-badge">
            <div className="badge-cmp app__flex">
              <span>👋</span>
              <div style={{marginLeft: 20}}>
                <p className="p-text">Welcome!!!  My name is </p>
                <h1 className="head-text">Ryan M.</h1>
              </div>
            </div>

            <div className="tag-cmp app__flex">
              <p className="p-text">A chef transitioning</p>
              <p className="p-text">to a Software Engineer</p>
            </div>
          </div>
      </motion.div>
      {/**this section contains the profile picture and the large circle overlay. As well as the animations */}
      <motion.div 
        whileInView={{ opacity: [0,1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img">
          <img src={images.profile} alt="profile_bg" />
          <motion.img
            whileInView={{ scale: [0,1] }}
            transition={{ duration: 1, ease: easeInOut }}
            src={images.circle}
            alt="profile_circle"
            className="overlay_circle"
          />          
      </motion.div>

      {/**this section controls the circle tech stack skills and there animations */}
      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
        >
          {[images.javascript, images.sass, images.react, images.html, images.css].map((circle, index) => (
            <div className="app__flex" key={`circle-${index}`}>
              <img src={circle} alt="circle"/>
            </div>
          ))}
      </motion.div>

    </div>
  )
};

export default AppWrap(Header, 'home');