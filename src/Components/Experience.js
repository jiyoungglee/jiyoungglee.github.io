import CarouselItem from './CarouselItem';
import Carousel from './Carousel';
import hotswaps from '../store/hotswaps-small-logo.png';
import ibm from '../store/ibm.svg';

import '../Styles/Skills.css';

function Experience() {
  return (
    <Carousel heading="Experience">
      <CarouselItem type="square" description="IBM">
        <a
          href="https://ibm.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ibm} alt="ibm" height="150" width="150" />
        </a>
      </CarouselItem>
      <CarouselItem
        type="square"
        description="Hotswaps"
      >
        <a
          href="https://www.hotswaps.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={hotswaps} alt="hotswaps" height="150" width="150" />
        </a>
      </CarouselItem>
    </Carousel>
  );
}

export default Experience;
