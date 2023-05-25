import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client'
import Slider from '../../components/Slider/Slider';


const About = () => {
  const [abouts, setAbouts] = useState([]); //creates a useState for the data received from sanity
 
  useEffect(() => { //queries the data from sanity and stores it in abouts
    const query = '*[_type == "abouts"]';

    client.fetch(query)
        .then((data) => setAbouts(data))
  }, []);
  return (
    /**controls the main text below the profile image */
    <>
      {/*Male sure that the statement below looks good on all sizes of screens*/}
      <h2 className="head-text">I'm <span>excited</span> to bring my <span>strong work ethic</span><br/>and <span>determination</span> to the <span>world of programming</span></h2>   
      <Slider />      
    </>
  )
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  "app__lightblackbg"
  );