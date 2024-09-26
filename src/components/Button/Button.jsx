import "./Button.css";

const Button = ({ text, style }) => {
    return (
        <a className={style} href="#">
            {/* Quand les pages seront faites, relier les liens */}
            {text}
        </a>
    );
};

export default Button;
