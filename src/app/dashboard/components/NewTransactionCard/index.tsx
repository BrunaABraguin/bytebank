"use client";

import Button from "@/app/components/Button";
import InputValue from "@/app/components/InputValue";
import Select from "@/app/components/Select";
import { transactionOptions } from "@/constants";
import { FormValues } from "@/types";
import { useForm } from "react-hook-form";

const NewTransactionCard: React.FC = () => {
  const { handleSubmit, setValue } = useForm<FormValues>({
    defaultValues: {
      type: transactionOptions[0]?.value,
      amount: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <section className="relative bg-gray-dark rounded-xl p-6 min-h-[478px] overflow-hidden">
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
            selectChange={(option) => setValue("type", option.value)}
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

export default NewTransactionCard;
