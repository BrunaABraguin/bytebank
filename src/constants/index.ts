import { Option } from "../types";
export const NAV_LINKS = [
  { href: "/about", label: "Sobre" },
  { href: "/services", label: "Serviços" },
];

export const NAV_LINKS_DASHBOARD = [
  { href: "/dashboard", label: "Início" },
  { href: "/dashboard/transfer", label: "Transferências" },
  { href: "/dashboard/investments", label: "Investimentos" },
  { href: "/dashboard/services", label: "Outros serviços" },
];

export const transactionOptions: Option[] = [
  {
    value: "",
    label: "Selecione o tipo de transação",
    disabled: true,
  },
  { value: "cambio", label: "Câmbio de Moeda" },
  { value: "doc-ted", label: "DOC/TED" },
  { value: "emprestimo", label: "Empréstimo e Financiamento" },
];
