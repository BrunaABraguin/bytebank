"use client";
import Button from "@/app/components/Button";
import { Toast } from "@/app/components/Toast";
import { handleTranslateType } from "@/constants";
import React, { useState } from "react";

interface ModalContentProps {
  value: string;
  type: string;
  id: string;
  closeModal: () => void;
}

const ModalContent: React.FC<ModalContentProps> = ({
  value,
  type,
  id,
  closeModal,
}) => {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [confirmEdit, setConfirmEdit] = useState(false);
  const [editValue, setEditValue] = useState(value);
  const [showToastError, setShowToastError] = useState(false);

  const handleEdit = () => {
    fetch(`/api/transactions`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        type,
        amount: Number(editValue),
      }),
    })
      .then((response) => response.json())
      .then(() => {
        setConfirmEdit(false);
        setEditValue("");
        closeModal();
      })
      .catch(() => {
        setShowToastError(true);
      });
  };

  const handleDelete = () => {
    fetch(`/api/transactions`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        setConfirmDelete(false);
        setEditValue("");
        closeModal();
      })
      .catch(() => {
        setShowToastError(true);
      });
  };

  return (
    <>
      {showToastError && (
        <Toast
          type="error"
          message="Erro ao criar transação"
          onClose={() => setShowToastError(false)}
        />
      )}

      <div className="flex pl-4 gap-2">
        <span className="font-bold mb-2">Tipo de transação:</span>
        <span className="font-semibold">{handleTranslateType(type)}</span>
      </div>
      <div className="flex pl-4 gap-2">
        <span className="font-bold mb-2">Valor:</span>
        <span className="font-semibold">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(Number(value))}
        </span>
      </div>
      {(confirmEdit || confirmDelete) && (
        <div className="flex pl-4 gap-2">
          <span className="font-bold mb-2">Deseja confirmar a ação?</span>
        </div>
      )}

      <div className="flex gap-4 p-4">
        {!confirmEdit && !confirmDelete && (
          <>
            <Button onClick={() => setConfirmEdit(true)}>
              <span className="text-lg font-semibold mb-4">Editar</span>
            </Button>
            <Button color="orange" onClick={() => setConfirmDelete(true)}>
              <span className="text-lg font-semibold mb-4">Excluir</span>
            </Button>
          </>
        )}
        {confirmDelete && (
          <Button color="orange" onClick={() => handleDelete()}>
            <span className="text-lg font-semibold mb-4">
              Confirmar e excluir
            </span>
          </Button>
        )}
        {confirmEdit && (
          <Button color="green" onClick={() => handleEdit()}>
            <span className="text-lg font-semibold mb-4">
              Confirmar e editar
            </span>
          </Button>
        )}
      </div>
    </>
  );
};

export default ModalContent;
