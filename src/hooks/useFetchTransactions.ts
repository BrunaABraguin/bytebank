import { useAppContext } from "@/context/AppContext";
import { getTransactions } from "@/services/getTransactions";
import { useState } from "react";
import { Transaction } from "@/types";

export const useFetchTransactions = () => {
  const { setTransactions } = useAppContext();
  const [loadingTransactions, setLoadingTransactions] = useState(false);

  const fetchTransactions = async (
    accountId: string
  ): Promise<Transaction[]> => {
    setLoadingTransactions(true);
    try {
      const data = await getTransactions(accountId);
      setTransactions(data);
      return data;
    } finally {
      setLoadingTransactions(false);
    }
  };

  return { fetchTransactions, loadingTransactions };
};
