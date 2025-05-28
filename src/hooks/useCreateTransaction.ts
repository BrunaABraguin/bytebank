import { postTransaction } from "@/services/postTransaction";
import { useState } from "react";

export const useCreateTransaction = () => {
  const [loading, setLoading] = useState(false);

  const fetchCreateTransaction = async (
    id: string,
    type: string,
    value: number
  ): Promise<void> => {
    setLoading(true);
    try {
      const data = await postTransaction(id, type, value);
      return data;
    } finally {
      setLoading(false);
    }
  };

  return { fetchCreateTransaction, loading };
};
