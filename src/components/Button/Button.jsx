import "./Button.css";

const Button = ({ text, style }) => {
    return (
        <a className={style} href="#">
            {text}
        </a>
    );
};

export default Button;
