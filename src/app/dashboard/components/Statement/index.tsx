import React from "react";

const Statement: React.FC = () => {
  return (
    <aside className="md:col-span-1 p-6">
      <h2 className="font-bold text-lg text-green-dark">Extrato</h2>
      <div className="flex gap-2 my-4">
        <button className="bg-green-dark text-white p-2 rounded-full">
          ✏️
        </button>
        <button className="bg-green-dark text-white p-2 rounded-full">
          🗑️
        </button>
      </div>
      <div className="space-y-4 text-sm text-green-dark">
        <div>
          <div className="font-semibold">Setembro</div>
          <div className="flex justify-between">
            Transferência <span>04/09</span>
          </div>
          <div className="text-red-500">-R$ 36,00</div>
        </div>
        <div>
          <div className="flex justify-between">
            Transferência <span>02/09</span>
          </div>
          <div className="text-red-500">-R$ 56,00</div>
        </div>
        <div className="pt-2">
          <div className="font-semibold">Agosto</div>
          <div className="flex justify-between">
            Transferência <span>30/10</span>
          </div>
          <div className="text-red-500">-R$ 50,00</div>
          <div className="flex justify-between">
            Transferência <span>27/10</span>
          </div>
          <div className="text-red-500">-R$ 86,00</div>
          <div className="flex justify-between">
            Depósito <span>23/10</span>
          </div>
          <div className="text-green">R$ 120,00</div>
          <div className="flex justify-between">
            Depósito <span>20/10</span>
          </div>
          <div className="text-green">R$ 40,00</div>
        </div>
        <div className="pt-2">
          <div className="font-semibold">Julho</div>
          <div className="flex justify-between">
            Transferência <span>18/07</span>
          </div>
          <div className="text-red-500">-R$ 420,00</div>
          <div className="flex justify-between">
            Transferência <span>21/07</span>
          </div>
          <div className="text-red-500">-R$ 186,00</div>
          <div className="flex justify-between">
            Transferência <span>19/07</span>
          </div>
          <div className="text-red-500">-R$ 12,00</div>
          <div className="flex justify-between">
            Depósito <span>19/07</span>
          </div>
          <div className="text-green500">R$ 60,00</div>
        </div>
      </div>
    </aside>
  );
};

export default Statement;
