import type { NextApiRequest, NextApiResponse } from "next";
import Transaction from "@/models/Transaction";
import User from "@/models/User";
import Account from "@/models/Account"; // Import Account model
import { transactions } from "@/data";
import connectToMongoDB from "@/libs/mongoDB";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectToMongoDB();

    const account = await Account.create({
      ownerEmail: "testuser@example.com",
      balance: 1000,
    });

    const user = {
      name: "Test User",
      email: "testuser@example.com",
    };

    await User.create(user);
    const transactionsWithAccount = transactions.map(tx => ({
      ...tx,
      accountId: account._id
    }));
    await Transaction.insertMany(transactionsWithAccount);

    res.status(200).json({ message: "Usuário, conta e transações inseridos com sucesso!" });
  } catch (error) {
    console.error("Erro ao inserir usuário/conta/transações:", error);
    res.status(500).json({
      error: {
        message: "Erro ao inserir usuário/conta/transações.",
      },
    });
  }
}
