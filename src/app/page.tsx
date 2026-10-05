"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FadeUp, GlowingCard, StaggerContainer, StaggerItem } from "@/components/ui/animations/MotionWrappers";
import { LayoutDashboard, Check, Terminal, Shield, Cpu, Zap, ArrowRight } from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export default function PremiumLandingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const techFeatures = [
    { title: "NextAuth v5 Middleware", desc: "Edge-compatible session route guards intercepting request bounds securely.", icon: Shield },
    { title: "MongoDB Driver Caching", desc: "Optimized connection pooling built directly into serverless endpoint runtimes.", icon: Cpu },
    { title: "Framer Motion Framework", desc: "Fluid, high-performance typography shifts and viewport scroll trackers.", icon: Zap },
    { title: "Pre-Configured CI Pipelines", desc: "Automated GitHub Actions linting validations validating build integrity.", icon: Terminal },
  ];

  const pricingTiers = [
    {
      name: "Developer Starter",
      price: billingPeriod === "monthly" ? "$0" : "$0",
      desc: "Perfect foundational codebase sandbox to kickstart your next MVP side project.",
      features: [
        "Next.js App Router Structure",
        "Secure Custom Login & Register views",
        "Basic Localhost MongoDB seeding configuration",
        "Responsive Mobile Sidebar Navigation Layout",
      ],
      cta: "Clone Template Free",
      href: "/login",
      popular: false,
    },
    {
      name: "Enterprise Stack",
      price: billingPeriod === "monthly" ? "$49" : "$39",
      desc: "For production-ready web deployments requiring scalable global cluster assets.",
      features: [
        "Everything included in Starter",
        "Advanced Security Dashboard Frame",
        "Full MongoDB Atlas production parameters",
        "Automated GitHub Actions workflow layers",
        "Priority Developer Layout Extensions",
      ],
      cta: "Explore Cloud Integration",
      href: "/login",
      popular: true,
    },
  ];

  return (
    <div className="min-h-screen text-zinc-100 flex flex-col justify-between selection:bg-emerald-500/30 selection:text-emerald-300">
      
      {/* 1. STICKY GLASSMORPHIC HEADER NAVBAR */}
      <header className="w-full border-b border-zinc-900 bg-zinc-950/60 backdrop-blur-md sticky top-0 z-50 px-4 md:px-8 py-4 flex items-center justify-between transition-all max-w-7xl mx-auto rounded-b-xl">
        <div className="flex items-center gap-2 font-semibold text-white tracking-wide">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <LayoutDashboard size={15} />
          </div>
          <span className="text-sm md:text-base font-bold">BaseProject.dev</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400 font-medium">
          <a href="#features" className="hover:text-zinc-200 transition-colors">Ecosystem Features</a>
          <a href="#pricing" className="hover:text-zinc-200 transition-colors">Pricing Tier Matrix</a>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/login" className="text-zinc-400 hover:text-white text-xs md:text-sm font-medium px-3 py-1.5 transition-colors">
            Sign In
          </Link>
          <Link href="/register" className="px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold text-xs md:text-sm rounded-lg shadow-md shadow-emerald-500/10 transition-colors">
            Get Started Free
          </Link>
        </div>
      </header>

      {/* CORE WRAPPER BODY CONTAINER */}
      <div className="flex-1 max-w-6xl mx-auto w-full px-4 md:px-6 py-12 md:py-24 space-y-32">
        
        {/* 2. ENHANCED HERO LAYOUT VIEW */}
        <section className="flex flex-col items-center justify-center text-center space-y-6 max-w-3xl mx-auto pt-6">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-[11px] font-medium text-emerald-400 shadow-inner">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              v1.0 Production Template Live
            </div>
          </FadeUp>
          
          <FadeUp delay={0.05}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400 leading-[1.1]">
              Build your next SaaS <span className="text-emerald-400">10x faster</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="text-zinc-400 text-sm md:text-lg max-w-xl mx-auto leading-relaxed">
              Skip weeks of boilerplate configuration. A premium clone-ready template complete with modular Auth, MongoDB caching pipelines, and a mobile-ready dashboard.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center w-full sm:w-auto">
              <Link href="/register" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-lg shadow-lg shadow-emerald-500/20 transition-all text-sm flex items-center justify-center gap-2 group cursor-pointer">
                <span>Start Building Now</span>
                <ArrowRight size={16} className="transform transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a 
                href="https://github.com/satoryuk/open-source-template" 
                target="_blank" 
                rel="noreferrer" 
                className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-white font-medium rounded-lg border border-zinc-800 transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Clone on GitHub</span>
              </a>
            </div>
          </FadeUp>
        </section>

        {/* 3. STAGGERED FEATURES GRID MATRIX */}
        <section id="features" className="space-y-12 scroll-mt-24">
          <FadeUp className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Full-Stack Core Telemetry Architecture</h2>
            <p className="text-zinc-500 text-xs md:text-sm max-w-md mx-auto">Everything you need to ship production apps securely configured out of the box.</p>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {techFeatures.map((feat, index) => {
              const Icon = feat.icon;
              return (
                <StaggerItem key={index}>
                  <GlowingCard className="h-full flex items-start gap-4 p-5 md:p-6">
                    <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg text-emerald-400 shrink-0">
                      <Icon size={18} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm md:text-base font-semibold text-white">{feat.title}</h3>
                      <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">{feat.desc}</p>
                    </div>
                  </GlowingCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </section>

        {/* 4. TIERED PRODUCT PRICING MATRICES */}
        <section id="pricing" className="space-y-12 scroll-mt-24">
          <FadeUp className="text-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Flexible Project Tiers</h2>
              <p className="text-zinc-500 text-xs md:text-sm max-w-md mx-auto">Start completely free under open-source MIT guidelines or scale up parameters seamlessly.</p>
            </div>
            
            {/* Interactive Billing Toggle */}
            <div className="inline-flex items-center gap-1 p-1 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-medium">
              <button 
                type="button"
                onClick={() => setBillingPeriod("monthly")}
                className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${billingPeriod === "monthly" ? "bg-zinc-800 text-white border border-zinc-700/60 shadow" : "text-zinc-400 hover:text-zinc-200"}`}
              >
                Monthly Term
              </button>
              <button 
                type="button"
                onClick={() => setBillingPeriod("yearly")}
                className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${billingPeriod === "yearly" ? "bg-zinc-800 text-white border border-zinc-700/60 shadow" : "text-zinc-400 hover:text-zinc-200"}`}
              >
                Annual Save 20%
              </button>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
            {pricingTiers.map((tier, idx) => (
              <FadeUp key={idx} delay={idx * 0.1} className="h-full">
                <div className={`relative h-full rounded-2xl bg-zinc-900/40 border p-6 md:p-8 flex flex-col justify-between backdrop-blur-sm transition-all duration-300 ${tier.popular ? "border-emerald-500/40 shadow-xl shadow-emerald-500/5" : "border-zinc-800"}`}>
                  {tier.popular && (
                    <span className="absolute -top-3 right-4 px-2.5 py-0.5 bg-emerald-500 text-black text-[10px] font-bold uppercase tracking-wider rounded-full">
                      Most Scalable
                    </span>
                  )}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-white">{tier.name}</h3>
                      <p className="text-xs text-zinc-400 mt-1">{tier.desc}</p>
                      <div className="mt-4 flex items-baseline gap-1">
                        <span className="text-3xl md:text-4xl font-extrabold text-white">{tier.price}</span>
                        <span className="text-xs text-zinc-500">{billingPeriod === "monthly" ? "/month" : "/month (billed annually)"}</span>
                      </div>
                    </div>

                    <div className="space-y-2.5 pt-4 border-t border-zinc-800/80">
                      <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Features Included</p>
                      {tier.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2.5 text-xs md:text-sm text-zinc-300">
                          <Check size={14} className="text-emerald-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-zinc-800/60">
                    <Link
                      href={tier.href}
                      className={`w-full py-2.5 px-4 rounded-lg font-semibold text-xs md:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        tier.popular
                          ? "bg-emerald-500 hover:bg-emerald-600 text-black shadow-lg shadow-emerald-500/20"
                          : "bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700/60"
                      }`}
                    >
                      <span>{tier.cta}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

      </div>

      {/* 5. FOOTER */}
      <footer className="w-full border-t border-zinc-900 bg-zinc-950/80 backdrop-blur-md px-4 md:px-8 py-8 mt-24">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <LayoutDashboard size={11} />
            </div>
            <span className="text-zinc-400 font-medium">BaseProject.dev</span>
            <span>—</span>
            <span>Released under the MIT License</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-zinc-300 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-zinc-300 transition-colors">Pricing</a>
            <Link href="/login" className="hover:text-zinc-300 transition-colors">Sign In</Link>
            <a 
              href="https://github.com/satoryuk/open-source-template" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-zinc-300 transition-colors flex items-center gap-1"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
