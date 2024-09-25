import Button from "../../components/Button/Button";
import Stats from "../../components/Stats/Stats";
import statsList from "../../data/stats.json";
import "./Informations.css";

const Informations = () => {
    return (
        <section id="informations">
            <h2 className="informations-title">
                Le ferroviaire, un secteur d’avenir en pleine mutation
            </h2>
            <p className="informations-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                tempore earum tenetur, a aliquid deleniti autem delectus numquam
                cumque cum possimus unde consequuntur impedit aut libero quas.
            </p>
            <Button text="EN SAVOIR PLUS" style="btn-gradient" />
            <section id="stats-container">
                {statsList.map((stat, index) => (
                    <Stats
                        key={index}
                        stats={stat.number}
                        title={stat.title}
                        subtitle={stat.subtitle}
                    />
                ))}
            </section>
        </section>
    );
};

export default Informations;
