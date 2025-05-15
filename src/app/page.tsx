import { Facebook, Gift, HandCoins, Instagram, MonitorSmartphone, Star, Youtube } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="bg-black text-white p-5 flex flex-wrap justify-between items-center">
        <div>
          <Image src="/logo.svg" alt="Bytebank" width={100} height={30} />
        </div>
        <nav className="flex gap-4 text-green-400">
          <a href="/sobre" className="hover:underline">
            Sobre
          </a>
          <a href="/servicos" className="hover:underline">
            Serviços
          </a>
        </nav>
        <div className="flex gap-2 mt-2 sm:mt-0">
          <button
            type="button"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Abrir minha conta
          </button>
          <button
            type="button"
            className="border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-100"
          >
            Já tenho conta
          </button>
        </div>
      </header>

      <main className="flex flex-wrap justify-between items-center px-6 py-10 bg-gradient-to-b from-[#003c4d] to-white">
        <div className="flex-1 min-w-[300px] text-[#001f29] text-2xl font-bold mb-8">
          <p>
            Experimente mais liberdade no controle da sua vida financeira.{" "}
            <br />
            Crie sua conta com a gente!
          </p>
        </div>
        <div className="flex-1 min-w-[300px] text-center">
          <Image
            src="/illustration.svg"
            alt="Gráfico e pessoa"
            width={400}
            height={300}
            className="mx-auto"
          />
        </div>
      </main>

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
            <div
              key={benefit.title}
              className="max-w-[220px] text-gray-600 text-center"
            >
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
}
