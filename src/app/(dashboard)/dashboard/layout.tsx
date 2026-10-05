"use client";

import React, { useState, useEffect } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sessionData, setSessionData] = useState<{ email?: string | null; name?: string | null }>({});

  // Client-side fetch for dynamic header render safely bypassing hybrid server hydration discrepancies
  useEffect(() => {
    async function fetchSession() {
      try {
        const res = await fetch("/api/auth/session");
        if (res.ok) {
          const session = await res.json();
          if (session?.user) {
            setSessionData({ email: session.user.email, name: session.user.name });
          }
        }
      } catch (err: unknown) {
        console.error("Failed to fetch session:", err);
      }
    }
    fetchSession();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col text-zinc-100 font-sans">
      {/* Responsive Sticky Header Panel */}
      <DashboardHeader 
        userEmail={sessionData.email} 
        userName={sessionData.name} 
        onMenuToggle={() => setSidebarOpen((prev) => !prev)}
      />
      
      {/* Dual Main Content Grid Panel Split */}
      <div className="flex flex-1 relative overflow-hidden">
        <DashboardSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        
        {/* Core Main Child Page Render Container */}
        <main className="flex-1 overflow-y-auto bg-gradient-to-b from-zinc-950 to-black relative z-10">
          {children}
        </main>
      </div>
    </div>
  );
}
