import {
  DndContext,
  closestCenter,
} from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import "./KanbanBoard.css";

import TaskCard from "../TaskCard";
import KanbanColumn from "../KanbanColumn";

function KanbanBoard({
  tasks = [],
  onStatusChange,
}) {
  const todo = tasks.filter(
    (task) => task.status === "todo"
  );

  const progress = tasks.filter(
    (task) => task.status === "in-progress"
  );

  const completed = tasks.filter(
    (task) => task.status === "done"
  );

  const handleDragEnd = async ({ active, over }) => {
    if (!over) return;

    const task = tasks.find(
      (item) => item._id === active.id
    );

    if (!task) return;

    let newStatus = over.id;

    // Dropped over another task
    if (
      newStatus !== "todo" &&
      newStatus !== "in-progress" &&
      newStatus !== "done"
    ) {
      const targetTask = tasks.find(
        (item) => item._id === over.id
      );

      if (!targetTask) return;

      newStatus = targetTask.status;
    }

    if (task.status === newStatus) return;

    await onStatusChange(task, newStatus);
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div className="kanban-board">

        <KanbanColumn
          id="todo"
          title={`📋 Todo (${todo.length})`}
        >
          <SortableContext
            items={todo.map((task) => task._id)}
            strategy={verticalListSortingStrategy}
          >
            {todo.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
              />
            ))}
          </SortableContext>
        </KanbanColumn>

        <KanbanColumn
          id="in-progress"
          title={`🚀 In Progress (${progress.length})`}
        >
          <SortableContext
            items={progress.map((task) => task._id)}
            strategy={verticalListSortingStrategy}
          >
            {progress.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
              />
            ))}
          </SortableContext>
        </KanbanColumn>

        <KanbanColumn
          id="done"
          title={`✅ Completed (${completed.length})`}
        >
          <SortableContext
            items={completed.map((task) => task._id)}
            strategy={verticalListSortingStrategy}
          >
            {completed.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
              />
            ))}
          </SortableContext>
        </KanbanColumn>

      </div>
    </DndContext>
  );
}

export default KanbanBoard;