import React from 'react'
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className="app__social">
        {/*<div>
            <BsTwitter />
        </div>*/}
        <div>
            <a href="https://github.com/ryanMHub/"><BsGithub /></a> 
        </div>
        <div>
            <a href="https://www.linkedin.com/in/ryan-moskovciak/"><BsLinkedin /></a>
        </div>
    </div>
  )
}

export default SocialMedia