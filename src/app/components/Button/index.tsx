import React from "react";

type ButtonVariant = "primary" | "outline";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
    primary:
        "bg-green text-white px-4 py-2 rounded-lg hover:bg-green-600 cursor-pointer",
    outline:
        "border border-green text-green-500 px-4 py-2 rounded-lg hover:bg-green-100 cursor-pointer",
};

export const Button: React.FC<ButtonProps> = ({
    variant = "primary",
    children,
    className = "",
    ...props
}) => (
    <button
        type="button"
        className={`${variantClasses[variant]} ${className}`}
        {...props}
    >
        {children}
    </button>
);

export default Button;