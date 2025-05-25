import connectToMongoDB from "@/libs/mongoDB";
import User from "@/models/User";
import {
  User as UserType,
  Account as AccountType,
  Transaction as TransactionType,
} from "@/types";
import Transaction from "@/models/Transaction";
import Account from "@/models/Account";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import BalanceCard from "./components/BalanceCard";
import NewTransactionCard from "./components/NewTransactionCard";
import Statement from "./components/Statement";

export default async function Dashboard() {
  await connectToMongoDB();

  const user = await User.findOne({
    email: "testuser@example.com",
  }).lean<UserType>();

  if (!user) {
    return <div>Usuário não encontrado</div>;
  }

  const account = await Account.findOne({
    ownerEmail: user.email.toString(),
  }).lean<AccountType>();

  if (!account) {
    return (
      <div>
        <h1>Bem-vindo, {user.name}!</h1>
        <p>Você ainda não possui uma conta associada.</p>
      </div>
    );
  }

  const transactions = await Transaction.find({
    accountId: account._id.toString(),
  })
    .sort({ date: -1 })
    .lean<TransactionType[]>();

  return (
    <div className="bg-green-light">
      <Header user={user} />
      <div className="grid grid-cols-1 lg:grid-cols-4 min-h-screen xl:px-28">
        <Sidebar />
        <main className="md:col-span-2 px-6 space-y-6">
          <BalanceCard balance={account.balance} userName={user.name} />
          <NewTransactionCard />
          <aside className="block lg:hidden">
            <Statement transactions={transactions} />
          </aside>
        </main>
        <aside className="hidden lg:block h-full">
          <Statement transactions={transactions} />
        </aside>
      </div>
    </div>
  );
}
