"use client";

import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Header from "./components/Header";
import { HomeGreetings } from "./components/HomeGreetings";
import BenefitsSection from "./components/BenefitsSection";

export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-green-dark to-white">
        <HomeGreetings />
        <BenefitsSection />
      </div>

      <footer className="bg-black text-white p-10 flex flex-wrap gap-10 justify-between text-sm">
        <div>
          <h4 className="font-semibold mb-2">Serviços</h4>
          <p>Conta corrente</p>
          <p>Conta PJ</p>
          <p>Cartão de crédito</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contato</h4>
          <p>0800 004 250 08</p>
          <p>meajuda@bytebank.com.br</p>
          <p>ouvidoria@bytebank.com.br</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Desenvolvido por Alura</h4>
          <Image
            src="/logo-white.svg"
            alt="Logo Bytebank"
            width={100}
            height={20}
          />
          <div className="flex gap-3 mt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
              <Facebook />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
