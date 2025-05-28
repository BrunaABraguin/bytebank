"use client";

import Button from "@/app/components/Button";
import InputValue from "@/app/components/InputValue";
import Select from "@/app/components/Select";
import { Toast } from "@/app/components/Toast";
import { transactionOptions } from "@/constants";
import { useAppContext } from "@/context/AppContext";
import { useCreateTransaction } from "@/hooks/useCreateTransaction";
import { useFetchAccount } from "@/hooks/useFetchAccount";
import { useFetchTransactions } from "@/hooks/useFetchTransactions";
import { FormValues, TransactionEnum } from "@/types";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const NewTransactionCard: React.FC = () => {
  const { account, user } = useAppContext();
  const { fetchTransactions } = useFetchTransactions();
  const { fetchAccount } = useFetchAccount();
  const { fetchCreateTransaction } = useCreateTransaction();
  const [showToast, setShowToast] = useState(false);
  const [showToastError, setShowToastError] = useState(false);
  const { handleSubmit, setValue } = useForm<FormValues>({
    defaultValues: {
      type: TransactionEnum.TRANSFER,
      amount: "",
      accountId: account?._id,
    },
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showToast]);

  const onSubmit = (data: FormValues) => {
    if (!account?._id) {
      setShowToastError(true);
      return;
    }
    fetchCreateTransaction(account._id, data.type, Number(data.amount))
      .then(() => {
        setShowToast(true);
        fetchTransactions(account._id).then(() => {
          if (user?._id) {
            fetchAccount(user._id);
          }
        });
      })
      .catch(() => {
        setShowToastError(true);
      });
  };

  return (
    <section className="relative bg-gray-dark rounded-xl p-6 min-h-[478px] overflow-hidden">
      {showToast && (
        <Toast
          type="success"
          message="Transação criada com sucesso!"
          onClose={() => setShowToast(false)}
        />
      )}
      {showToastError && (
        <Toast
          type="error"
          message="Erro ao atualizar as transações"
          onClose={() => setShowToastError(false)}
        />
      )}
      <div className="absolute top-0 right-0 w-32 h-32 bg-no-repeat bg-contain bg-[url('/pixels3.svg')]" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-no-repeat bg-contain bg-[url('/pixels4.svg')]" />
      <div className="absolute bottom-0 md:bottom-4 right-4 w-64 md:w-80 h-56 bg-no-repeat bg-contain bg-[url('/dashboard-transaction.svg')]" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative z-10 space-y-4 md:max-w-[60%]"
      >
        <h2 className="font-bold text-green-dark text-2xl text-center md:text-left">
          Nova transação
        </h2>

        <div className="space-y-3">
          <Select
            options={transactionOptions}
            selectChange={(option) =>
              setValue("type", option.value as TransactionEnum)
            }
          />
          <InputValue changeValue={(value) => setValue("amount", value)} />
          <div className="flex flex-col text-sm text-green-dark w-fit gap-4 text-center md:text-left font-semibold">
            <Button color="greenDark" type="submit">
              <span className="font-semibold">Concluir transação</span>
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
};
