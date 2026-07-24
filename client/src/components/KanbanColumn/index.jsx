import { useDroppable } from "@dnd-kit/core";

import "./KanbanColumn.css";

function KanbanColumn({
  id,
  title,
  children,
}) {
  const { setNodeRef, isOver } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      className={`kanban-column ${isOver ? "drag-over" : ""}`}
    >
      <div className="kanban-column-header">
        <h3>{title}</h3>
      </div>

      <div className="kanban-column-body">
        {children}
      </div>
    </div>
  );
}

export default KanbanColumn;