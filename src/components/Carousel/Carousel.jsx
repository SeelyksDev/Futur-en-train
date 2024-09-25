import "./CarouselCard.css";

const CarouselCard = ({ picture, text, alt }) => {
    return (
        <div>
            <img src={picture} alt={alt} />
            <h3>{text}</h3>
        </div>
    );
};

export default CarouselCard;
