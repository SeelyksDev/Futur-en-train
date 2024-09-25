import { useState } from "react";
import Button from "../../components/Button/Button";
import jobsList from "../../data/jobs.json";
import CarouselCard from "../../components/CarouselCard/CarouselCard";
import rightArrow from "../../assets/svg/arrow-right-white.svg";
import leftArrow from "../../assets/svg/arrow-left-white.svg";
import slash from "../../assets/svg/slash.svg";
import "./Job.css";

const Job = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <section id="job">
            <h2 className="job-title">Un métier, une formation, un avenir</h2>
            <p className="job-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Impedit, officiis consequatur. Excepturi laborum iure
                laboriosam, numquam, necessitatibus, odit possimus tenetur
                labore earum nostrum quis architecto eligendi reprehenderit?
            </p>
            <Button text="TOUS LES MÉTIERS" style="transparant" />
            <div className="carousel">
                <div className="carousel-header">
                    <h4 className="carousel-title">Métiers</h4>
                    <div className="arrows-container">
                        <button className="arrow_previous">
                            <img src={leftArrow} alt="flèche droite" />
                        </button>
                        <img src={slash} alt="slash" />
                        <button className="arrow_next">
                            <img src={rightArrow} alt="flèche droite" />
                        </button>
                    </div>
                </div>
                <div className="slider">
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
