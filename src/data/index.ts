import { TransactionEnum } from "@/types";

export const transactions = [
  {
    type: TransactionEnum.INCOME,
    amount: 1000,
  },
  {
    type: TransactionEnum.TRANSFER,
    amount: -50,
  },
  {
    type: TransactionEnum.INCOME,
    amount: 500,
  },
  {
    type: TransactionEnum.INCOME,
    amount: 150,
  },
];
