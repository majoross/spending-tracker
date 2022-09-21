import { useContext } from "react";
import { SpendingContext } from "../../context/spendingsContext";
import SpendingRow from "./spendingRow.component";
import "./spendings.styles.scss";

const Spendings = () => {
  const { spendings } = useContext(SpendingContext);

  return (
    <div className="spendings-container">
      {spendings.map((spending, index) => (
        <SpendingRow key={index} spending={spending} />
      ))}
    </div>
  );
};

export default Spendings;
