import connectToMongoDB from "@/libs/mongoDB";
import User from "@/models/User";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import BalanceCard from "./components/BalanceCard";
import { NewTransactionCard } from "./components/NewTransactionCard";
import Statement from "./components/Statement";
import { User as UserType } from "@/types";

export default async function Dashboard() {
  await connectToMongoDB();

  const user = await User.findOne({
    email: "testuser@example.com",
  }).lean<UserType>();

  if (!user) {
    return <div>Usuário não encontrado</div>;
  }

  const serializedUser = {
    _id: user._id.toString(),
    name: user.name,
    email: user.email,
  };

  return (
    <div className="bg-green-light">
      <Header user={serializedUser} />
      <div className="grid grid-cols-1 lg:grid-cols-4 min-h-screen xl:px-28">
        <Sidebar />
        <main className="md:col-span-2 px-6 space-y-6">
          <BalanceCard userName={serializedUser.name} />
          <NewTransactionCard />
          <aside className="block lg:hidden">
            <Statement />
          </aside>
        </main>
        <aside className="hidden lg:block h-full mb-8">
          <Statement />
        </aside>
      </div>
    </div>
  );
}
