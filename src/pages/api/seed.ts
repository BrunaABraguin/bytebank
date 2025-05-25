import type { NextApiRequest, NextApiResponse } from "next";
import connectToMongoDB from "@/libs/mongoDB";
import Transaction from "@/models/Transaction";
const transactions = [
  {
    type: "depósito",
    amount: 1000,
    description: "Salário",
  },
  {
    type: "pagamento",
    amount: 200,
    description: "Conta de luz",
  },
  {
    type: "transferência",
    amount: 500,
    description: "Transferência para João",
  },
  {
    type: "saque",
    amount: 100,
    description: "Saque em caixa eletrônico",
  },
  {
    type: "pagamento",
    amount: 300,
    description: "Mensalidade da escola",
  },
];

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
        uri: process.env.MONGODB_URI,
      },
    });
  }
}
