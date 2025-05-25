export type Option = {
  value: string;
  label: string;
  disabled?: boolean;
  selected?: boolean;
};

export enum TransactionEnum {
  INCOME = "income",
  EXPENSE = "expense",
  TRANSFER = "transfer",
}

export type Transaction = {
  _id: number;
  date: Date;
  type: TransactionEnum;
  amount: number;
};

export type FormValues = {
  type: TransactionEnum;
  amount: string;
};

export type Account = {
  _id: string;
  ownerEmail: string;
  balance: number;
  transactions: Transaction[];
};

export type User = {
  _id: string;
  account: Account;
  name: string;
  email: string;
};
