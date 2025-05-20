import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import BalanceCard from "./components/BalanceCard";
import NewTransactionCard from "./components/NewTransactionCard";
import Statement from "./components/Statement";

const Dashboard: React.FC = () => {
  return (
    <div className="bg-green-light">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-4 min-h-screen xl:px-28">
        <Sidebar />
        <main className="md:col-span-2 px-6 space-y-6">
          <BalanceCard balance={2500} />
          <NewTransactionCard />
        </main>
        <Statement />
      </div>
    </div>
  );
};

export default Dashboard;
