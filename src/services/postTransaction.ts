export async function postTransaction(
  accountId: string,
  transactionType: string,
  value: number
): Promise<void> {
  try {
    await fetch(`/api/transactions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: transactionType,
        amount: value,
        accountId: accountId,
        date: new Date(),
      }),
    });
  } catch {
    throw new Error("Erro ao atualizar transação");
  }
}
