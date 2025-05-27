"use client";
import { UserGreetings } from "@/app/components/UserGreetings";
import Balance from "@/app/components/Balance";
import { useCallback, useEffect, useState } from "react";

interface BalanceCardProps {
  userName: string;
  userEmail: string;
}

const BalanceCard: React.FC<BalanceCardProps> = ({ userName, userEmail }) => {
  const [currentBalance, setCurrentBalance] = useState<number>(0);
  const fetchBalance = useCallback(async () => {
    try {
      const response = await fetch(`/api/account?email=${userEmail}`);
      if (!response.ok) {
        throw new Error("Erro ao buscar saldo");
      }
      const data = await response.json();
      setCurrentBalance(data.balance);
    } catch (error) {
      console.error("Erro ao buscar saldo:", error);
      return 0;
    }
  }, [userEmail]);

  useEffect(() => {
    fetchBalance();
  }, [userEmail, fetchBalance]);

  return (
    <section className="relative bg-green-dark text-white rounded-lg overflow-hidden p-8 flex flex-col sm:flex-row md:justify-between items-center max-md:gap-8 md:items-start min-h-125 md:min-h-100">
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-no-repeat bg-contain bg-left bg-[url('/pixels1.svg')]" />
      <div className="absolute top-0 right-0 w-48 h-48 bg-no-repeat bg-contain bg-right bg-[url('/pixels2.svg')]" />
      <div className="absolute -bottom-4 left-10 w-56 h-56 bg-no-repeat bg-contain bg-[url('/dashboard-balance.svg')]" />

      <UserGreetings name={userName} />
      <Balance balance={currentBalance} />
    </section>
  );
};

export default BalanceCard;
