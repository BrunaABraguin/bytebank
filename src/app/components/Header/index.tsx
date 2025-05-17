import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button"; // Adjust the path if needed

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white p-5 flex flex-wrap justify-between items-center xl:px-28">
      <div className="flex flex-wrap items-center lg:gap-10">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Bytebank"
            width={150}
            height={32}
            className="hidden lg:block max-sm:block"
          />
          <Image
            src="/favicon.svg"
            alt="Bytebank"
            width={32}
            height={32}
            className="block lg:hidden max-sm:hidden"
          />
        </Link>
        <nav className="flex gap-4 text-green font-semibold text-lg">
          <Link href="/about" className="hover:underline hidden sm:block">
            Sobre
          </Link>
          <Link href="/services" className="hover:underline hidden sm:block">
            Serviços
          </Link>
        </nav>
      </div>
      <div className="flex gap-6 mt-2 sm:mt-0">
        <Button variant="primary" className="hidden sm:block">
          <text className="hidden lg:block">Abrir minha conta</text>
          <text className="block lg:hidden">Abrir conta</text>
        </Button>
        <Button variant="outline" className="hidden sm:block">
          Já tenho conta
        </Button>
      </div>
    </header>
  );
};

export default Header;
