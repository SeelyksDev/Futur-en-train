import { useState, useRef, useEffect } from "react";
import Button from "../../components/Button/Button";
import jobsList from "../../data/jobs.json";
import CarouselCard from "../../components/CarouselCard/CarouselCard";
import rightArrow from "../../assets/svg/arrow-right-white.svg";
import leftArrow from "../../assets/svg/arrow-left-white.svg";
import slash from "../../assets/svg/slash.svg";
import "./Job.css";

const Job = () => {
    const carouselRef = useRef();
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const scrollNext = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: carouselRef.current.clientWidth,
                behavior: "smooth",
            });
        }
    };

    const scrollPrev = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -carouselRef.current.clientWidth,
                behavior: "smooth",
            });
        }
    };

    const checkScrollPosition = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } =
                carouselRef.current;
            setIsAtStart(scrollLeft === 0);
            setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
        }
    };

    useEffect(() => {
        const carouselElement = carouselRef.current;
        if (carouselElement) {
            checkScrollPosition();
            carouselElement.addEventListener("scroll", checkScrollPosition);

            return () => {
                carouselElement.removeEventListener(
                    "scroll",
                    checkScrollPosition
                );
            };
        }
    }, []);

    return (
        <section id="job">
            <div className="job-center-box">
                <h2 className="job-title">
                    Un métier, une formation, un avenir
                </h2>
                <p className="job-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, officiis consequatur. Excepturi laborum iure
                    laboriosam, numquam, necessitatibus, odit possimus tenetur
                    labore earum nostrum quis architecto eligendi reprehenderit?
                </p>
                <Button text="TOUS LES MÉTIERS" style="transparant all-jobs" />
            </div>
            <div className="carousel">
                <div className="carousel-header">
                    <h4 className="carousel-title">Métiers</h4>
                    <div className="arrows-container">
                        <button className="arrow_previous" onClick={scrollPrev}>
                            <img src={leftArrow} alt="flèche droite" />
                        </button>
                        <img src={slash} alt="slash" />
                        <button className="arrow_next" onClick={scrollNext}>
                            <img src={rightArrow} alt="flèche droite" />
                        </button>
                    </div>
                </div>
                <div ref={carouselRef} className="slider">
                    {jobsList.map((job, index) => (
                        <CarouselCard
                            key={index}
                            picture={job.picture}
                            text={job.text}
                            alt={job.alt}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Job;
