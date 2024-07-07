import { render, fireEvent } from "@testing-library/react";
import Modal from "../Modal";

const defaultProps = {
  title: "Attention",
  message: "Do you really want to delete this task?",
  onConfirm: jest.fn(),
  onCancel: jest.fn(),
};

test("renders modal with title and message", () => {
  const { getByText } = render(<Modal {...defaultProps} />);
  expect(getByText("Attention")).toBeInTheDocument();
  expect(
    getByText("Do you really want to delete this task?")
  ).toBeInTheDocument();
});

test("calls onConfirm when Confirm button is clicked", () => {
  const { getByText } = render(<Modal {...defaultProps} />);
  fireEvent.click(getByText("Confirm"));
  expect(defaultProps.onConfirm).toHaveBeenCalledTimes(1);
});

test("calls onCancel when Cancel button is clicked", () => {
  const { getByText } = render(<Modal {...defaultProps} />);
  fireEvent.click(getByText("Cancel"));
  expect(defaultProps.onCancel).toHaveBeenCalledTimes(1);
});
