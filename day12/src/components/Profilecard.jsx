function ProfileCard({ name, role, college }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{role}</p>
      <p>{college}</p>
    </div>
  );
}

export default ProfileCard;