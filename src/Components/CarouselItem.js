import '../Styles/CarouselItem.css';

function CarouselItem(props) {
  return ( 
    <div className="carousel-item">
      <div className={`icon-container ${props.type}`}>
        { props.children }
      </div>
      <div className="carousel-item-description">
        { props.description }
      </div>
  </div>
  )
}

export default CarouselItem;
