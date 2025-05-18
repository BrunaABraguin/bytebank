import { NAV_LINKS_DASHBOARD } from "@/constants";
import Link from "next/link";
import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div>
      <aside className="h-full lg:col-span-1 lg:bg-gray-light px-4 lg:py-6 rounded-lg">
        <nav className="text-green-dark font-medium text-center flex lg:flex-col px-6 max-lg:mb-6 max-lg:justify-between max-md:hidden">
          {NAV_LINKS_DASHBOARD.map(({ href, label }, idx) => (
            <Link
              key={href}
              href={href}
              className={`hover:text-green p-4 ${
                idx !== NAV_LINKS_DASHBOARD.length - 1
                  ? "hover:border-green border-b border-green-dark"
                  : "max-lg:hover:border-green max-lg:border-b max-lg:border-green-dark"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
