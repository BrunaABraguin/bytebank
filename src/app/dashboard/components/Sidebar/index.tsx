import Link from "next/link";
import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div>
      <aside className="h-full md:col-span-1 bg-gray-light px-4 py-6 rounded-lg">
        <nav className="text-green-dark font-medium text-center flex flex-col px-6">
          <Link href="/" className="font-bold p-4">
            Início
          </Link>
          <span
            className="border-t border-green-dark p-4 text-gray-400 cursor-not-allowed"
            aria-disabled="true"
          >
            Transferências
          </span>
          <span
            className="border-t border-green-dark p-4 text-gray-400 cursor-not-allowed"
            aria-disabled="true"
          >
            Investimentos
          </span>
          <span
            className="border-t border-green-dark p-4 text-gray-400 cursor-not-allowed"
            aria-disabled="true"
          >
            Outros serviços
          </span>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
