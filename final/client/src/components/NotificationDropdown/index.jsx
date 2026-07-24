import "./NotificationDropdown.css";

function NotificationDropdown({ tasks = [] }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isSameDay = (date1, date2) =>
    date1.toDateString() === date2.toDateString();

  const overdueTasks = tasks.filter((task) => {
    if (!task.dueDate || task.status === "done") return false;

    const due = new Date(task.dueDate);
    due.setHours(0, 0, 0, 0);

    return due < today;
  });

  const dueTodayTasks = tasks.filter((task) => {
    if (!task.dueDate || task.status === "done") return false;

    const due = new Date(task.dueDate);
    due.setHours(0, 0, 0, 0);

    return isSameDay(due, today);
  });

  const upcomingTasks = tasks.filter((task) => {
    if (!task.dueDate || task.status === "done") return false;

    const due = new Date(task.dueDate);
    due.setHours(0, 0, 0, 0);

    const diff =
      (due - today) / (1000 * 60 * 60 * 24);

    return diff > 0 && diff <= 7;
  });

  const noNotifications =
    overdueTasks.length === 0 &&
    dueTodayTasks.length === 0 &&
    upcomingTasks.length === 0;

  return (
    <div className="notification-dropdown">
      <h3>Notifications</h3>

      {noNotifications ? (
        <div className="notification-empty">
          🎉 You're all caught up!
        </div>
      ) : (
        <>
          {overdueTasks.map((task) => (
            <div
              key={task._id}
              className="notification-item overdue"
            >
              <h4>{task.title}</h4>
              <p>🔴 Overdue</p>
            </div>
          ))}

          {dueTodayTasks.map((task) => (
            <div
              key={task._id}
              className="notification-item today"
            >
              <h4>{task.title}</h4>
              <p>🟡 Due Today</p>
            </div>
          ))}

          {upcomingTasks.map((task) => (
            <div
              key={task._id}
              className="notification-item upcoming"
            >
              <h4>{task.title}</h4>
              <p>
                🟢 Due{" "}
                {new Date(task.dueDate).toLocaleDateString()}
              </p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default NotificationDropdown;