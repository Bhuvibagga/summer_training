import { useState } from "react";
import { FaBell, FaPlus } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import NotificationDropdown from "../NotificationDropdown";
import ThemeToggle from "../ThemeToggle";
import "./Header.css";

function Header({ tasks = [], onNewTask }) {
  const { user } = useAuth();

  const [showNotifications, setShowNotifications] = useState(false);

  const displayName = user?.name
    ? user.name.charAt(0).toUpperCase() + user.name.slice(1)
    : "";

  const greeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  // Today's date (without time)
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Count all tasks that need attention
  const notificationCount = tasks.filter((task) => {
    if (!task.dueDate || task.status === "done") return false;

    const due = new Date(task.dueDate);
    due.setHours(0, 0, 0, 0);

    const diff =
      (due - today) / (1000 * 60 * 60 * 24);

    // Overdue, today or within next 7 days
    return diff <= 7;
  }).length;

  return (
    <header className="header">
      <div className="header-left">
        <p className="header-greeting">
          {greeting()} 👋
        </p>

        <h1>{displayName}</h1>

        <p className="header-subtitle">
          Manage all your tasks from one place.
        </p>
      </div>

      <div className="header-actions">
  <ThemeToggle />

  <div className="notification-wrapper">
          <button
            type="button"
            className="notification-btn"
            onClick={() =>
              setShowNotifications(!showNotifications)
            }
          >
            <FaBell />

            {notificationCount > 0 && (
              <span className="notification-count">
                {notificationCount}
              </span>
            )}
          </button>

          {showNotifications && (
            <NotificationDropdown tasks={tasks} />
          )}
        </div>

        <button
          type="button"
          className="primary-btn"
          onClick={onNewTask}
        >
          <FaPlus />
          <span>New Task</span>
        </button>
      </div>
    </header>
  );
}

export default Header;