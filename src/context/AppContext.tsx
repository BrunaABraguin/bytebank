"use client";
import { Account, Transaction, User } from "@/types";
import React, { createContext, useContext, useMemo, useState } from "react";

interface AppContextType {
  user: User | null;
  account: Account | null;
  transactions: Transaction[];
  setUser: (user: User) => void;
  setAccount: (account: Account) => void;
  setTransactions: (transactions: Transaction[]) => void;
  addTransaction: (transaction: Transaction) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [account, setAccount] = useState<Account | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const addTransaction = React.useCallback((transaction: Transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  }, []);

  const contextValue = useMemo(
    () => ({
      user,
      setUser,
      account,
      setAccount,
      transactions,
      setTransactions,
      addTransaction,
    }),
    [
      user,
      setUser,
      account,
      setAccount,
      transactions,
      setTransactions,
      addTransaction,
    ]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext deve ser usado dentro de um AppProvider");
  }
  return context;
};
