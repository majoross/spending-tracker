import { ButtonProps } from "../../types/button.types";
import "./button.styles.scss";

const CustomButton = ({
  button,
  selected,
  handleClick,
}: {
  button: ButtonProps;
  selected: number;
  handleClick: (value: string, id: number) => void;
}) => {
  const { id, key, value } = button;
  return (
    <button
      data-testid="button-testid"
      id="sort-button"
      className={id === selected ? "selected" : ""}
      onClick={() => handleClick(value, id)}
    >
      {key}
    </button>
  );
};

export default CustomButton;
