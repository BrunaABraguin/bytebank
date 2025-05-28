import { Account } from "@/types";

export const getAccount = async (userId: string): Promise<Account> => {
  try {
    const response = await fetch(`/api/account?ownerId=${userId}`);
    return await response.json();
  } catch {
    throw new Error("Erro ao buscar transações");
  }
};
