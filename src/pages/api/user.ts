import type { NextApiRequest, NextApiResponse } from "next";
import connectToMongoDB from "@/libs/mongoDB";
import User from "@/models/User";
import Account from "@/models/Account";
import Transaction from "@/models/Transaction";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToMongoDB();

  const user = await User.findOne({ email: "testuser@example.com" });

  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  const account = await Account.findOne({ ownerEmail: user._id.toString() });

  if (!account) {
    return res.status(200).json({ user, account: null, transactions: [] });
  }

  const transactions = await Transaction.find({
    accountId: account._id.toString(),
  })
    .sort({ date: -1 })
    .exec();

  return res.status(200).json({
    user: {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
    },
    account: {
      id: account._id.toString(),
    },
    transactions: transactions.map((transaction) => ({
      id: transaction._id.toString(),
      type: transaction.type,
      amount: transaction.amount,
      date: transaction.date.toISOString(),
    })),
  });
}

export default handler;
