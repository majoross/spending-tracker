export type SpendingType = {
  id: number;
  description: string;
  amount: number;
  currency: string;
  spent_at: string;
};

export enum CurrencyEnum {
  HUF = "HUF",
  USD = "USD",
}

export type SortUrlParamsType = {
  currency:string;
  orderBy:string;
}