import { useEffect, useMemo, useState } from "react";
import { FaTasks, FaClock, FaCheckCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import {
  getTasks,
  deleteTask,
  updateTask,
} from "../../services/taskService";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import StatCard from "../../components/StatCard";
import TaskModal from "../../components/TaskModal";
import KanbanBoard from "../../components/KanbanBoard";

import "./Dashboard.css";

function DashboardPage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");

  const [openModal, setOpenModal] = useState(false);
  const [editTask, setEditTask] = useState(null);

  const fetchTasks = async () => {
    try {
      setLoading(true);

      const data = await getTasks();

      setTasks(Array.isArray(data) ? data : []);

      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Unable to load tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch = task.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesStatus =
        !statusFilter || task.status === statusFilter;

      const matchesPriority =
        !priorityFilter || task.priority === priorityFilter;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPriority
      );
    });
  }, [tasks, search, statusFilter, priorityFilter]);

  const totalTasks = tasks.length;

  const todoTasks = tasks.filter(
    (task) => task.status === "todo"
  ).length;

  const progressTasks = tasks.filter(
    (task) => task.status === "in-progress"
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.status === "done"
  ).length;

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this task?")) return;

    try {
      await deleteTask(id);
      fetchTasks();
    } catch (err) {
      alert(err.response?.data?.message || "Delete failed");
    }
  };

  return (
    <>
      <Sidebar />

      <div className="dashboard-content">

        <Header
          tasks={tasks}
          onNewTask={() => {
            setEditTask(null);
            setOpenModal(true);
          }}
        />

        <div className="stats-grid">

          <StatCard
            icon={<FaTasks />}
            title="Total Tasks"
            value={totalTasks}
            color="blue"
          />

          <StatCard
            icon={<FaClock />}
            title="In Progress"
            value={progressTasks}
            color="yellow"
          />

          <StatCard
            icon={<FaCheckCircle />}
            title="Completed"
            value={completedTasks}
            color="green"
          />

          <StatCard
            icon={<FaTasks />}
            title="Todo"
            value={todoTasks}
            color="red"
          />

        </div>

        <div className="toolbar">

          <div className="search-box">
  <FaSearch className="search-icon" />

  <input
    type="text"
    placeholder="Search tasks..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
</div>

          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value)
            }
          >
            <option value="">All Status</option>
            <option value="todo">Todo</option>
            <option value="in-progress">
              In Progress
            </option>
            <option value="done">
              Completed
            </option>
          </select>

          <select
            value={priorityFilter}
            onChange={(e) =>
              setPriorityFilter(e.target.value)
            }
          >
            <option value="">All Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

        </div>
                {loading ? (
  <div className="loading-state">
    <h3>Loading tasks...</h3>
  </div>
) : error ? (
  <div className="error-state">
    <h3>{error}</h3>
  </div>
) : (
  <>
    {/* Temporary Kanban Board */}
    <KanbanBoard
    tasks={filteredTasks}
    onStatusChange={async (task, status) => {
        await updateTask(task._id, {
            ...task,
            status,
        });

        fetchTasks();
    }}
/>

    
   
  </>
)}

        <TaskModal
          open={openModal}
          onClose={() => {
            setOpenModal(false);
            setEditTask(null);
          }}
          onSuccess={fetchTasks}
          editTask={editTask}
        />
      </div>
    </>
  );
}

export default DashboardPage;