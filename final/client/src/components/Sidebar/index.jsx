import { NavLink, useNavigate } from "react-router-dom";
import { FaTasks, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import "./Sidebar.css";

function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <h2>TaskCraft</h2>
      </div>

      <nav className="sidebar-menu">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <FaTasks />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <FaUserCircle />
          <span>Profile</span>
        </NavLink>

      </nav>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        <FaSignOutAlt />
        Logout
      </button>

    </aside>
  );
}

export default Sidebar;