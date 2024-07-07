import React, { useState } from "react";
import {
  MdOutlineModeEdit,
  MdOutlineSave,
  MdOutlineDeleteForever,
} from "react-icons/md";

import Checkbox from "../atoms/Checkbox";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Modal from "./Modal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editValue, setEditValue] = useState(name);

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value);
  };

  const handleEditSubmit = () => {
    onEdit(editValue);
    setIsEditing(false);
  };

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    onDelete();
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex items-center space-x-3">
        <Checkbox checked={completed} onChange={onToggle} />
        {isEditing ? (
          <Input value={editValue} onChange={handleEditChange} />
        ) : (
          <span className={completed ? "line-through" : ""}>{name}</span>
        )}
        <Button
          onClick={isEditing ? handleEditSubmit : () => setIsEditing(true)}
        >
          {isEditing ? <MdOutlineSave /> : <MdOutlineModeEdit />}
        </Button>
        <Button onClick={handleDelete} type="danger">
          <MdOutlineDeleteForever />
        </Button>
      </div>
      {isModalOpen && (
        <Modal
          title="Attention"
          message="Do you really want to delete this task?"
          onConfirm={confirmDelete}
          onCancel={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default TaskItem;
