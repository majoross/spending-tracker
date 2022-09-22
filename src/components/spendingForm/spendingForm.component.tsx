import React, { useState } from "react";
import { rootURL } from "../../helpers/urlHelper";
import { currencySelectModel } from "../../models/selectModels";
import { postSpendings } from "../../services/spenginsApi.service";
import { SpendingFormType } from "../../types/spendingForm.type";
import SelectComponent from "../select/select.component";
import "./spendingForm.styles.scss";

const formInitState = {
  amount: "",
  currency: "HUF",
  description: "",
  spent_at: "",
};

const SpendingForm = () => {
  const [formState, setFormState] = useState<SpendingFormType>(formInitState);

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

  const createSpending = (event: React.FormEvent) => {
    event.preventDefault();
    const date = new Date().toISOString();
    postSpendings(rootURL, { ...formState, spent_at: date });
    //I need to reset all components to default state so I found it easier to just reload the page itself
    window.location.reload();
  };

  return (
    <form className="spending-form" onSubmit={createSpending}>
      <input
        onChange={(event) => handleChange(event?.target.value, "description")}
        className="description-input"
        placeholder="description"
        value={formState.description}
        type="text"
        required
      />
      <input
        onChange={(event) => handleChange(event?.target.value, "amount")}
        className="amount-input"
        placeholder="0"
        value={formState.amount}
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
