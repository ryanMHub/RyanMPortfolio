import {useState, useEffect} from 'react';
import {sliderData} from './slider-data';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Slider.scss"

const SliderHCode = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;

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
        
    return (
        <section className='outside-wrapper'>        
            <div className="slider">
                <IoIosArrowForward className="arrow next" onClick={nextSlide}/>
                <IoIosArrowBack className="arrow prev" onClick={prevSlide}/>                      
                {sliderData.map((slide, index) => {
                    return(
                        <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
                            {index === currentSlide && (
                                <>
                                    <div className="title">                                    
                                        <h2>{slide.title}</h2>
                                        <hr className="top-line"/>
                                    </div>
                                    <img src={slide.image} alt={slide.title}/>
                                    {/*<LazyLoadImage className="slide-image" height={`100%`} width={`100%`} src={slide.image} alt={slide.title} placeholderSrc={slide.placeholder} />*/}
                                    <div className="content">                                    
                                        <p>{slide.description}</p>
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

export default SliderHCode;