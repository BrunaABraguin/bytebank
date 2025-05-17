import React from "react";
import { Button } from "../Button";

interface LoginButtonsProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  color?: "green" | "black";
}

export const LoginButtons: React.FC<LoginButtonsProps> = ({
  color = "green",
  className = "",
}) => {
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      <Button variant="primary" color={color}>
        <span className="hidden lg:block">Abrir minha conta</span>
        <span className="block lg:hidden">Abrir conta</span>
      </Button>
      <Button
        variant="outline"
        color={color}
        onClick={() => window.location.assign("/dashboard")}
      >
        Já tenho conta
      </Button>
    </div>
  );
};
