import type { NextApiRequest, NextApiResponse } from "next";
import Transaction from "../../models/Transaction";
import connectToMongoDB from "@/libs/mongoDB";
import Account from "@/models/Account";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectToMongoDB();

  if (req.method === "GET") {
    try {
      const transactions = await Transaction.find().sort({ date: -1 });
      res.status(200).json(transactions);
    } catch (error) {
      console.error("Erro ao buscar transações:", error);
      res.status(500).json({ error: "Erro ao buscar transações" });
    }
  } else if (req.method === "POST") {
    const { type, amount, accountId } = req.body;

    if (!type || !amount || !accountId) {
      return res
        .status(400)
        .json({ error: "Campos obrigatórios não preenchidos" });
    }

    try {
      const newTransaction = await Transaction.create({
        type,
        amount,
        accountId,
        date: new Date(),
      });

      const account = await Account.findById(accountId);

      if (!account) {
        return res.status(404).json({ error: "Conta não encontrada" });
      }

      if (type === "income") {
        account.balance += amount;
      } else if (type === "expense" || type === "transfer") {
        account.balance -= amount;
      }

      await account.save();

      res.status(201).json(newTransaction);
    } catch (error) {
      console.error("Erro ao criar transação:", error);
      res.status(500).json({ error: "Erro ao criar transação" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
