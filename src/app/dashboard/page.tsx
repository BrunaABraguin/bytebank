import connectToMongoDB from "@/libs/mongoDB";
import User from "@/models/User";
import Account from "@/models/Account";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import BalanceCard from "./components/BalanceCard";
import { NewTransactionCard } from "./components/NewTransactionCard";
import Statement from "./components/Statement";
import { User as UserType, Account as AccountType } from "@/types";

export default async function Dashboard() {
  await connectToMongoDB();

  const user = await User.findOne({
    email: "testuser@example.com",
  }).lean<UserType>();

  if (!user) {
    return <div>Usuário não encontrado</div>;
  }

  const account = await Account.findOne({
    ownerEmail: user.email,
  }).lean<AccountType>();

  if (!account) {
    return (
      <div>
        <h1>Bem-vindo, {user.name}!</h1>
        <p>Você ainda não possui uma conta associada.</p>
      </div>
    );
  }

  return (
    <div className="bg-green-light">
      <Header user={user} />
      <div className="grid grid-cols-1 lg:grid-cols-4 min-h-screen xl:px-28">
        <Sidebar />
        <main className="md:col-span-2 px-6 space-y-6">
          <BalanceCard userName={user.name} userEmail={user.email} />
          <NewTransactionCard accountId={account._id.toString()} />
          <aside className="block lg:hidden">
            <Statement accountId={account._id.toString()} />
          </aside>
        </main>
        <aside className="hidden lg:block h-full mb-8">
          <Statement accountId={account._id.toString()} />
        </aside>
      </div>
    </div>
  );
}
