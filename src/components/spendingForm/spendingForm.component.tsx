import React, { useState } from "react";
import { rootURL } from "../../helpers/urlHelper";
import { currencySelectModel } from "../../models/selectModels";
import { postSpendings } from "../../services/spenginsApi.service";
import { SpendingFormType } from "../../types/spendingForm.type";
import SelectComponent from "../select/select.component";
import "./spendingForm.styles.scss";

interface ISpendingForm {}

const SpendingForm = (props: ISpendingForm) => {
  const [formState, setFormState] = useState<SpendingFormType>({
    amount: 0,
    currency: "HUF",
    description: "",
    spent_at: "",
  });

  const handleChange = (value: string, key: string) => {
    setFormState((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const selectChangeHandler = (value: string) => {
    setFormState((prev) => {
      return { ...prev, currency: value };
    });
  };

  const createSpending = async (event: React.FormEvent) => {
    event.preventDefault();
    const date = new Date().toISOString();
    await postSpendings(rootURL, { ...formState, spent_at: date });
  };

  return (
    <form className="spending-form" onSubmit={createSpending}>
      <input
        onChange={(event) => handleChange(event?.target.value, "description")}
        className="description-input"
        placeholder="description"
        type="text"
        required
      />
      <input
        onChange={(event) => handleChange(event?.target.value, "amount")}
        className="amount-input"
        placeholder="0"
        type="number"
        step="any"
        min="0"
        required
      />
      <SelectComponent
        handleChange={selectChangeHandler}
        options={currencySelectModel}
      />
      <button type="submit" className="save-button">
        Save
      </button>
    </form>
  );
};

export default SpendingForm;
