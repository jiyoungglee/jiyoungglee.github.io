import '../Styles/Education.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import Carousel from './Carousel';
import CarouselItem from './CarouselItem';

function Education() {
  return (
    <div className="education">
      <h2>Education & Certification</h2>
      <div className="degree">
        <div className="grad-icon">
          <FontAwesomeIcon icon={faGraduationCap} />
        </div>
        <div className="degree-details">
          <div className="degree-name">B.S Management Information Systems</div>
          <div>Rutgers University, Rutgers Business School</div>
        </div>
      </div>
      <div className="degree">
        <div className="grad-icon">
          <img className="capm-badge" alt="CAPM Badge" src="https://images.credly.com/size/340x340/images/ad9ad44b-54b8-4916-ba10-7b131da0b732/capm-600px.png" />
        </div>
        <div className="degree-details">
          <div className="degree-name">Certified Associate in Project Management (CAPM)</div>
          <div>Project Management Institute</div>
        </div>
      </div>
      <div className="coursework">
        <Carousel heading="Related Coursework">
          <CarouselItem type="round" description="CS Fundamentals">
            <div className="course">Fundamentals of Computer Science 1 & 2</div>
          </CarouselItem>
          <CarouselItem type="round" description="Discrete Stuctures">
            <div className="course">Discrete Stuctures</div>
          </CarouselItem>
          <CarouselItem type="round" description="Computer Network Applications">
            <div className="course">Computer Network Applications</div>
          </CarouselItem>
          <CarouselItem type="round" description="System Analysis and Design">
            <div className="course">System Analysis and Design</div>
          </CarouselItem>
          <CarouselItem type="round" description="Logic and Computation">
            <div className="course">Logic and Computation</div>
          </CarouselItem>
          <CarouselItem type="round" description="Cyber Security">
            <div className="course">Cyber Security</div>
          </CarouselItem>
          <CarouselItem type="round" description="Data Warehousing & Mining">
            <div className="course">Data Warehousing & Mining</div>
          </CarouselItem>
          <CarouselItem type="round" description="Data Management in the Enterprise">
            <div className="course">Data Management in the Enterprise</div>
          </CarouselItem>
          <CarouselItem type="round" description="Management Information Systems">
            <div className="course">Management Information Systems</div>
          </CarouselItem>
          <CarouselItem type="round" description="Production and Operations Management">
            <div className="course">Production and Operations Management</div>
          </CarouselItem>
        </Carousel>
      </div>
    </div>
  );
}

export default Education;
