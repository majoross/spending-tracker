import { useContext } from "react";
import { SpendingContext } from "../../context/spendingsContext";
import { SpendingType } from "../../types/spenging.type";
import SpendingRow from "./spendingRow.component";
import "./spendings.styles.scss";

const Spendings = () => {
  const { spendings, setSpendings } = useContext(SpendingContext);
  const handleDelete = (id: number) => {
    const refreshedSpendings = spendings.filter(
      (spending) => spending.id !== id
    );
    setSpendings(refreshedSpendings);
  };

  return (
    <div className="spendings-container">
      {spendings.map((spending, index) => (
        <SpendingRow
          key={index}
          spending={spending}
          deleteSpendingFromContext={handleDelete}
        />
      ))}
    </div>
  );
};

export default Spendings;
