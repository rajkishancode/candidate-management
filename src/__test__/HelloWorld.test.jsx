import { render, screen } from "@testing-library/react";
import HelloWorld from "../components/HelloWorld";

test("renders hello message", () => {
  render(<HelloWorld name="React" />);
  expect(screen.getByText("Hello, React!")).toBeInTheDocument();
});
