export async function postTransaction(
  accountId: string,
  transactionType: string,
  value: number
): Promise<void> {
  if (process.env.NODE_ENV !== "production") {
    console.log("Mock atualizado");
    return;
  }
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
