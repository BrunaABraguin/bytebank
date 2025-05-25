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
  { value: "currency-exchange", label: "Câmbio de Moeda" },
  { value: "doc-ted", label: "DOC/TED" },
  { value: "loan-financing", label: "Empréstimo e Financiamento" },
  { value: "investment", label: "Investimento" },
  { value: "insurance", label: "Seguro" },
  { value: "credit-card", label: "Cartão de Crédito" },
  { value: "debit-card", label: "Cartão de Débito" },
  { value: "prepaid-card", label: "Cartão Pré-pago" },
  { value: "bill-payment", label: "Pagamento de Contas" },
  { value: "withdrawal-deposit", label: "Saque e Depósito" },
  { value: "deposit", label: "Depósito" },
  { value: "other-services", label: "Outros Serviços" },
];
