import { deleteTransaction } from "@/services/deleteTransaction";
import { useState } from "react";

export const useDeleteTransaction = () => {
  const [loading, setLoading] = useState(false);

  const fetchDeleteTransaction = async (id: string): Promise<void> => {
    setLoading(true);
    try {
      await deleteTransaction(id);
    } finally {
      setLoading(false);
    }
  };

  return { fetchDeleteTransaction, loading };
};
