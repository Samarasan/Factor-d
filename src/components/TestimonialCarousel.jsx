import React, { useState, useEffect } from "react";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const TestimonialCarousel = ({ testimonials, interval = 5000 }) => {

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, interval);

    return () => {
      clearInterval(slideInterval);
    };
  }, [testimonials.length, interval]);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <section className="testimonialSec">
        <div className="testiContainer">
          <div className="category-title">
            <h4 className="title_heading">Testimonials</h4>
          </div>
          <div className="carouselsec slide" id='myCarousel2'>
            <div className="carousel-inner">
              <div className="item">
                <div className="testimonial4_slide">
                  <p>{testimonials[activeIndex].text}</p>
                  <h4>{testimonials[activeIndex].author}</h4>
                </div>
              </div>
            </div>
            <a className="left carousel-control" href="#myCarousel2"  onClick={handlePrev}>
                    <span className="fa"><ArrowCircleLeftIcon sx={{fontSize:"2.5rem"}} /></span>
            </a>
            <a className="right carousel-controlrigh" href="#myCarousel2" onClick={handleNext}>
                    <span className="fa"><ArrowCircleRightIcon sx={{fontSize:"2.5rem"}} /></span>
            </a>
          </div>
        </div>
      </section>
      {/* <div className="testimonial-carousel">
        <div className="testimonial">
          <p className="testimonial-text">{testimonials[activeIndex].text}</p>
          <p className="testimonial-author">
            {testimonials[activeIndex].author}
          </p>
        </div>
        <div className="carousel-controls">
          <div className="arrow left-arrow" onClick={handlePrev}>
            &#8249;
          </div>
          <div className="arrow right-arrow" onClick={handleNext}>
            &#8250;
          </div>
        </div>
      </div> */}
    </>
  );
};

export default TestimonialCarousel;
