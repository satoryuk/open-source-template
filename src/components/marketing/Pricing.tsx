"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/ui/animations/MotionWrappers";

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const pricingTiers = [
    {
      name: "Developer Starter",
      price: "$0",
      desc: "Perfect foundational codebase sandbox to kickstart your next MVP side project.",
      features: [
        "Next.js App Router Structure",
        "Secure Custom Login & Register views",
        "Basic Localhost MongoDB seeding",
        "Responsive Mobile Sidebar Navigation",
      ],
      cta: "Clone Template Free",
      href: "/login",
      popular: false,
    },
    {
      name: "Enterprise Pro",
      price: billingPeriod === "monthly" ? "$49" : "$39",
      desc: "For production-ready web deployments requiring scalable global cluster assets.",
      features: [
        "Everything included in Starter",
        "Advanced Security Dashboard Frame",
        "Full MongoDB Atlas parameters",
        "Automated GitHub Actions logs",
        "Priority Code Extensions",
      ],
      cta: "Explore Cloud Integration",
      href: "/login",
      popular: true,
    },
  ];

  return (
    <section id="pricing" className="space-y-12 scroll-mt-24">
      <FadeUp className="text-center space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Flexible Project Tiers</h2>
          <p className="text-zinc-500 text-xs md:text-sm max-w-md mx-auto">
            Start completely free under open-source MIT guidelines or scale up parameters seamlessly.
          </p>
        </div>

        {/* Interactive Billing Toggle */}
        <div className="inline-flex items-center gap-1 p-1 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-medium">
          <button
            type="button"
            onClick={() => setBillingPeriod("monthly")}
            className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
              billingPeriod === "monthly"
                ? "bg-zinc-800 text-white border border-zinc-700/60 shadow"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Monthly Term
          </button>
          <button
            type="button"
            onClick={() => setBillingPeriod("yearly")}
            className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
              billingPeriod === "yearly"
                ? "bg-zinc-800 text-white border border-zinc-700/60 shadow"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Annual Save 20%
          </button>
        </div>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
        {pricingTiers.map((tier, idx) => (
          <FadeUp key={idx} delay={idx * 0.1} className="h-full">
            <div
              className={`relative h-full rounded-2xl bg-zinc-900/40 border p-6 md:p-8 flex flex-col justify-between backdrop-blur-sm transition-all duration-300 ${
                tier.popular
                  ? "border-emerald-500/40 shadow-xl shadow-emerald-500/5"
                  : "border-zinc-800"
              }`}
            >
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
                    <span className="text-xs text-zinc-500">
                      /{billingPeriod === "monthly" ? "mo" : "mo (billed annually)"}
                    </span>
                  </div>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-zinc-800/80">
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Features Included</p>
                  {tier.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs md:text-sm text-zinc-300">
                      <Check size={14} className="text-emerald-400 shrink-0" />
                      <span>{f}</span>
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
  );
}
