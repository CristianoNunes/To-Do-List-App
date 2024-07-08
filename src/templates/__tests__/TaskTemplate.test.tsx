import { render, fireEvent } from "@testing-library/react";
import TaskTemplate from "../TaskTemplate";
import { Task } from "../../types/Task";

const tasks: Task[] = [
  { id: "1", name: "Task 1", completed: false },
  { id: "2", name: "Task 2", completed: true },
];

const defaultProps = {
  tasks,
  newTask: "",
  onAddTask: jest.fn(),
  onNewTaskChange: jest.fn(),
  onToggleTask: jest.fn(),
  onDeleteTask: jest.fn(),
  onEditTask: jest.fn(),
};

test("renders TaskTemplate with tasks and input field", () => {
  const { getByText, getByRole } = render(<TaskTemplate {...defaultProps} />);
  expect(getByText("Task 1")).toBeInTheDocument();
  expect(getByText("Task 2")).toBeInTheDocument();
  expect(getByRole("textbox")).toBeInTheDocument();
});

test("calls onAddTask when Add Task button is clicked", () => {
  const { getByTestId } = render(<TaskTemplate {...defaultProps} />);
  fireEvent.click(getByTestId("add-button"));
  expect(defaultProps.onAddTask).toHaveBeenCalledTimes(1);
});

test("calls onNewTaskChange when input value changes", () => {
  const { getByRole } = render(<TaskTemplate {...defaultProps} />);
  fireEvent.change(getByRole("textbox"), { target: { value: "New Task" } });
  expect(defaultProps.onNewTaskChange).toHaveBeenCalledTimes(1);
});
