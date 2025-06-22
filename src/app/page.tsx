import BenefitsSection from "@ui/BenefitsSection";
import Footer from "@ui/Footer";
import HeaderHome from "@ui/HeaderHome";
import { HomeGreetings } from "@ui/HomeGreetings";

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
