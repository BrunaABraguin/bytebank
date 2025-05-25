import React from "react";
import { Button } from "../Button";
import Link from "next/link";

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
      <Link href="/dashboard">
        <Button
          variant="primary"
          color={color}
        >
          <span className="hidden lg:block">Abrir minha conta</span>
          <span className="block lg:hidden">Abrir conta</span>
        </Button>
      </Link>
      <Link href="/dashboard">
        <Button variant="outline" color={color}>
          Já tenho conta
        </Button>
      </Link>
    </div>
  );
};
