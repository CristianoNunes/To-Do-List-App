import React, { useState } from "react";
import {
  MdOutlineModeEdit,
  MdOutlineSave,
  MdOutlineDeleteForever,
} from "react-icons/md";

import Checkbox from "../atoms/Checkbox";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

interface TaskItemProps {
  name: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
  onEdit: (newName: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  name,
  completed,
  onToggle,
  onDelete,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(name);

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value);
  };

  const handleEditSubmit = () => {
    onEdit(editValue);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center space-x-3">
      <Checkbox checked={completed} onChange={onToggle} />
      {isEditing ? (
        <Input value={editValue} onChange={handleEditChange} />
      ) : (
        <span className={completed ? "line-through" : ""}>{name}</span>
      )}
      <Button onClick={isEditing ? handleEditSubmit : () => setIsEditing(true)}>
        {isEditing ? <MdOutlineSave /> : <MdOutlineModeEdit />}
      </Button>
      <Button onClick={onDelete} type="danger">
        <MdOutlineDeleteForever />
      </Button>
    </div>
  );
};

export default TaskItem;
