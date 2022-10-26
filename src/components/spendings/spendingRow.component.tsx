import { CurrencyEnum, SpendingType } from "../../types/spenging.type";
import { formatDate } from "../../helpers/dateHelper";
import "./spendingRow.styles.scss";
import editIcon from "../../assets/edit.png";
import deleteIcon from "../../assets/delete.png";
import { createUrl } from "../../helpers/urlHelper";
import { deleteSpending } from "../../services/spenginsApi.service";

interface ISpendingRow {
  spending: SpendingType;
  deleteSpendingFromContext: (id: number) => void;
}

const SpendingRow = ({
  spending: { id, amount, currency, description, spent_at },
  deleteSpendingFromContext,
}: ISpendingRow) => {
  const handleDelete = (id: number) => {
    const deleteUrl = createUrl({ type: "DELETE", id });
    deleteSpending(deleteUrl);
    deleteSpendingFromContext(id);
  };

  return (
    <div className="spending-row">
      <div className="leftSide">
        <div className="currency-icon">
          <div data-testid="currency-testid" className="currency">
            {currency}
          </div>
        </div>
        <div className="description-date-wrapper">
          <div data-testid="description-testid" className="description">
            {description}
          </div>
          <div data-testid="date-testid" className="date">
            {formatDate(spent_at)}
          </div>
        </div>
      </div>
      <div className="rightSide">
        <div data-testid="spending-testid" className="spending">
          {currency === CurrencyEnum.HUF ? amount + "Ft" : "$" + amount}
        </div>
        {/* <div className="button edit-button">
          <img src={editIcon} className="edit-icon" />
        </div> */}
        <div className="button delete-button" onClick={() => handleDelete(id)}>
          <img src={deleteIcon} className="delete-icon" />
        </div>
      </div>
    </div>
  );
};

export default SpendingRow;
