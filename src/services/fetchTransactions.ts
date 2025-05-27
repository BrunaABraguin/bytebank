import { Transaction } from "@/types";

export const fetchTransactions = async (
  accountId: string
): Promise<Transaction[]> => {
  const response = await fetch(`/api/transactions?accountId=${accountId}`);
  if (!response.ok) {
    throw new Error("Erro ao buscar transações");
  }
  return response.json();
};
