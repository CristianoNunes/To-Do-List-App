import React from "react";
import { Task } from "../../types/Task";
import TaskItem from "../molecules/TaskItem";

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
  onEditTask: (id: string, newName: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleTask,
  onDeleteTask,
  onEditTask,
}) => (
  <div className="min-h-screen ">
    {tasks.map((task) => (
      <TaskItem
        key={task.id}
        id={task.id}
        name={task.name}
        completed={task.completed}
        onToggle={() => onToggleTask(task.id)}
        onDelete={onDeleteTask}
        onEdit={(newName: string) => onEditTask(task.id, newName)}
      />
    ))}
  </div>
);

export default TaskList;
