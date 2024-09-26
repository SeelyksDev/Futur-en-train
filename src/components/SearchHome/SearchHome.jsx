import { useState } from "react";
import arrowDownWhite from "../../assets/svg/arrow-down-white.svg";
import arrowRightColor from "../../assets/svg/arrow-right-color.svg";
import "./SearchHome.css";

const SearchHome = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="wrap-discover">
            <div className="wrap" onClick={() => setIsOpen(!isOpen)}>
                <div className="wrap-text">
                    Je suis <span>Etudiant</span>
                </div>
                <img
                    className={`arrow-down-white ${
                        isOpen ? "isOpen" : "isClosed"
                    }`}
                    src={arrowDownWhite}
                    alt="flèche vers le bas"
                />
            </div>
            <div className="discover-container">
                {/* Quand les pages seront faites, relier les liens */}
                <a href="#" id="discover-link">
                    <span>DÉCOUVRIR</span>
                    <img
                        src={arrowRightColor}
                        alt="flèche vers la droite rouge"
                    />
                </a>
            </div>
        </div>
    );
};

export default SearchHome;
