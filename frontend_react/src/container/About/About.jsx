import React from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import SliderHCode from '../../components/Slider/SliderHCode';

const About = () => {
  return (
    /**controls the main text below the profile image */
    <>
      {/*Male sure that the statement below looks good on all sizes of screens*/}
      <h2 className="head-text">I'm <span>excited</span> to bring my <span>strong work ethic</span><br/>and <span>determination</span> to the <span>world of programming</span></h2>   
      <SliderHCode />
    </>
  )
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  "app__lightblackbg"
  );