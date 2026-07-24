import { useEffect, useState } from "react";
import { createTask, updateTask } from "../../services/taskService";
import "./TaskModal.css";

const statuses = ["todo", "in-progress", "done"];
const priorities = ["low", "medium", "high"];

function TaskModal({
  open,
  onClose,
  onSuccess,
  editTask,
}) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "todo",
    priority: "medium",
    dueDate: "",
  });

  useEffect(() => {
    if (editTask) {
      setForm({
        title: editTask.title || "",
        description: editTask.description || "",
        status: editTask.status || "todo",
        priority: editTask.priority || "medium",
        dueDate: editTask.dueDate?.slice(0, 10) || "",
      });
    } else {
      setForm({
        title: "",
        description: "",
        status: "todo",
        priority: "medium",
        dueDate: "",
      });
    }
  }, [editTask]);

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editTask) {
        await updateTask(editTask._id, form);
      } else {
        await createTask(form);
      }

      onSuccess();
      onClose();
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="task-modal">
        <h2>{editTask ? "Edit Task" : "New Task"}</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
            required
          />

          <textarea
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm({
                ...form,
                description: e.target.value,
              })
            }
          />

          <select
            value={form.status}
            onChange={(e) =>
              setForm({
                ...form,
                status: e.target.value,
              })
            }
          >
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>

          <select
            value={form.priority}
            onChange={(e) =>
              setForm({
                ...form,
                priority: e.target.value,
              })
            }
          >
            {priorities.map((priority) => (
              <option
                key={priority}
                value={priority}
              >
                {priority}
              </option>
            ))}
          </select>

          <input
            type="date"
            value={form.dueDate}
            onChange={(e) =>
              setForm({
                ...form,
                dueDate: e.target.value,
              })
            }
          />

          <div className="modal-actions">
            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-btn"
            >
              {editTask ? "Update Task" : "Save Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskModal;