import "./CarouselCard.css";

const CarouselCard = ({ picture, text, alt }) => {
    return (
        <div className="carousel-card">
            <img className="carousel-img" src={picture} alt={alt} />
            <h3 className="carousel-text">{text}</h3>
        </div>
    );
};

export default CarouselCard;
