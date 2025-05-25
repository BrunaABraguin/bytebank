import { Transaction } from "@/types";
import React from "react";

interface StatementProps {
  transactions: Transaction[];
}

const Statement: React.FC<StatementProps> = ({ transactions }) => {
  return (
    <aside className="bg-white rounded-lg p-8 md:col-span-1 max-lg:m-6">
      <h2 className="text-xl font-bold mb-4">Extrato</h2>
      {transactions.map((tx) => (
        <div key={tx.id} className="mb-4 border-b border-green pb-2">
          <div className="flex justify-between text-sm text-green font-semibold">
            <span>{tx.month}</span>
            <span className="text-gray-400">
              {new Date(tx.date).toLocaleDateString("pt-BR")}
            </span>
          </div>

          <div className="text-black font-medium">{tx.type}</div>

          <div
            className={`font-bold ${
              tx.amount < 0 ? "text-red-600" : "text-black"
            }`}
          >
            {tx.amount < 0 ? `-R$ ${Math.abs(tx.amount)}` : `R$ ${tx.amount}`}
          </div>
        </div>
      ))}
    </aside>
  );
};

export default Statement;
