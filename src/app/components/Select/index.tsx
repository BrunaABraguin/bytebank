"use client";

import { Options } from "@/app/types";
import React, { useState } from "react";

interface SelectProps {
  options: Options;
}

const Select: React.FC<SelectProps> = ({ options }) => {
  const defaultOption = options.find((opt) => opt.selected) || options[0];
  const [selected, setSelected] = useState(defaultOption);
  const [open, setOpen] = useState(false);

  const handleSelect = (option: (typeof options)[0]) => {
    if (!option.disabled) {
      setSelected(option);
      setOpen(false);
    }
  };

  return (
    <div className="relative w-full max-w-sm">
      <button
        type="button"
        className="w-full border bg-white border-green-dark text-green-dark font-medium py-2 px-4 rounded-md flex justify-between items-center"
        onClick={() => setOpen((prev) => !prev)}
      >
        {selected.label}
        <svg
          className={`h-4 w-4 transform transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <ul className="absolute z-10 w-full border border-green-dark rounded-md bg-white shadow-md overflow-hidden">
          {options.map((option) => (
            <li key={option.value} className="list-none">
              <button
                type="button"
                onClick={() => handleSelect(option)}
                disabled={option.disabled}
                className={`w-full text-center py-2 px-4 transition-all ${
                  option.disabled
                    ? "text-gray-100 bg-gray-100 cursor-not-allowed font-normal"
                    : "hover:bg-blue-light hover:text-green-dark hover:font-bold cursor-pointer"
                } ${
                  selected.value === option.value
                    ? "bg-blue-light text-green-dark font-bold"
                    : "text-green-dark"
                }`}
                tabIndex={option.disabled ? -1 : 0}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
