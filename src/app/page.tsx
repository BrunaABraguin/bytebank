import {
  Facebook,
  Gift,
  HandCoins,
  Instagram,
  MonitorSmartphone,
  Star,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Header from "./components/Header";
import { HomeGreetings } from "./components/HomeGreetings";

export default function Home() {
  return (
    <>
      <Header />
      <HomeGreetings />

      <section className="text-center py-10">
        <h2 className="text-xl font-bold mb-6">Vantagens do nosso banco:</h2>
        <div className="flex flex-wrap justify-center gap-6 px-4">
          {[
            {
              icon: (
                <Gift
                  className="mx-auto text-green-500"
                  size={40}
                  strokeWidth={1.5}
                />
              ),
              title: "Conta e cartão gratuitos",
              desc: "Conta digital sem custo fixo e sem tarifa de manutenção.",
            },
            {
              icon: (
                <HandCoins
                  className="mx-auto text-green-500"
                  size={40}
                  strokeWidth={1.5}
                />
              ),
              title: "Saques sem custo",
              desc: "4 saques gratuitos por mês em Banco 24h.",
            },
            {
              icon: (
                <Star
                  className="mx-auto text-green-500"
                  size={40}
                  strokeWidth={1.5}
                />
              ),
              title: "Programa de pontos",
              desc: "Acumule pontos sem pagar mensalidade.",
            },
            {
              icon: (
                <MonitorSmartphone
                  className="mx-auto text-green-500"
                  size={40}
                  strokeWidth={1.5}
                />
              ),
              title: "Seguro Dispositivos",
              desc: "Proteção para seus dispositivos com mensalidade simbólica.",
            },
          ].map((benefit) => (
            <div key={benefit.title} className="text-gray-600 text-center">
              {benefit.icon}
              <h3 className="text-green-600 mt-2 mb-1 font-semibold">
                {benefit.title}
              </h3>
              <p>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

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
};
