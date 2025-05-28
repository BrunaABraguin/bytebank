export async function patchTransaction(
  transactionId: string,
  transactionType: string,
  newValue: number
): Promise<void> {
  try {
    await fetch(`/api/transactions`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: transactionId,
        type: transactionType,
        amount: newValue,
      }),
    });
  } catch {
    throw new Error("Erro ao atualizar transação");
  }
}
