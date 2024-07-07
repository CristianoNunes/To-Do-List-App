import React from "react";
import Checkbox from "../atoms/Checkbox";

interface TaskItemProps {
  name: string;
  completed: boolean;
  onToggle: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ name, completed, onToggle }) => (
  <div className="flex items-center space-x-3">
    <Checkbox checked={completed} onChange={onToggle} />
    <span className={completed ? "line-through" : ""}>{name}</span>
  </div>
);

export default TaskItem;
