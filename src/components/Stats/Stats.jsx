import "./Stats.css";

const Stats = ({ stats, title, subtitle }) => {
    return (
        <div className="stats">
            <h3 className="stats-number">{stats}</h3>
            <h4 className="stats-title">{title}</h4>
            <p className="stats-subtitle">{subtitle}</p>
        </div>
    );
};

export default Stats;
