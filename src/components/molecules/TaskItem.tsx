import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  id: string;
  name: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: (id: string) => void;
  onEdit: (newName: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  id,
  name,
  completed,
  onToggle,
  onDelete,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editValue, setEditValue] = useState(name);
  const [isRemoved, setIsRemoved] = useState(false);

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
    setIsRemoved(true);
    setTimeout(() => onDelete(id), 500);
    setIsModalOpen(false);
  };

  const explodeAnimation = {
    hidden: { opacity: 1, scale: 1 },
    visible: { opacity: 0, scale: 1.5, transition: { duration: 0.5 } },
  };

  return (
    <>
      <AnimatePresence>
        {!isRemoved && (
          <motion.div
            key={id}
            initial="hidden"
            animate="hidden"
            exit="visible"
            variants={explodeAnimation}
            className="flex items-center justify-between w-full space-x-2 mb-2"
          >
            <div className="flex items-center bg-white space-x-2 w-full min-h-8 pl-2 rounded truncate">
              <Checkbox checked={completed} onChange={onToggle} />
              {isEditing ? (
                <Input
                  value={editValue}
                  onChange={handleEditChange}
                  className="max-h-8 flex-grow"
                />
              ) : (
                <span
                  className={`flex-grow pr-2 truncate ${
                    completed ? "line-through" : ""
                  }`}
                  title={name}
                >
                  {name}
                </span>
              )}
            </div>

            <div className="flex items-center space-x-1 min-h-8">
              <Button
                onClick={
                  isEditing ? handleEditSubmit : () => setIsEditing(true)
                }
                data-testid="edit-button"
              >
                {isEditing ? <MdOutlineSave /> : <MdOutlineModeEdit />}
              </Button>
              <Button
                onClick={handleDelete}
                typeButton="danger"
                data-testid="delete-button"
              >
                <MdOutlineDeleteForever />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
