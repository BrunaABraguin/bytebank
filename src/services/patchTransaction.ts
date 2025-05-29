export async function patchTransaction(
  transactionId: string,
  transactionType: string,
  newValue: number
): Promise<void> {
  if (process.env.NODE_ENV !== "production") {
    console.log("Mock atualizado");
    return;
  }
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
