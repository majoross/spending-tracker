import { CurrencyEnum, SpendingType } from "../../types/spenging.type";
import { formatDate } from "../../helpers/dateHelper";
import "./spendingRow.styles.scss";
import editIcon from "../../assets/edit.png";
import deleteIcon from "../../assets/delete.png";

interface ISpendingRow {
  spending: SpendingType;
}

const SpendingRow = ({
  spending: { amount, currency, description, spent_at },
}: ISpendingRow) => {
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
        <div className="button edit-button">
          <img src={editIcon} className="edit-icon" />
        </div>
        <div className="button delete-button">
          <img src={deleteIcon} className="delete-icon" />
        </div>
      </div>
    </div>
  );
};

export default SpendingRow;
