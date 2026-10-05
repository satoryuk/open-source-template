"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, BarChart3, Users, Settings, HelpCircle, ShieldAlert } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function DashboardSidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname();

  const menuItems = [
    { name: "Overview", href: "/dashboard", icon: BarChart3 },
    { name: "User Management", href: "/dashboard/users", icon: Users },
    { name: "Security Audit", href: "/dashboard/security", icon: ShieldAlert },
    { name: "System Settings", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <>
      {/* 1. Mobile Dark Overlay Backdrop (Visible only when sidebar drawer is pulled out on small screens) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* 2. Main Navigation Panel Layout */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-zinc-950 border-r border-zinc-900 p-4 flex flex-col justify-between 
        transform transition-transform duration-300 ease-in-out
        md:translate-x-0 md:static md:h-[calc(100vh-69px)]
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <div className="space-y-6">
          {/* Mobile Menu Header with close action button */}
          <div className="flex items-center justify-between md:hidden pb-2 border-b border-zinc-900">
            <span className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Navigation Menu</span>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-zinc-900 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation Links Grid */}
          <nav className="space-y-1.5">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)} // Auto-collapse drawer on link clicks (Mobile)
                  className={`
                    flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group relative
                    ${isActive 
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50 border border-transparent"}
                  `}
                >
                  <Icon size={18} className={isActive ? "text-emerald-400" : "text-zinc-400 group-hover:text-zinc-200"} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Static Bottom Sidebar Widget Footer */}
        <div className="border-t border-zinc-900 pt-4">
          <Link
            href="/dashboard/help"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <HelpCircle size={18} />
            <span>Support Docs</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
