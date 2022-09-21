import { render, screen } from "@testing-library/react";
import SelectComponent from "./select.component";

test("should render", () => {
  render(
    <SelectComponent
      options={[
        { key: "HUF", value: "HUF" },
        { key: "USD", value: "USD" },
      ]}
      handleChange={() => {}}
    />
  );
  const element = screen.getByTestId("select-testId");
  expect(element).toBeInTheDocument();
});
