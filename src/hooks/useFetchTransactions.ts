import { Transaction } from "@/types";
import { useState } from "react";

export const useFetchTransactions = () => {
  const [loading, setLoading] = useState(false);

  const fetchTransactions = async (
    accountId: string,
    setTransactions: (data: Transaction[]) => void
  ): Promise<void> => {
    setLoading(true);
    try {
      const response = await fetch(`/api/transactions?accountId=${accountId}`);
      if (!response.ok) {
        throw new Error("Erro ao buscar transações");
      }
      const data = await response.json();
      setTransactions(data);
    } catch (error) {
      console.error("Erro ao buscar transações:", error);
    } finally {
      setLoading(false);
    }
  };

  return { fetchTransactions, loading };
};
