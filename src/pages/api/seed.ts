import type { NextApiRequest, NextApiResponse } from "next";
import connectToMongoDB from "@/libs/mongoDB";
import Transaction from "@/models/Transaction";
import { transactions } from "@/data";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectToMongoDB();
    await Transaction.insertMany(transactions);
    res.status(200).json({ message: "Transações inseridas com sucesso!" });
  } catch (error) {
    console.error("Erro ao inserir transações:", error);
    res.status(500).json({
      error: {
        message: "Erro ao inserir transações.",
      },
    });
  }
}
