export type SpendingType = {
  id: number;
  descripton: string;
  amount: number;
  currency: string;
  spent_at: string;
};

export enum Currency {
  HUF = "HUF",
  USD = "USD",
}
