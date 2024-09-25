import Button from "../../components/Button/Button";
import jobsList from "../../data/jobs.json";
import Slider from "react-slick";
import "./Job.css";

const Job = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3, // Montre 3 images à la fois
        slidesToScroll: 1, // Défiler d'une image à la fois
        centerMode: true, // Met en valeur l'image du centre et "peek" celles qui arrivent
        centerPadding: "60px", // Ajoute un espace pour voir un aperçu des images suivantes
    };

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
                        <button class="arrow_previous">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="19"
                                height="14"
                                viewBox="0 0 19 14"
                            >
                                <path
                                    fill="#FFF"
                                    fill-rule="evenodd"
                                    d="M6.96 14a.974.974 0 0 1 .685-1.658l-4.352-4.383L18.035 7.906A.97.97 0 0 1 19 6.932a.97.97 0 0 1-.967-.97l-14.724.053 4.335-4.356a.976.976 0 0 1 0-1.374.964.964 0 0 1-1.368 0l-5.993 6.02A.979.979 0 0 1 0 7v.002a.98.98 0 0 1 .282.679l5.993 6.035a.961.961 0 0 1 .685.286"
                                ></path>
                            </svg>
                        </button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="9"
                            height="20"
                            viewBox="0 0 9 22"
                        >
                            <path
                                fill="none"
                                fill-rule="nonzero"
                                stroke="#FFF"
                                stroke-linecap="square"
                                d="M.5 21.389L8.5.61"
                            ></path>
                        </svg>
                        <button class="arrow_next">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="19"
                                height="14"
                                viewBox="0 0 19 14"
                            >
                                <path
                                    fill="#FFF"
                                    fill-rule="evenodd"
                                    d="M12.04 14a.974.974 0 0 1-.685-1.658l4.352-4.383L.965 7.906A.97.97 0 0 1 0 6.932a.97.97 0 0 1 .967-.97l14.724.053-4.335-4.356a.976.976 0 0 1 0-1.374.964.964 0 0 1 1.368 0l5.993 6.02a.979.979 0 0 1 .283.69V7a.98.98 0 0 1-.282.679l-5.993 6.035a.961.961 0 0 1-.685.286"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Job;
