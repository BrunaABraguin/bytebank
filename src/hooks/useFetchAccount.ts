import { useAppContext } from "@/context/AppContext";
import { getAccount } from "@/services/getAccount";
import { Account } from "@/types";
import { useState } from "react";

export const useFetchAccount = () => {
  const { setAccount } = useAppContext();
  const [loading, setLoading] = useState(false);

  const fetchAccount = async (id: string): Promise<Account> => {
    setLoading(true);
    try {
      const data = await getAccount(id);
      setAccount(data);
      return data;
    } finally {
      setLoading(false);
    }
  };

  return { fetchAccount, loading };
};
