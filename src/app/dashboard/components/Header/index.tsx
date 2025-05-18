import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-green-dark text-white p-5 flex justify-end items-center gap-4 xl:px-28 mb-6">
      <h1 className="text-sm font-medium">Joana da Silva Oliveira</h1>
      <Image src="/avatar.svg" alt="Avatar" width={40} height={40} />
    </header>
  );
};

export default Header;
