import { useState, useEffect } from "react";
import logo from "../../assets/webp/logo-futur-en-train.webp";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import SideMenu from "../../components/SideMenu/SideMenu";
import "./Header.css";

const Header = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(
        window.innerWidth < 1024
    );
    const [isOpen, setIsOpen] = useState(false);

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
                    <>
                        <BurgerMenu setIsOpen={setIsOpen} isOpen={isOpen} />
                        {isOpen ? (
                            <SideMenu setIsOpen={setIsOpen} isOpen={isOpen} />
                        ) : null}
                    </>
                ) : (
                    <div className="nav-right">
                        <ul className="nav-ul">
                            <li className="nav-li">
                                <a href="#formations">Formations</a>
                            </li>
                            <li className="nav-li">
                                <a href="#job">Métiers</a>
                            </li>
                        </ul>
                        <BurgerMenu />
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
