import { useRef } from "react";
import '../Styles/Carousel.css';

function Carousel(props) {
  const scrollRef = useRef();
  const leftAngle = 
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" ></path>
    </svg>

  const rightAngle = 
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
    </svg>

  const ITEM_WIDTH = 172;
  const GAP_WIDTH = 20;

  function scrollLeft() {
    const currentX = scrollRef.current.scrollLeft
    const carouselWidth= scrollRef.current.offsetWidth - 2;
    const firstItemVisible = (ITEM_WIDTH - GAP_WIDTH) - (currentX % ITEM_WIDTH);

    if (firstItemVisible < ITEM_WIDTH-GAP_WIDTH) {      
      scrollRef.current.scroll({
        top: 0,
        left: currentX - (carouselWidth - firstItemVisible),
        behavior: 'smooth'
      })
    } else {
      scrollRef.current.scroll({
        top: 0,
        left: currentX - (carouselWidth - firstItemVisible + ITEM_WIDTH),
        behavior: 'smooth'
      })
    }
  }

  function scrollRight() {
    const currentX = scrollRef.current.scrollLeft
    const carouselWidth= scrollRef.current.offsetWidth - 2;
    const lastItemVisible = (carouselWidth+currentX) % ITEM_WIDTH;

    if (lastItemVisible < ITEM_WIDTH-GAP_WIDTH) {
      scrollRef.current.scroll({
        top: 0,
        left: carouselWidth+currentX-lastItemVisible,
        behavior: 'smooth'
      })
    } else {
      scrollRef.current.scroll({
        top: 0,
        left: currentX + carouselWidth + (ITEM_WIDTH - lastItemVisible),
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="carousel-container">
      <div className="carousel-heading">
        <h2>{props.heading}</h2>
        <div className="carousel-controls">
          <button className="left-angle" onClick={scrollLeft}>
              {leftAngle}
          </button>
          <button className="right-angle" onClick={scrollRight}>
              {rightAngle}
          </button>
        </div>
      </div>
      <div ref={scrollRef} className="carousel">
        {props.children}
      </div>
    </div>
  )
}

export default Carousel;
