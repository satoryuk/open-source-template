import React from "react";
import Navbar from "@/components/marketing/Navbar";
import Hero from "@/components/marketing/Hero";
import Features from "@/components/marketing/Features";
import TechStack from "@/components/marketing/TechStack";
import Pricing from "@/components/marketing/Pricing";
import FAQ from "@/components/marketing/FAQ";
import Footer from "@/components/marketing/Footer";

export default function PremiumLandingPage() {
  return (
    <div className="min-h-screen text-zinc-100 flex flex-col justify-between selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* 1. Global Navigation Bar Component */}
      <Navbar />

      {/* Main Structural Multi-Section Layout Frame Core Wrapper */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 py-12 md:py-24 space-y-32">
        {/* 2. Hero Component */}
        <Hero />

        {/* 3. Core Features Grid */}
        <Features />

        {/* 4. Technology Stack Logo Cluster */}
        <TechStack />

        {/* 5. Cost Configuration Pricing Tier Layout */}
        <Pricing />

        {/* 6. FAQ Accordion Dropdown Block */}
        <FAQ />
      </div>

      {/* 7. Platform Layout Footer Console */}
      <Footer />
    </div>
  );
}
