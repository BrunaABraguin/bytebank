"use client";

import HeaderHome from "./components/HeaderHome";
import { HomeGreetings } from "./components/HomeGreetings";
import BenefitsSection from "./components/BenefitsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <HeaderHome />
      <div className="bg-gradient-to-b from-green-dark to-white">
        <HomeGreetings />
        <BenefitsSection />
      </div>
      <Footer />
    </div>
  );
}
