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
  _id: string;
  date: Date;
  type: TransactionEnum;
  amount: number;
  accountId: string;
};

export type FormValues = {
  type: TransactionEnum;
  amount: string;
  accountId: string;
};

export type Account = {
  _id: string;
  ownerId: string;
  balance: number;
};

export type User = {
  _id: string;
  name: string;
  email: string;
};
