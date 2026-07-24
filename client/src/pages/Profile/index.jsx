import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaUser,
  FaCalendarAlt,
} from "react-icons/fa";

import Sidebar from "../../components/Sidebar";
import { useAuth } from "../../context/AuthContext";
import { getTasks } from "../../services/taskService";

import "./Profile.css";

function Profile() {
  const { user } = useAuth();

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(Array.isArray(data) ? data : []);
    } catch (err) {
      console.log(err);
    }
  };

  const displayName = user?.name
    ? user.name.charAt(0).toUpperCase() + user.name.slice(1)
    : "";

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "done"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status !== "done"
  ).length;

  const productivity =
    totalTasks === 0
      ? 0
      : Math.round(
          (completedTasks / totalTasks) * 100
        );

  return (
    <>
      <Sidebar />

      <div className="profile-page">
        <div className="profile-card">

          <div className="profile-avatar">
            {displayName.charAt(0)}
          </div>

          <h2>{displayName}</h2>

          <p className="profile-subtitle">
            TaskCraft User
          </p>

          <div className="profile-stats">

            <div className="profile-stat-card">
              <h2>{totalTasks}</h2>
              <p>Total Tasks</p>
            </div>

            <div className="profile-stat-card">
              <h2>{completedTasks}</h2>
              <p>Completed</p>
            </div>

            <div className="profile-stat-card">
              <h2>{pendingTasks}</h2>
              <p>Pending</p>
            </div>

          </div>

          <div className="profile-info">

            <div className="profile-item">
              <FaUser className="profile-icon" />

              <div>
                <span>Name</span>
                <h4>{displayName}</h4>
              </div>
            </div>

            <div className="profile-item">
              <FaEnvelope className="profile-icon" />

              <div>
                <span>Email</span>
                <h4>{user?.email}</h4>
              </div>
            </div>

            <div className="profile-item">
              <FaCalendarAlt className="profile-icon" />

              <div>
                <span>Member Since</span>
                <h4>July 2026</h4>
              </div>
            </div>

            <div className="profile-item">

              <div className="profile-progress">

                <div className="progress-header">
                  <span>Productivity</span>
                  <span>{productivity}%</span>
                </div>

                <div className="progress-bar">

                  <div
                    className="progress-fill"
                    style={{
                      width: `${productivity}%`,
                    }}
                  />

                </div>

              </div>

            </div>

            <div className="profile-item">

              <div>

                <span>Account Status</span>

                <h4 className="active-status">
                  ● Active
                </h4>

              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default Profile;