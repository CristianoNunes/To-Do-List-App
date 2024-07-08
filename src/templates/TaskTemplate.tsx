import React from "react";
import { MdAdd } from "react-icons/md";

import Input from "../components/atoms/Input";
import Button from "../components/atoms/Button";
import TaskList from "../components/organisms/TaskList";
import { Task } from "../types/Task";
import Header from "../components/atoms/Header";

interface TaskTemplateProps {
  tasks: Task[];
  newTask: string;
  onAddTask: () => void;
  onNewTaskChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
  onEditTask: (id: string, newName: string) => void;
}

const TaskTemplate: React.FC<TaskTemplateProps> = ({
  tasks,
  newTask,
  onAddTask,
  onNewTaskChange,
  onToggleTask,
  onDeleteTask,
  onEditTask,
}) => (
  <div className="md:max-w-[430px] md:min-w-[430px] lg:max-w-[430px] lg:min-w-[430px]">
    <Header text="TO-DO LIST" />
    <div className="flex flex-nowrap space-x-2 mb-4 max-h-10">
      <Input
        value={newTask}
        onChange={onNewTaskChange}
        placeholder="Enter your next task here."
      />
      <Button onClick={onAddTask}>
        <MdAdd />
      </Button>
    </div>
    <TaskList
      tasks={tasks}
      onToggleTask={onToggleTask}
      onDeleteTask={onDeleteTask}
      onEditTask={onEditTask}
    />
  </div>
);

export default TaskTemplate;
