import "./BurgerMenu.css";

const BurgerMenu = () => {
    return (
        <div className="burger">
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
