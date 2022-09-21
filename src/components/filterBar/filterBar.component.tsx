import { useContext, useEffect, useState } from "react";
import { SpendingContext } from "../../context/spendingsContext";
import { createUrl } from "../../helpers/urlHelper";
import { sortSelectModel } from "../../models/selectModels";
import { SpendingType } from "../../types/spenging.type";
import ButtonGroup from "../buttonGroup/buttonGroup.component";
import SelectComponent from "../select/select.component";
import "./filterBar.styles.scss";

const FilterBar = () => {
  const [sortUrlParams, setSortUrlParams] = useState({
    orderBy: "-spent_at",
    currency: "",
  });

  useEffect(() => {
    fetch(createUrl({ type: "SORT", params: sortUrlParams }))
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((spendings: SpendingType[]) => {
        setSpendings(spendings);
        return spendings;
      })
      .catch((error) => error.message);
  }, [sortUrlParams]);

  const { setSpendings } = useContext(SpendingContext);

  const handleOrderby = (value: string) => {
    setSortUrlParams((prev) => {
      return { ...prev, orderBy: value };
    });
  };
  const handleSortCurrency = (value: string) => {
    setSortUrlParams((prev) => {
      return { ...prev, currency: value };
    });
  };

  return (
    <div className="filter-bar-wrapper">
      <SelectComponent handleChange={handleOrderby} options={sortSelectModel} />
      <ButtonGroup clickHandler={handleSortCurrency} />
    </div>
  );
};

export default FilterBar;
