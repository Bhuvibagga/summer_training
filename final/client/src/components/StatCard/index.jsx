import "./StatCard.css";

function StatCard({ icon, title, value, color }) {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${color}`}>
        {icon}
      </div>

      <div className="stat-content">
        <h4>{title}</h4>
        <h2>{value}</h2>
      </div>
    </div>
  );
}

export default StatCard;