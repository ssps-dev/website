import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServiceHero from "@/components/ServiceHero";
import EquipmentTrading from "@/components/EquipmentTrading";
import OtherServices from "@/components/OtherServices";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { services } from "@/lib/services";

const service = services[1];

export const metadata: Metadata = {
  title: "Rig Components & Equipment Trading",
  description: service.description,
};

export default function EquipmentTradingPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-[1]">
        <ServiceHero
          number={service.number}
          subtitle={service.subtitle}
          titleLine1={service.titleLine1}
          titleAccent={service.titleAccent}
          description={service.description}
          stats={service.stats}
          iconName={service.iconName}
        />
        <EquipmentTrading />
        <OtherServices currentServiceId={service.id} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
