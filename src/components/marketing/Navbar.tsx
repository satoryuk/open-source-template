"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { LayoutDashboard, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/auth/session");
        if (res.ok) {
          const session = await res.json();
          if (session?.user) {
            setIsAuthenticated(true);
          }
        }
      } catch {
        // Fallback gracefully
      }
    }
    checkAuth();
  }, []);

  return (
    <header className="w-full border-b border-zinc-900 bg-zinc-950/60 backdrop-blur-md sticky top-0 z-50 px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between transition-all max-w-7xl mx-auto rounded-b-xl">
      <div className="flex items-center gap-2 font-semibold text-white tracking-wide">
        <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
          <LayoutDashboard size={15} />
        </div>
        <span className="text-sm md:text-base font-bold">vt.dev</span>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400 font-medium">
        <a href="#features" className="hover:text-zinc-200 transition-colors">Features</a>
        <a href="#tech" className="hover:text-zinc-200 transition-colors">Tech Stack</a>
        <a href="#pricing" className="hover:text-zinc-200 transition-colors">Pricing</a>
        <a href="#faq" className="hover:text-zinc-200 transition-colors">FAQ</a>
      </nav>
      <div className="flex items-center gap-3">
        {isAuthenticated ? (
          <Link
            href="/dashboard"
            className="px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold text-xs md:text-sm rounded-lg shadow-md shadow-emerald-500/10 transition-colors flex items-center gap-1.5"
          >
            <span>Go to Dashboard</span>
            <ArrowRight size={14} />
          </Link>
        ) : (
          <>
            <Link
              href="/login"
              className="text-zinc-400 hover:text-white text-xs md:text-sm font-medium px-3 py-1.5 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold text-xs md:text-sm rounded-lg shadow-md shadow-emerald-500/10 transition-colors"
            >
              Get Started
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
