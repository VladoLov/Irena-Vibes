const Tour = ({ image, title, text, distance, duration }) => {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={image} className="tour-img" alt={title} />
        {/* <p className="tour-date">{distance}</p> */}
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{text}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>
            {distance}
          </p>
          <p>Distance: {distance} km</p>
          <p>Min: {duration} </p>
        </div>
      </div>
    </article>
  );
};

export default Tour;
