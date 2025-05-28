import { Transaction } from "@/types";

export const getTransactions = async (
  accountId: string
): Promise<Transaction[]> => {
  try {
    const response = await fetch(`/api/transactions?accountId=${accountId}`);
    return await response.json();
  } catch {
    throw new Error("Erro ao buscar transações");
  }
};
