import React, { useState, useEffect } from 'react';
import { Tooltip } from 'react-tooltip';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [experiences, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query)
      .then((data) => {

        console.log(data);
        setExperience(data);
      })
    
    client.fetch(skillsQuery)
      .then((data) => {
        setSkills(data);
      })
  }, [])
  return (
    <>
      <h2 className="head-text"><span>My</span> <br/> <span>Newfound</span> Areas Of <span>Expertise</span><br/> And <span>My Past</span> Journeys</h2>

      {/**This is where the skills section begins */}
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/**This is where the experience section begins */}
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <div key={work.name}>
                    <motion.div
                      whileInView={{ opacity: [0, 1]}}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      id={work.name}
                      key={work.name}
                    >
                      <div className="work-header">
                        <h4 className="bold-text">{work.name}</h4>
                        <p  className="p-text name-text">{work.company}</p>
                      </div>
                      <div className="outer-div"><div className="inner-div"><p className="text-box">{work.desc}</p></div></div>
                    </motion.div>                                       
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  "app__lightblackbg"
  );