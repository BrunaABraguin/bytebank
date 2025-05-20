import { Options } from "../types";

export const transactionOptions: Options = [
  {
    value: "",
    label: "Selecione o tipo de transação",
    disabled: true,
  },
  { value: "cambio", label: "Câmbio de Moeda" },
  { value: "doc-ted", label: "DOC/TED" },
  { value: "emprestimo", label: "Empréstimo e Financiamento" },
];
