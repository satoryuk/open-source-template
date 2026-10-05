"use client";

import React from "react";
import { Shield, Cpu, Zap, Terminal } from "lucide-react";
import { FadeUp, GlowingCard, StaggerContainer, StaggerItem } from "@/components/ui/animations/MotionWrappers";

export default function Features() {
  const techFeatures = [
    { title: "NextAuth v5 Middleware", desc: "Edge-compatible session route guards intercepting request bounds securely.", icon: Shield },
    { title: "MongoDB Driver Caching", desc: "Optimized connection pooling built directly into serverless endpoint runtimes.", icon: Cpu },
    { title: "Framer Motion Engine", desc: "Fluid, high-performance typography shifts and viewport scroll trackers.", icon: Zap },
    { title: "Pre-Configured CI Pipelines", desc: "Automated GitHub Actions linting validations validating build integrity.", icon: Terminal },
  ];

  return (
    <section id="features" className="space-y-12 scroll-mt-24">
      <FadeUp className="text-center space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Full-Stack Core Architecture</h2>
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
  );
}
