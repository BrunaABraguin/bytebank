import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 min-h-screen bg-[#eaf3ec]">
      {/* Sidebar */}
      <aside className="md:col-span-1 bg-white p-6">
        <nav className="space-y-6 text-[#004B5B] font-medium">
          <div className="font-bold">Início</div>
          <div className="border-t border-[#004B5B] pt-2">Transferências</div>
          <div className="border-t border-[#004B5B] pt-2">Investimentos</div>
          <div className="border-t border-[#004B5B] pt-2">Outros serviços</div>
        </nav>
      </aside>

      {/* Main content */}
      <main className="md:col-span-2 p-6 space-y-6">
        {/* Header */}
        <header className="flex justify-between items-center bg-[#004B5B] text-white px-6 py-4 rounded">
          <h1 className="text-lg font-medium">Olá, Joana! :)</h1>
          <div className="text-sm">Joana da Silva Oliveira</div>
        </header>

        {/* Balance Card */}
        <section className="bg-[#004B5B] text-white p-6 rounded space-y-4">
          <div className="text-sm">Quinta-feira, 08/09/2024</div>
          <div className="flex justify-between items-center">
            <span className="font-semibold">Saldo</span>
            <span>👁️</span>
          </div>
          <div className="text-xs">Conta Corrente</div>
          <div className="text-2xl font-bold">R$ 2.500,00</div>
        </section>

        {/* New Transaction */}
        <section className="bg-[#dcdedd] p-6 rounded space-y-4">
          <h2 className="font-semibold text-[#004B5B]">Nova transação</h2>
          <div className="space-y-2">
            <select className="w-full border border-gray-300 rounded px-4 py-2">
              <option>Selecione o tipo de transação</option>
            </select>
            <input
              type="text"
              placeholder="00,00"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <button className="w-full bg-[#004B5B] text-white font-semibold py-2 rounded">
              Concluir transação
            </button>
          </div>
        </section>
      </main>

      {/* Statement */}
      <aside className="md:col-span-1 p-6">
        <h2 className="font-bold text-lg text-[#004B5B]">Extrato</h2>
        <div className="flex gap-2 my-4">
          <button className="bg-[#004B5B] text-white p-2 rounded-full">
            ✏️
          </button>
          <button className="bg-[#004B5B] text-white p-2 rounded-full">
            🗑️
          </button>
        </div>
        <div className="space-y-4 text-sm text-[#004B5B]">
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
            <div className="text-green-500">R$ 120,00</div>
            <div className="flex justify-between">
              Depósito <span>20/10</span>
            </div>
            <div className="text-green-500">R$ 40,00</div>
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
            <div className="text-green-500">R$ 60,00</div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Dashboard;
