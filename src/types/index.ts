export type Option = {
  value: string;
  label: string;
  disabled?: boolean;
  selected?: boolean;
};

export type Transaction = {
  id: number;
  date: string;
  type: string;
  amount: number;
  month: string;
};

export type FormValues = {
  type: string;
  amount: string;
};
