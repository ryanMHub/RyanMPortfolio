import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi'; /* imports icons from the react-icons package*/
import { motion } from 'framer-motion'; /*imports the motion function*/

import { images } from '../../constants'; /*imports the index.js file from the constants directory that conatins the connections to all the images */
import './Navbar.scss'; /*imports the css file associated with the Navbar*/

const Navbar = () => {
  const [toogle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" /> {/*inserts the logo image*/}
      </div>
      <ul className="app__navbar-links"> {/*creates and displayss a list of the containers associated with the website and makes them a link */}
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <p>
              &lt;&gt;
            </p>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      
      {/*controls the menu of the links of the website */}
      <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)}/>

          {toogle && (
            <motion.div
              whileInView={{x:[300,0]}}
              transition={{ duration:0.85, ease: 'easeOut' }}>
              
              <HiX onClick={() => setToggle(false)} />
              <ul className="app__navbar-links">
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                  <li key={item}>                  
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
      </div>
    </nav>
  )
};

export default Navbar;