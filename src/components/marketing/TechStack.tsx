"use client";

import React from "react";
import { FadeUp } from "@/components/ui/animations/MotionWrappers";

export default function TechStack() {
  const stacks = ["Next.js 16", "TypeScript", "Tailwind CSS", "MongoDB", "Auth.js v5", "Framer Motion"];

  return (
    <section id="tech" className="space-y-8 text-center scroll-mt-24">
      <FadeUp className="space-y-2">
        <h2 className="text-xl md:text-2xl font-bold text-white">Powering the Modern Web Ecosystem</h2>
        <p className="text-zinc-500 text-xs md:text-sm">Clean architectural foundations built on trusted industry standards.</p>
      </FadeUp>

      <FadeUp delay={0.1}>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {stacks.map((tech) => (
            <div key={tech} className="p-4 bg-zinc-900/30 border border-zinc-800/60 rounded-xl font-mono text-xs md:text-sm text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/20 transition-all select-none backdrop-blur-sm">
              {tech}
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
