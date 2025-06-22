"use client";
import { handleTranslateType, transactionOptions } from "@/constants";
import { useDeleteTransaction } from "@/hooks/useDeleteTransaction";
import { useEditTransaction } from "@/hooks/useEditTransaction";
import Button from "@ui/Button";
import Select from "@ui/Select";
import { Toast } from "@ui/Toast";
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
  const { fetchDeleteTransaction } = useDeleteTransaction();
  const { fetchPatchTransaction } = useEditTransaction();
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [confirmEdit, setConfirmEdit] = useState(false);
  const [editValue, setEditValue] = useState(value);
  const [editType, setEditType] = useState(type);
  const [showToastError, setShowToastError] = useState(false);

  const handleEdit = () => {
    if (editType !== type || editValue !== value) {
      fetchPatchTransaction(id, editType, Number(editValue))
        .then(() => {
          setConfirmEdit(false);
          setEditValue("");
          closeModal();
        })
        .catch(() => {
          setShowToastError(true);
        });
    } else {
      setConfirmEdit(false);
      setEditValue("");
      closeModal();
    }
  };

  const handleDelete = () => {
    fetchDeleteTransaction(id)
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
      <div className="grid pr-4 gap-8">
        <div className="flex pl-4 gap-2 justify-between">
          <span className="font-bold mb-2">Tipo de transação:</span>
          {confirmEdit ? (
            <Select
              options={transactionOptions}
              selectChange={(option) => setEditType(option.value)}
            />
          ) : (
            <span className="font-semibold">{handleTranslateType(type)}</span>
          )}
        </div>
        <div className="flex pl-4 gap-2 justify-between">
          <span className="font-bold mb-2">Valor:</span>
          {confirmEdit ? (
            <input
              type="number"
              className="font-semibold border rounded px-2 py-1"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
          ) : (
            <span className="font-semibold">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(value))}
            </span>
          )}
        </div>
      </div>
      {(confirmEdit || confirmDelete) && (
        <div className="flex pl-4 gap-2 mt-4">
          <span className="font-bold">Deseja confirmar a ação?</span>
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
