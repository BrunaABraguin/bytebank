"use client";
import { Transaction } from "@/types";
import React, { useEffect, useState } from "react";
import { Modal } from "@/app/components/Modal";
import { ButtonEdit } from "../Buttons/ButtonEdit";
import ModalContent from "../ModalContent";
import { handleTranslateType } from "@/constants";
import { Toast } from "@/app/components/Toast";
import { useAppContext } from "@/context/AppContext";
import { useFetchTransactions } from "@/hooks/useFetchTransactions";

interface StatementProps {
  accountId: string;
}

const Statement: React.FC<StatementProps> = ({ accountId }) => {
  const { transactions, setTransactions } = useAppContext();
  const { fetchTransactions } = useFetchTransactions();
  const [showModal, setShowModal] = useState(false);
  const [showToastSuccess, setShowToastSuccess] = useState(false);
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);
  const isNegative = (type: string) => {
    return type !== "income";
  };

  useEffect(() => {
    fetchTransactions(accountId, setTransactions);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTransaction(null);
    setShowToastSuccess(true);
    fetchTransactions(accountId, setTransactions);
  };

  return (
    <>
      {showToastSuccess && (
        <Toast
          type="success"
          message="Transação criada com sucesso!"
          onClose={() => setShowToastSuccess(false)}
        />
      )}
      <div className="bg-white rounded-lg p-8 md:col-span-1">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Extrato</h2>
          <div className="flex gap-2">
            <Modal
              onClose={() => setShowModal(false)}
              isOpen={showModal}
              title={"Detalhes da transação"}
            >
              <ModalContent
                value={selectedTransaction?.amount.toString() ?? ""}
                type={selectedTransaction?.type ?? ""}
                id={selectedTransaction?._id ?? ""}
                closeModal={handleCloseModal}
              />
            </Modal>
          </div>
        </div>
        <div className="overflow-y-auto max-h-dvh">
          {transactions.length === 0 && (
            <div className="text-gray-500 text-center">
              Nenhuma transação encontrada.
            </div>
          )}
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

              <div className="text-black font-medium flex items-center gap-2">
                {handleTranslateType(tx.type)}

                <ButtonEdit
                  onClick={() => {
                    setSelectedTransaction(tx);
                    setShowModal(true);
                  }}
                />
              </div>

              <div
                className={`font-bold ${
                  isNegative(tx.type) ? "text-red-600" : "text-black"
                }`}
              >
                {isNegative(tx.type)
                  ? `-R$ ${Math.abs(tx.amount)}`
                  : `R$ ${tx.amount}`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Statement;
