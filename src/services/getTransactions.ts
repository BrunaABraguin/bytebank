import { transactions } from "@/data";
import { Transaction } from "@/types";

export const getTransactions = async (
  accountId: string
): Promise<Transaction[]> => {
  if (process.env.NODE_ENV !== "production") {
    console.log("Usando dados mockados para transações...");
    return new Promise((resolve) =>
      setTimeout(
        () =>
          resolve(
            transactions.filter(
              (transaction) => transaction.accountId === accountId
            )
          ),
        1000
      )
    );
  }
  try {
    const response = await fetch(`/api/transactions?accountId=${accountId}`);
    return await response.json();
  } catch {
    throw new Error("Erro ao buscar transações");
  }
};
