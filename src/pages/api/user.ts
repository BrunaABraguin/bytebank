import type { NextApiRequest, NextApiResponse } from "next";
import connectToMongoDB from "@/libs/mongoDB";
import User from "@/models/User";
import { User as UserType } from "@/types";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToMongoDB();

  if (req.method === "POST") {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ message: "Nome e email são obrigatórios" });
    }

    try {
      const newUser = await User.create({ name, email });
      return res.status(201).json({
        user: {
          id: newUser._id.toString(),
          name: newUser.name,
          email: newUser.email,
        },
      });
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      return res.status(500).json({ message: "Erro ao criar usuário" });
    }
  }

  const user = await User.findOne({
    email: "testuser@example.com",
  }).lean<UserType>();

  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  return res.status(200).json({
    user: {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
    },
  });
}

export default handler;
