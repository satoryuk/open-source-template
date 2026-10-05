"use client";

import React from "react";
import Link from "next/link";
import { LayoutDashboard } from "lucide-react";

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

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-900 bg-zinc-950/80 backdrop-blur-md px-4 sm:px-6 md:px-8 py-8 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <LayoutDashboard size={11} />
          </div>
          <span className="text-zinc-400 font-medium">vt.dev</span>
          <span>—</span>
          <span>Distributed under the MIT License guidelines.</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#features" className="hover:text-zinc-300 transition-colors">Features</a>
          <a href="#tech" className="hover:text-zinc-300 transition-colors">Tech Stack</a>
          <a href="#pricing" className="hover:text-zinc-300 transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-zinc-300 transition-colors">FAQ</a>
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
  );
}
