import { account } from "@/data";
import { Account } from "@/types";

export const getAccount = async (userId: string): Promise<Account> => {
  if (process.env.NODE_ENV !== "production") {
    console.log("Usando dados mockados para conta...");
    return new Promise((resolve) => setTimeout(() => resolve(account), 1000));
  }
  try {
    const response = await fetch(`/api/account?ownerId=${userId}`);
    return await response.json();
  } catch {
    throw new Error("Erro ao buscar transações");
  }
};
