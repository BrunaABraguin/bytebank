export async function deleteTransaction(transactionId: string): Promise<void> {
  if (process.env.NODE_ENV !== "production") {
    return;
  }

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
