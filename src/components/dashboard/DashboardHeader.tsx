"use client";

import React, { useState } from "react";
import { signOut } from "next-auth/react";
import { User, LogOut, ChevronDown, LayoutDashboard, Settings, Menu } from "lucide-react";

interface HeaderProps {
  userEmail?: string | null;
  userName?: string | null;
  onMenuToggle: () => void; // Trigger callback added
}

export default function DashboardHeader({ userEmail, userName, onMenuToggle }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-zinc-950/80 border-b border-zinc-800 backdrop-blur-md sticky top-0 z-40 px-4 md:px-6 py-4 flex items-center justify-between">
      
      {/* Brand Group containing the Mobile Toggle Button */}
      <div className="flex items-center gap-3">
        <button 
          type="button"
          onClick={onMenuToggle}
          className="p-2 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900/30 text-zinc-400 hover:text-white transition-all md:hidden cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          <Menu size={18} />
        </button>

        <div className="flex items-center gap-2 font-semibold text-white tracking-wide">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <LayoutDashboard size={18} />
          </div>
          <span className="hidden sm:inline">Console Base</span>
        </div>
      </div>

      {/* Session Navigation Profile Controls */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50 text-zinc-300 hover:text-white transition-all text-sm font-medium cursor-pointer"
        >
          <div className="w-6 h-6 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400">
            <User size={14} />
          </div>
          <span className="max-w-[120px] truncate">{userName || userEmail || "Developer"}</span>
          <ChevronDown size={14} className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <div className="absolute right-0 mt-2 w-56 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl p-2 z-50">
              <div className="px-3 py-2 border-b border-zinc-800 mb-1">
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Active Workspace</p>
                <p className="text-sm font-medium text-zinc-300 truncate mt-0.5">{userEmail || "admin@template.com"}</p>
              </div>

              <button 
                type="button"
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/60 rounded-lg transition-colors text-left cursor-pointer"
              >
                <Settings size={15} />
                <span>Account Settings</span>
              </button>

              <button
                type="button"
                onClick={() => signOut({ callbackUrl: "/" })}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors text-left mt-1 cursor-pointer"
              >
                <LogOut size={15} />
                <span>Log Out Session</span>
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
