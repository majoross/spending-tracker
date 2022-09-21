import CustomButton from "../button/button.component";
import { useState } from "react";

const buttons = [
  {
    id: 1,
    key: "ALL",
    value: "",
  },
  {
    id: 2,
    key: "HUF",
    value: "HUF",
  },
  {
    id: 3,
    key: "USD",
    value: "USD",
  },
];

interface IButtonProps {
  clickHandler: (value: string) => void;
}

const ButtonGroup = ({ clickHandler }: IButtonProps) => {
  const [selectedButtonId, setSelectedButtonId] = useState(1);

  const handleClick = (value: string, id: number) => {
    setSelectedButtonId(id);
    clickHandler(value);
  };

  return (
    <div className="button-group">
      {buttons.map((button) => (
        <CustomButton
          key={button.id}
          selected={selectedButtonId}
          button={button}
          handleClick={handleClick}
        ></CustomButton>
      ))}
    </div>
  );
};

export default ButtonGroup;
