import { render, screen } from "@testing-library/react";
import App from "./App";

test("App renders", () => {
  render(<App />);
  const appElement = screen.getByTestId("app-testid");
  expect(appElement).toBeInTheDocument();
});
