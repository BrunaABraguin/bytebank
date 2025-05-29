import connectToMongoDB from "@/libs/mongoDB";
import User from "@/models/User";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import BalanceCard from "./components/BalanceCard";
import { NewTransactionCard } from "./components/NewTransactionCard";
import Statement from "./components/Statement";
import {
  Account as AccountType,
  Transaction as TransactionType,
  User as UserType,
} from "@/types";
import Account from "@/models/Account";
import Transaction from "@/models/Transaction";
import { transactions as transactionsMock } from "@/data";

export default async function Dashboard() {
  let user: UserType | null;
  let transactions: TransactionType[] = [];

  if (process.env.NODE_ENV !== "production") {
    user = {
      _id: "507f1f77bcf86cd799439011",
      name: "Usuário de Teste",
      email: "mockuser@example.com",
    } as UserType;
    transactions = transactionsMock;
  } else {
    await connectToMongoDB();

    user = await User.findOne({
      email: "testuser@example.com",
    }).lean<UserType>();

    const account = await Account.findOne({
      ownerId: user?._id,
    }).lean<AccountType>();

    if (account)
      transactions = await Transaction.find({
        accountId: account._id,
      }).lean<TransactionType[]>();
  }

  if (!user) {
    return <div>Usuário não encontrado</div>;
  }

  const serializedUser = {
    _id: user._id.toString(),
    name: user.name,
    email: user.email,
  };

  const serializedTransactions = transactions.map((transaction) => ({
    ...transaction,
    _id: transaction._id.toString(),
    accountId: transaction.accountId?.toString?.() ?? transaction.accountId,
  }));

  return (
    <div className="bg-green-light">
      <Header user={serializedUser} />
      <div className="grid grid-cols-1 lg:grid-cols-4 min-h-screen xl:px-28">
        <Sidebar />
        <main className="md:col-span-2 px-6 space-y-6">
          <BalanceCard userName={serializedUser.name} />
          <NewTransactionCard />
          <aside className="block lg:hidden">
            <Statement initialTransactions={serializedTransactions} />
          </aside>
        </main>
        <aside className="hidden lg:block h-full mb-8">
          <Statement initialTransactions={serializedTransactions} />
        </aside>
      </div>
    </div>
  );
}
