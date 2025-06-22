import React from "react";

interface InputValueProps {
  changeValue: (value: string) => void;
}

const InputValue: React.FC<InputValueProps> = ({ changeValue }) => (
  <div className="flex flex-col text-sm text-green-dark w-fit gap-4 text-center md:text-left font-semibold">
    <label htmlFor="amount">Valor</label>
    <input
      id="amount"
      type="text"
      placeholder="00,00"
      inputMode="decimal"
      pattern="^\d+([.,]\d{0,2})?$"
      className="w-fit border border-green-dark bg-white rounded px-4 py-2 text-sm"
      onChange={(e) => changeValue(e.target.value)}
    />
  </div>
);

export default InputValue;
