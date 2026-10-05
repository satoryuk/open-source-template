"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/ui/animations/MotionWrappers";

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

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center space-y-6 max-w-3xl mx-auto pt-12">
      <FadeUp>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-[11px] font-medium text-emerald-400 shadow-inner">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          MIT License Open Source Template Live
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
  );
}
