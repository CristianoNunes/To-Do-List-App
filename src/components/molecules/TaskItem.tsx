import React from "react";
import Checkbox from "../atoms/Checkbox";
import Button from "../atoms/Button";

interface TaskItemProps {
  name: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  name,
  completed,
  onToggle,
  onDelete,
}) => (
  <div className="flex items-center space-x-3">
    <Checkbox checked={completed} onChange={onToggle} />
    <span className={completed ? "line-through" : ""}>{name}</span>
    <Button onClick={onDelete} type="danger">
      X
    </Button>
  </div>
);

export default TaskItem;
