import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { Send } from '@mui/icons-material';
import { images } from '../../constants';
import { easeInOut, motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const buttonStyle = {
  border: "3px #570a8c solid",  
  variant: "outlined",
  color: "#ffffff",
  borderRadius: 50,
  fontSize: "20px",
  '&:hover' : {
    backgroundColor: "#580a8c6f"
  }
}

const Footer = () => {
   
  return (
    <>
      <h2 className="head-text"><span>Contact Me</span></h2>

      <div className="app__contact-block">
        <form className="app__contact-form">
          <div className="app__form-header">
            <h4 className="bold-text">Email Me To</h4>
            <p  className="p-text name-text">Connect</p>
          </div>
          <div className="app__contact">
            <div className="app__contact-info">
              <div className="outer-divf"><div className="inner-divd"><TextField className="contact-info" variant="outlined" label="Full Name" name="name" /></div></div>       
              <div className="outer-divf"><div className="inner-divd"><TextField className="contact-info" variant="outlined" label="Email" name="email" /></div></div>
              <div className="outer-divf"><div className="inner-divd"><TextField className="contact-info" variant="outlined" label="Subject" name="subject" /></div></div>             
            </div>
            <div className="outer-divd">
              <div className="inner-divd">
                <TextField className="contact-message" label="Message" name="message" multiline rows={10} />
              </div>
            </div>
          </div>
          <div className='app__form-button'>
            <Button className="contact-button" sx={buttonStyle} endIcon={<Send />}>
              Send
            </Button>
          </div>
        </form>
        <motion.div 
          whileInView={{ opacity: [0,1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="contact-logo">
            <img src={images.atsign} alt="contact logo" />                        
      </motion.div>        
      </div>            
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg',
);