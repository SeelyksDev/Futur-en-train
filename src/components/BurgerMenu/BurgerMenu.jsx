import "./BurgerMenu.css";

const BurgerMenu = ({ setIsOpen, isOpen }) => {
    return (
        <div className="burger" onClick={() => setIsOpen(!isOpen)}>
            <div className="burger-container">
                <span className="burger-bar"></span>
                <span className="burger-bar"></span>
                <span className="burger-bar"></span>
            </div>
            <div className="burger-text">MENU</div>
        </div>
    );
};

export default BurgerMenu;
