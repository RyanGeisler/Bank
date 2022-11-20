import React from "react";
import "./Slider.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import sol1 from '../../assets/img/solutions/solution1.png';
import sol2 from "../../assets/img/solutions/solution2.png";
import { sliderData } from "./slider-data";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength -1 ? 0 : currentSlide + 1)
  }
  const previousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide -1)
  }
function auto() {
  slideInterval = setInterval(nextSlide, intervalTime)
}
  React.useEffect(() => {
    setCurrentSlide(0)
  }, [])

  React.useEffect(() => {
    if (autoScroll) {
      auto()
    }
    return () => clearInterval(slideInterval)
  },[currentSlide])
  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={previousSlide}/>
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide}/>

      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <>
                <img src={slide.image} alt="slide" />
                <div className="content">
                  <p className="title">{slide.heading}</p>
                  <p>{slide.desc}</p>
                  <hr />
                  <button className="btn">{slide.href}</button>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
