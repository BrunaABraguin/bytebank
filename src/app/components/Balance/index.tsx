import React, { useState } from "react";
import Image from "next/image";

interface BalanceProps {
  balance: number;
}

const Balance: React.FC<BalanceProps> = ({ balance }) => {
  const [viewBalance, setViewBalance] = useState(true);

  return (
    <div className="z-10 text-left space-y-1 md:my-auto">
      <div className="flex items-center justify-left gap-4 font-bold py-2">
        <span>Saldo</span>
        <button
          type="button"
          onClick={() => setViewBalance((prev) => !prev)}
          aria-label={viewBalance ? "Ocultar saldo" : "Ver saldo"}
        >
          <Image
            src="/eye-white.svg"
            alt="Ver saldo"
            width={24}
            height={24}
            className={`${
              viewBalance ? "hidden" : "block"
            } transition-all duration-300`}
            style={{ width: "auto", height: "auto" }}
          />
          <Image
            src="/eye-orange.svg"
            alt="Ocultar saldo"
            width={24}
            height={24}
            className={`${
              viewBalance ? "block" : "hidden"
            } transition-all duration-300`}
            style={{ width: "auto", height: "auto" }}
          />
        </button>
      </div>
      <div className="border-t border-white my-1" />
      <div className="text-base">Conta Corrente</div>
      <div className="text-3xl">
        {viewBalance
          ? balance.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })
          : "••••••••"}
      </div>
    </div>
  );
};

export default Balance;
