import "./SideMenu.css";

const SideMenu = ({ setIsOpen, isOpen }) => {
    return (
        <div className={`sidemenu ${isOpen ? "open" : "closed"}`}>
            <div className="slidemenu-header">
                <div className="cross" onClick={() => setIsOpen(!isOpen)}></div>
            </div>
            <ul className="sidemenu-list">
                <li>
                    <a href="#formations" onClick={() => setIsOpen(false)}>
                        Formations
                    </a>
                </li>
                <li>
                    <a href="#job" onClick={() => setIsOpen(false)}>
                        Métier
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SideMenu;
