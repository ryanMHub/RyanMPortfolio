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
        <form className="app__contact-form" name="contact" action="/contact" method="post">
          <input type="hidden" name="form-name" value="contact"/>
          <div className="app__form-header">
            <h4 className="bold-text">Email Me To</h4>
            <p  className="p-text name-text">Connect</p>
          </div>
          <div className="app__contact">
            <div className="app__contact-info">
              <div className="outer-div outer-contact"><div className="inner-div inner-contact"><TextField className="contact-info" variant="outlined" required label="Full Name" name="name" /></div></div>       
              <div className="outer-div outer-contact"><div className="inner-div inner-contact"><TextField className="contact-info" variant="outlined" required label="Email" type="email" name="email" /></div></div>
              <div className="outer-div outer-contact"><div className="inner-div inner-contact"><TextField className="contact-info" variant="outlined" required label="Subject" name="subject" /></div></div>             
            </div>
            <div className="outer-div outer-message">
              <div className="inner-div inner-contact">
                <TextField className="contact-message" required label="Message" name="message" multiline rows={10} />
              </div>
            </div>
          </div>
          <div className='app__form-button'>
            <Button className="contact-button" sx={buttonStyle} endIcon={<Send />} type="submit">
              Send
            </Button>
          </div>
        </form>
        {/* come back and add this effect later
        <motion.div 
          animate={{ rotate: [0, 200, 200, 0]  }}
          transition={{ repeat: 2, duration: 1}}
          classname="contact-logo-container">
          <img className="contact-logo" src={images.atsignnew} alt="contact logo" />       
        </motion.div>*/}    
        <img className="contact-logo" src={images.atsignnew} alt="contact logo" /> 
      </div>    
            
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg',
);