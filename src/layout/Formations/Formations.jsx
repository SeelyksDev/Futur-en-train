import "./Formations.css";
import Button from "../../components/Button/Button";

const Formations = () => {
    return (
        <section id="formations">
            <h2 className="formations-title">
                Formations dans toute la France
            </h2>
            <p className="formations-text">
                Trouvez le centre de formation qui correspond à la zone
                géographique de votre choix
            </p>
            <Button text="LOCALISER UNE FORMATION" style="btn-gradient" />
        </section>
    );
};

export default Formations;
