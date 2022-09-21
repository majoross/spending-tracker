import { render, screen } from "@testing-library/react";
import SpendingRow from "./spendingRow.component";

const dummySpending = {
  id: 2,
  description: "ebed",
  amount: 1500.0,
  currency: "HUF",
  spent_at: "2020-08-26T15:23:16Z",
};
test("should render spendingRow component", () => {
  render(<SpendingRow spending={dummySpending} />);
  const currency = screen.getByTestId("currency-testid").innerHTML;
  const description = screen.getByTestId("description-testid").innerHTML;
  const amount = screen.getByTestId("spending-testid").innerHTML;
  const date = screen.getByTestId("date-testid").innerHTML;
  expect(currency).toBe("HUF");
  expect(description).toBe("ebed");
  expect(amount).toBe("1500Ft");
  expect(date).toBe("17:23 - August 3, 2020");
});
