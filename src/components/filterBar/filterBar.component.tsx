import { useContext, useEffect, useState } from "react";
import { SpendingContext } from "../../context/spendingsContext";
import { createUrl } from "../../helpers/urlHelper";
import { sortSelectModel } from "../../models/selectModels";
import { fetchSpendings } from "../../services/spenginsApi.service";
import { SpendingType } from "../../types/spenging.type";
import ButtonGroup from "../buttonGroup/buttonGroup.component";
import SelectComponent from "../select/select.component";
import Spendings from "../spendings/spendings.component";
import "./filterBar.styles.scss";

const FilterBar = () => {
  const [sortUrlParams, setSortUrlParams] = useState({
    orderBy: "-spent_at",
    currency: "",
  });

  useEffect(() => {
    fetchSpendings(createUrl({ type: "SORT", params: sortUrlParams })).then(
      (spendings: SpendingType[]) => {
        setSpendings(spendings);
      }
    );
  }, [sortUrlParams]);

  const { setSpendings } = useContext(SpendingContext);

  const handleOrderby = (value: string) => {
    setSortUrlParams({ ...sortUrlParams, orderBy: value });
  };

  const handleSortCurrency = (value: string) => {
    setSortUrlParams({ ...sortUrlParams, currency: value });
  };

  return (
    <div className="filter-bar-wrapper">
      <SelectComponent handleChange={handleOrderby} options={sortSelectModel} />
      <ButtonGroup clickHandler={handleSortCurrency} />
    </div>
  );
};

export default FilterBar;
