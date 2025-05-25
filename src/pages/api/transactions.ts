import type { NextApiRequest, NextApiResponse } from "next";
import Transaction from "../../models/Transaction";
import connectMongoDB from "../../libs/mongoDB";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectMongoDB();

  if (req.method === "GET") {
    try {
      const transactions = await Transaction.find().sort({ date: -1 });
      res.status(200).json(transactions);
    } catch (error) {
      console.error("Erro ao buscar transações:", error);
      res.status(500).json({ error: "Erro ao buscar transações" });
    }
  } else if (req.method === "POST") {
    const { type, amount } = req.body;

    if (!type || !amount) {
      return res
        .status(400)
        .json({ error: "Campos obrigatórios não preenchidos" });
    }

    try {
      const newTransaction = await Transaction.create({
        type,
        amount,
        date: new Date(),
      });

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
