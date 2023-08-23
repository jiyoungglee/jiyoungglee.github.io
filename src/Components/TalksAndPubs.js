import CarouselItem from './CarouselItem';
import Carousel from './Carousel';
import techTalk from '../store/tech-talk.png';
import nvision from '../store/nvision.svg';

import '../Styles/Skills.css';

function TalksandPubs() {
  return (
    <Carousel heading="Talks & Publications">
      <CarouselItem type="square" description="Caching and Optimization">
        <a
          href="https://www.linkedin.com/posts/activity-7100176866677805057-GKrt?utm_source=share&utm_medium=member_desktop"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={techTalk} alt="tech talk" height="150" width="150" />
        </a>
      </CarouselItem>
      <CarouselItem
        type="square"
        description="Next.js and Server-Side Rendering"
      >
        <a
          href="https://medium.com/@nvisiondevtools/nvision-server-side-network-observability-for-next-js-472450e19343"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={nvision} alt="medium article" height="150" width="150" />
        </a>
      </CarouselItem>
    </Carousel>
  );
}

export default TalksandPubs;
