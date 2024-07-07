import { render, fireEvent } from "@testing-library/react";
import TaskItem from "../TaskItem";

const defaultProps = {
  name: "Task 1",
  completed: false,
  onToggle: jest.fn(),
  onDelete: jest.fn(),
  onEdit: jest.fn(),
};

test("renders task item with name", () => {
  const { getByText } = render(<TaskItem {...defaultProps} />);
  expect(getByText("Task 1")).toBeInTheDocument();
});

test("calls onToggle when checkbox is clicked", () => {
  const { getByRole } = render(<TaskItem {...defaultProps} />);
  fireEvent.click(getByRole("checkbox"));
  expect(defaultProps.onToggle).toHaveBeenCalledTimes(1);
});

test("calls onDelete when delete button is clicked", () => {
  const { getByTestId, getByText } = render(<TaskItem {...defaultProps} />);
  fireEvent.click(getByTestId("delete-button"));
  fireEvent.click(getByText("Confirm")); // Simula a confirmação da exclusão no modal
  expect(defaultProps.onDelete).toHaveBeenCalledTimes(1);
});

test("calls onEdit when edit button is clicked", () => {
  const { getByTestId } = render(<TaskItem {...defaultProps} />);
  fireEvent.click(getByTestId("edit-button"));
  expect(defaultProps.onEdit).toHaveBeenCalledTimes(0);
});
