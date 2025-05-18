import React from "react";
import Image from "next/image";

const BalanceCard: React.FC = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const capitalizedDate =
    formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

  return (
    <section className="relative bg-green-dark text-white rounded-lg overflow-hidden p-8 flex justify-between items-start min-h-100">
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-no-repeat bg-contain bg-left bg-[url('/pixels1.svg')]" />
      <div className="absolute top-0 right-0 w-48 h-48 bg-no-repeat bg-contain bg-right bg-[url('/pixels2.svg')]" />
      <div className="absolute -bottom-4 left-10 w-56 h-56 bg-no-repeat bg-contain bg-[url('/dashboard-balance.svg')]" />

      <div className="z-10 space-y-2">
        <h1 className="text-2xl font-bold">Olá, Joana! :)</h1>
        <p className="text-sm">{capitalizedDate}</p>
      </div>
      <div className="z-10 text-left space-y-1 my-auto">
        <div className="flex items-center justify-left gap-4 font-bold py-2">
          <span>Saldo</span>
          <Image src="/eye-white.svg" alt="Ver saldo" width={24} height={24} />
        </div>
        <div className="border-t border-white my-1" />
        <div className="text-base">Conta Corrente</div>
        <div className="text-3xl">R$ 2.500,00</div>
      </div>
    </section>
  );
};

export default BalanceCard;
