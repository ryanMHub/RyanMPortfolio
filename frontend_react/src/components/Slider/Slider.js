import {useState,  useEffect} from 'react';
import { urlFor, client } from '../../client'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import "./Slider.scss";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [abouts, setAbouts] = useState([]); //creates a useState for the data received from sanity
    const slideLength = abouts.length;

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 20000;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength-1 ? 0 : currentSlide + 1)
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength-1 : currentSlide - 1)
    };

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime)
    }

    useEffect(() => {
        setCurrentSlide(0)
    }, []);   

    useEffect(() => {
        if(autoScroll) {
            auto();
        }
        return () => clearInterval(slideInterval);
    });
 
    useEffect(() => { //queries the data from sanity and stores it in abouts
    const query = '*[_type == "abouts"]';

    client.fetch(query)
        .then((data) => setAbouts(data))
    }, []);

  return (
    <section className='outside-wrapper'>        
        <div className="slider">
            <IoIosArrowForward className="arrow next" onClick={nextSlide}/>
            <IoIosArrowBack className="arrow prev" onClick={prevSlide}/>                      
            {abouts.map((about, index) => {
                return(
                    <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
                        {index === currentSlide && (
                            <>
                                <img src={urlFor(about.imgUrl)} alt={about.title} />
                                <div className="title">
                                    <h2>{about.title}</h2>
                                    <hr/>
                                </div>
                                <div className="content">                                    
                                    <p>{about.description}</p>
                                    <hr className="bottom-line"/>
                                </div>
                            </>                        
                        )}
                    </div>
                )
            })}
        </div>        
    </section>
  );
};

export default Slider;