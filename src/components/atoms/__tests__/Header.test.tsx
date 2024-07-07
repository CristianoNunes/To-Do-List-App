import { render } from "@testing-library/react";
import Header from "../Header";

test("renders header with text", () => {
  const { getByText } = render(<Header text="TO-DO LIST" />);
  expect(getByText("TO-DO LIST")).toBeInTheDocument();
});
