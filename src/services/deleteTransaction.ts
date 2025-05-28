export async function deleteTransaction(transactionId: string): Promise<void> {
  try {
    await fetch(`/api/transactions`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: transactionId,
      }),
    });
  } catch {
    throw new Error("Erro ao deletar transação");
  }
}
