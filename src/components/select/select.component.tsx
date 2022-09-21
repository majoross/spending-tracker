import React from "react";
import "./select.styles.scss";

interface ISelectComponent {
  options: { key: string; value: string }[];
  handleChange: (value: string) => void;
}

const SelectComponent = ({ options, handleChange }: ISelectComponent) => {
  const handleSelect = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    handleChange(event.target.value);
  };

  return (
    <div className="select-component">
      <select data-testid="select-testId" onChange={handleSelect}>
        {options.map(({ key, value }) => (
          <option key={key} value={value} label={key}></option>
        ))}
      </select>
    </div>
  );
};

export default SelectComponent;
