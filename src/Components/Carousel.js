import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import '../Styles/Carousel.css';

function Carousel({ heading, children }) {
  const [rightScrollDisabled, setRightScrollDisabled] = useState(false);
  const [leftScrollDisabled, setLeftScrollDisabled] = useState(true);
  const scrollRef = useRef();

  const leftAngle = (
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
    </svg>
  );

  const rightAngle = (
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
    </svg>
  );

  const ITEM_WIDTH = 172;
  const GAP_WIDTH = 20;

  useEffect(() => {
    function disableScroll() {
      const currentX = scrollRef.current.scrollLeft;
      const carouselWidth = scrollRef.current.offsetWidth;

      if (currentX === 0) {
        setLeftScrollDisabled(true);
      }
      if (currentX + carouselWidth === scrollRef.current.scrollWidth) {
        setRightScrollDisabled(true);
        setLeftScrollDisabled(false);
      } else if (currentX !== 0) {
        setLeftScrollDisabled(false);
        setRightScrollDisabled(false);
      }
    }
    scrollRef.current.addEventListener('scroll', disableScroll);
  });

  function scrollLeft() {
    const currentX = scrollRef.current.scrollLeft;
    const carouselWidth = scrollRef.current.offsetWidth - 2;
    const firstItemVisible = (ITEM_WIDTH - GAP_WIDTH) - (currentX % ITEM_WIDTH);

    if (firstItemVisible < ITEM_WIDTH - GAP_WIDTH) {
      scrollRef.current.scroll({
        top: 0,
        left: currentX - (carouselWidth - firstItemVisible),
        behavior: 'smooth',
      });
    } else {
      scrollRef.current.scroll({
        top: 0,
        left: currentX - (carouselWidth - firstItemVisible + ITEM_WIDTH),
        behavior: 'smooth',
      });
    }
  }

  function scrollRight() {
    const currentX = scrollRef.current.scrollLeft;
    const carouselWidth = scrollRef.current.offsetWidth - 2;
    const lastItemVisible = (carouselWidth + currentX) % ITEM_WIDTH;

    if (lastItemVisible < ITEM_WIDTH - GAP_WIDTH) {
      scrollRef.current.scroll({
        top: 0,
        left: carouselWidth + currentX - lastItemVisible,
        behavior: 'smooth',
      });
    } else {
      scrollRef.current.scroll({
        top: 0,
        left: currentX + carouselWidth + (ITEM_WIDTH - lastItemVisible),
        behavior: 'smooth',
      });
    }
  }

  return (
    <div className="carousel-container">
      <div className="carousel-heading">
        <h2>{heading}</h2>
        <div className="carousel-controls">
          <button type="button" className={`left-angle ${leftScrollDisabled ? 'disabled' : ''}`} onClick={scrollLeft} disabled={leftScrollDisabled}>
            {leftAngle}
          </button>
          <button type="button" className={`right-angle ${rightScrollDisabled ? 'disabled' : ''}`} onClick={scrollRight} disabled={rightScrollDisabled}>
            {rightAngle}
          </button>
        </div>
      </div>
      <div ref={scrollRef} className="carousel">
        {children}
      </div>
    </div>
  );
}

Carousel.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Carousel;
