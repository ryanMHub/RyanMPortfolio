import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import {urlFor, client } from '../../client';
import './Work.scss';

const Work = () => {

  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard]  = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query)
      .then((data) => {
        setWorks(data);
        setFilterWork(data);
      });
  }, [])

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 0, opacity: 1 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if(item === 'All'){
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tag.includes(item)));
      }
    }, 500);
  };
  
  const ingredients = (work) => work.ingredient.map((ingredient) => 
    <li key={ingredient}>{ingredient}</li>
  );

  return (
    <>
      <h2 className="head-text">Skill Building Arena</h2>
      <p>Below are some projects I built to push my boundaries and challenge myself, as part of my ongoing effort to refine and improve my skills.</p>
      

      <div className="app__work-filter">
        {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>   

      <div className="container">
        {filterWork.map((work, index) => {    
                          
             return <div className='project-container'>
                <div className="project-img img-left">
                  <img src={urlFor(work.imgUrl)} alt={work.title} />
                </div>
                <div className="project-details">
                  <div className="title-container">
                    <h3 className="project-title">
                      <span>{work.title}</span>
                    </h3>
                  </div>
                    <div className="project-info-container">
                      <ul className="project-ingredients">
                          <h4>Ingredients</h4>
                          {ingredients(work)}
                      </ul>
                      <div className="project-desc-container"> 
                        <h4>Description</h4>
                        <p classsName="project-desc">{work.description}</p>
                        <ul className="project-info">
                          <li>
                            Category:
                            <strong>{work.category}</strong>
                          </li>
                          <li>
                            Duration:
                            <strong>{work.duration}</strong>
                          </li>
                        </ul>
                        <a href={work.codeLink} target="_blank" rel="noreferrer">
                          <button className="project-btn btn-right" >
                            <span><AiFillGithub /></span> View Recipe <span>&#8594;</span>
                          </button>
                        </a>
                    </div>
                  </div>
                </div>
              </div>
        })} 
      </div>     
    </>
  )
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  "app__primarybg"
  );