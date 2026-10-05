"use client";

import React from "react";
import { FadeUp, GlowingCard, StaggerContainer, StaggerItem } from "@/components/ui/animations/MotionWrappers";
import { ShieldCheck, Terminal, RefreshCw, AlertTriangle } from "lucide-react";

export default function SecurityAuditPage() {
  // Mock administrative telemetry data layers
  const securityMetrics = [
    { name: "Firewall Status", value: "Active / Protected", desc: "Blocking unauthorized routing requests", status: "ok" },
    { name: "Token Strategy", value: "JWT Encryption", desc: "Secure v5 parameters active", status: "ok" },
    { name: "SSL Certificate", value: "Valid (256-bit)", desc: "Enforcing end-to-end data safety", status: "ok" },
  ];

  const recentIncidents = [
    { event: "Authorized Admin Sign-In", ip: "127.0.0.1", geo: "Localhost", time: "Just Now", type: "success" },
    { event: "API Hashing Event Checked", ip: "192.168.1.45", geo: "Internal Node", time: "22 mins ago", type: "info" },
    { event: "Blocked Suspicious Access Path", ip: "45.132.87.12", geo: "Unknown Gateway", time: "3 hrs ago", type: "warning" },
  ];

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 py-6 md:py-8 space-y-8 animate-in fade-in duration-300">
      
      {/* 1. Header Row */}
      <FadeUp>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">Security Audit Desk</h1>
            <p className="text-zinc-500 text-xs md:text-sm mt-1">Review active token sessions, watch live firewall telemetry, and check middleware settings.</p>
          </div>
          <button 
            type="button"
            className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs font-semibold rounded-lg text-zinc-300 transition-colors self-start cursor-pointer"
          >
            <RefreshCw size={14} />
            Force Re-Scan
          </button>
        </div>
      </FadeUp>

      {/* 2. Responsive Threat Parameters Grid Layout */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {securityMetrics.map((metric, i) => (
          <StaggerItem key={i}>
            <GlowingCard className="space-y-3 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-white">{metric.name}</h4>
                  <ShieldCheck size={16} className="text-emerald-400" />
                </div>
                <p className="text-lg font-bold text-zinc-200 mt-2">{metric.value}</p>
                <p className="text-xs text-zinc-500 mt-1">{metric.desc}</p>
              </div>
              <div className="pt-2 border-t border-zinc-800/60 flex items-center gap-1.5 text-[10px] text-emerald-400 font-medium uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Operational System Stable
              </div>
            </GlowingCard>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* 3. Live Logs Gateway Area split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Terminal Live Logger View Component */}
        <FadeUp delay={0.2} className="lg:col-span-2">
          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 md:p-6 font-mono text-xs space-y-4 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 opacity-60" />
            <div className="flex items-center justify-between text-zinc-500 border-b border-zinc-900 pb-3">
              <span className="flex items-center gap-2">
                <Terminal size={14} className="text-emerald-400" />
                middleware_core_gate.log
              </span>
              <span className="text-[10px] bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800 text-zinc-400">STREAMING</span>
            </div>
            
            <div className="space-y-2 text-zinc-400 min-h-[160px] overflow-y-auto">
              <p className="text-zinc-600">[2026-10-05T23:51:00Z] INIT: Bootstrapping secure NextAuth routing configurations...</p>
              <p className="text-emerald-500/90">[2026-10-05T23:51:04Z] SUCCESS: Instantiated cached client connection pool to MongoDB.</p>
              <p className="text-zinc-400">[2026-10-05T23:51:12Z] CHECK: Running route guard middleware rules matching pattern &quot;/dashboard/:path*&quot;.</p>
              <p className="text-teal-400">[2026-10-05T23:51:15Z] ROUTE: Incoming request for /dashboard/security matching valid active JWT cookie session parameters.</p>
              <p className="text-zinc-600 animate-pulse">[2026-10-05T23:51:20Z] AWAITING: Listening for interface environment events...</p>
            </div>
          </div>
        </FadeUp>

        {/* Security Registry Live Access Feeds Frame */}
        <FadeUp delay={0.3}>
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4 md:p-6 backdrop-blur-sm space-y-4 h-full">
            <div>
              <h3 className="text-sm font-semibold text-white">Access Registry Feed</h3>
              <p className="text-xs text-zinc-500 mt-0.5">Real-time gatekeeper logs.</p>
            </div>

            <div className="space-y-3">
              {recentIncidents.map((incident, idx) => (
                <div key={idx} className="p-3 bg-zinc-950/50 border border-zinc-800 rounded-lg text-xs space-y-1.5 relative group">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-zinc-200">{incident.event}</span>
                    {incident.type === "warning" && <AlertTriangle size={14} className="text-amber-400 animate-bounce" />}
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-zinc-500">
                    <span className="font-mono bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800/80">{incident.ip}</span>
                    <span>{incident.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

      </div>

    </div>
  );
}
