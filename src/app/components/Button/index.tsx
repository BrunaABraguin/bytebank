import React from "react";

type ButtonColor = "green" | "black" | "orange";
type ButtonVariant = "primary" | "outline";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    color?: ButtonColor;
    children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, Record<ButtonColor, string>> = {
    primary: {
        green: "bg-green text-white px-4 py-2 rounded-lg hover:bg-green-600 cursor-pointer",
        black: "bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 cursor-pointer",
        orange: "bg-orange text-white px-4 py-2 rounded-lg hover:bg-orange-600 cursor-pointer",
    },
    outline: {
        green: "border border-green text-green-500 px-4 py-2 rounded-lg hover:bg-green-100 cursor-pointer",
        black: "border border-black text-black px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer",
        orange: "border border-orange text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-100 cursor-pointer",
    },
};

export const Button: React.FC<ButtonProps> = ({
    variant = "primary",
    color = "green",
    children,
    className = "",
    ...props
}) => (
    <button
        type="button"
        className={`${variantClasses[variant][color]} ${className}`}
        {...props}
    >
        {children}
    </button>
);

export default Button;