import { Transaction } from "@/types";
import React, { useEffect } from "react";
import { GetServerSideProps } from "next";
interface StatementProps {
  transactions: Transaction[];
}

export const getServerSideProps: GetServerSideProps<StatementProps> = async (
  context
) => {
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const host = context.req.headers.host;
  const baseUrl = `${protocol}://${host}`;
  const res = await fetch(`${baseUrl}/api/transactions`);
  const transactions = await res.json();
  return { props: { transactions } };
};

const Statement: React.FC = () => {
  const [transactions, setTransactions] = React.useState<Transaction[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const res = await fetch("/api/transactions");
      const data = await res.json();
      setTransactions(data);
    };

    fetchTransactions();
  }, []);

  const handleTranslateType = (type: string) => {
    switch (type) {
      case "income":
        return "Receita";
      case "expense":
        return "Despesa";
      case "transfer":
        return "Transferência";
      default:
        return type;
    }
  };

  return (
    <aside className="bg-white rounded-lg p-8 md:col-span-1 h-full">
      <h2 className="text-xl font-bold mb-4">Extrato</h2>
      {transactions.map((tx) => (
        <div key={tx._id} className="mb-4 border-b border-green pb-2">
          <div className="flex justify-between text-sm text-green font-semibold">
            <span>
              {(() => {
                const month = new Date(tx.date).toLocaleString("pt-BR", {
                  month: "long",
                });
                return month.charAt(0).toUpperCase() + month.slice(1);
              })()}
            </span>
            <span className="text-gray-400">
              {new Date(tx.date).toLocaleDateString("pt-BR")}
            </span>
          </div>

          <div className="text-black font-medium">{handleTranslateType(tx.type)}</div>

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
