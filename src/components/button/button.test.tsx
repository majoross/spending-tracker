import { render } from "@testing-library/react";
import { ButtonProps } from "../../types/button.types";
import CustomButton from "./button.component";

const dummyButtonProps: ButtonProps = {
  id: 1,
  key: "HUF",
  value: "HUF",
};

describe(CustomButton, () => {
  it("should display correctly", () => {
    const { getByTestId } = render(
      <CustomButton
        handleClick={() => {}}
        selected={1}
        button={dummyButtonProps}
      />
    );
    const buttonValue = getByTestId("button-testid").innerHTML;
    expect(buttonValue).toEqual(dummyButtonProps.key);
  });
});
