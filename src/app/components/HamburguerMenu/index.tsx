import { NAV_LINKS } from "@/constants";
import Link from "next/link";

export const HamburgerMenu: React.FC = () => (
  <nav className="sm:hidden relative">
    <input type="checkbox" id="menu-toggle" className="peer hidden" />
    <label
      htmlFor="menu-toggle"
      className="flex flex-col justify-center w-8 h-8 cursor-pointer"
    >
      <span className="sr-only">Abrir menu de navegação</span>
      <span className="block w-8 h-1 bg-green mb-1 rounded"></span>
      <span className="block w-8 h-1 bg-green mb-1 rounded"></span>
      <span className="block w-8 h-1 bg-green rounded"></span>
    </label>
    <div className="absolute left-0 mt-2 w-40 bg-black text-white rounded shadow-lg flex-col gap-2 py-2 px-4 z-50 hidden peer-checked:flex">
      {NAV_LINKS.map(({ href, label }) => (
        <Link key={href} href={href} className="hover:underline py-1 block">
          {label}
        </Link>
      ))}
    </div>
  </nav>
);
