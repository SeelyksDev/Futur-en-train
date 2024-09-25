import "./Header.css";
import logo from "../../assets/webp/logo-futur-en-train.webp";
import { useState, useEffect } from "react";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";

const Header = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(
        window.innerWidth < 1024
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1024px)");

        const handleResize = (e) => {
            setIsSmallScreen(e.matches);
        };

        mediaQuery.addEventListener("change", handleResize);

        return () => mediaQuery.removeEventListener("change", handleResize);
    }, []);

    return (
        <header>
            <nav>
                <img src={logo} alt="logo de futur en train" />
                {isSmallScreen ? (
                    <BurgerMenu />
                ) : (
                    <>
                        <ul className="nav-ul">
                            <li className="nav-li">Formations</li>
                            <li className="nav-li">Métiers</li>
                        </ul>
                        <BurgerMenu />
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;
