import { HamburgerMenu } from "@/app/components/HamburguerMenu";
import { NAV_LINKS_DASHBOARD } from "@/constants";
import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-green-dark text-white p-5 flex justify-between md:justify-end items-center gap-4 xl:px-28 mb-6">
      <HamburgerMenu colorVariant="orange" links={NAV_LINKS_DASHBOARD} />
      <h1 className="text-sm font-medium hidden md:block">
        Joana da Silva Oliveira
      </h1>
      <Image src="/avatar.svg" alt="Avatar" width={40} height={40} />
    </header>
  );
};

export default Header;
