import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServicePillars } from "@/components/ServicePillars";
import { UseCasesSection } from "@/components/UseCasesSection";
import { OrderProcess } from "@/components/OrderProcess";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-canvas text-ink antialiased selection:bg-action/20 selection:text-ink">
      <Header />
      <main id="top" className="flex-1">
        <Hero />
        <ServicePillars />
        <UseCasesSection />
        <OrderProcess />
        <FaqAccordion />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
