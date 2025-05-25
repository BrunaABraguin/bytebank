"use client";

import { useEffect, useState } from "react";

interface UserGreetingsProps {
  name: string;
}

export const UserGreetings: React.FC<UserGreetingsProps> = ({ name }) => {
  const [greeting, setGreeting] = useState("");
  const [capitalizedDate, setCapitalizedDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    setCapitalizedDate(
      formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)
    );

    const currentHour = today.getHours();
    if (currentHour >= 5 && currentHour < 12) {
      setGreeting("Bom dia");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Boa tarde");
    } else {
      setGreeting("Boa noite");
    }
  }, []);

  if (!greeting || !capitalizedDate) return null;

  return (
    <div className="flex flex-col justify-center">
      <div className="z-10 space-y-2">
        <h2 className="text-2xl font-bold">
          {greeting}, {name}!
        </h2>
        <p className="text-sm">{capitalizedDate}</p>
      </div>
    </div>
  );
};
