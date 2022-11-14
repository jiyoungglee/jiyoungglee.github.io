import PropTypes from 'prop-types';
import '../Styles/CarouselItem.css';

function CarouselItem({ type, description, children }) {
  return (
    <div className="carousel-item">
      <div className={`icon-container ${type}`}>
        { children }
      </div>
      <div className="carousel-item-description">
        { description }
      </div>
    </div>
  );
}

CarouselItem.propTypes = {
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CarouselItem;
