import { Option } from "../types";
export const NAV_LINKS = [
  { href: "/about", label: "Sobre" },
  { href: "/services", label: "Serviços" },
];

export const NAV_LINKS_DASHBOARD = [
  { href: "/dashboard", label: "Dashboard" },
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
  { value: "transfer", label: "Transferência" },
  { value: "income", label: "Receita" },
  { value: "expense", label: "Despesa" },
];

export const handleTranslateType = (type: string) => {
  switch (type) {
    case "income":
      return "Receita";
    case "expense":
      return "Despesa";
    case "transfer":
      return "Transferência";
    default:
      return type;
  }
};
