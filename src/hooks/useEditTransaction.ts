import { patchTransaction } from "@/services/patchTransaction";
import { useState } from "react";

export const useEditTransaction = () => {
  const [loading, setLoading] = useState(false);

  const fetchPatchTransaction = async (
    id: string,
    type: string,
    value: number
  ): Promise<void> => {
    setLoading(true);
    try {
      await patchTransaction(id, type, value);
    } finally {
      setLoading(false);
    }
  };

  return { fetchPatchTransaction, loading };
};
