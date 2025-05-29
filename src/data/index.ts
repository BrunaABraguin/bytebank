import { Account, Transaction, TransactionEnum } from "@/types";

export const transactions: Transaction[] = [
  {
    _id: "1",
    date: new Date("2024-01-01"),
    type: TransactionEnum.INCOME,
    amount: 1000,
    accountId: "1",
  },
  {
    _id: "2",
    date: new Date("2024-01-02"),
    type: TransactionEnum.TRANSFER,
    amount: -50,
    accountId: "1",
  },
  {
    _id: "3",
    date: new Date("2024-01-03"),
    type: TransactionEnum.INCOME,
    amount: 500,
    accountId: "1",
  },
  {
    _id: "4",
    date: new Date("2024-01-04"),
    type: TransactionEnum.INCOME,
    amount: 150,
    accountId: "1",
  },
];

export const account: Account = {
  _id: "1",
  ownerId: "mockid123",
  balance: 1500,
};
