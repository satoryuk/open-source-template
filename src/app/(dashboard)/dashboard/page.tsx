"use client";

import React from "react";
import { FadeUp, GlowingCard, StaggerContainer, StaggerItem } from "@/components/ui/animations/MotionWrappers";
import { TrendingUp, Users, ShieldCheck, Activity, ArrowUpRight } from "lucide-react";

export default function DashboardIndex() {
  // Mock administrative telemetry data layers
  const statistics = [
    { title: "Total Registered Users", value: "1,248", change: "+12% this week", icon: Users, color: "text-emerald-400" },
    { title: "Active Secure Sessions", value: "342", change: "Live real-time activity", icon: Activity, color: "text-teal-400" },
    { title: "Security Core Audits", value: "100%", change: "0 vulnerabilities found", icon: ShieldCheck, color: "text-blue-400" },
  ];

  // SVG Chart data coordinate lines mapping out simulated platform growth
  const chartPoints = "10,90 40,75 70,80 100,50 130,45 160,60 190,30 220,25 250,15";

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-300">
      
      {/* 1. Header Row */}
      <FadeUp>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">Management Console Overview</h1>
            <p className="text-zinc-500 text-xs md:text-sm mt-1">Real-time analytical baseline endpoints and traffic summaries.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-medium text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Live Database Sync
          </div>
        </div>
      </FadeUp>

      {/* 2. Responsive Core KPI Metric Cards Layout Grid */}
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {statistics.map((card, i) => {
          const Icon = card.icon;
          return (
            <StaggerItem key={i}>
              <GlowingCard className="flex flex-col justify-between min-h-[140px]">
                <div className="flex items-start justify-between">
                  <span className="text-xs md:text-sm font-medium text-zinc-400">{card.title}</span>
                  <div className={`p-2 bg-zinc-950 border border-zinc-800 rounded-lg ${card.color}`}>
                    <Icon size={16} />
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">{card.value}</span>
                  <p className="text-xs text-zinc-500 mt-1 flex items-center gap-1">
                    <TrendingUp size={12} className="text-emerald-500" />
                    {card.change}
                  </p>
                </div>
              </GlowingCard>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      {/* 3. Graphical Monitoring & Activity Layout Area split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Animated Analytics Vector Line Graph Widget Component */}
        <FadeUp delay={0.2} className="lg:col-span-2">
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4 md:p-6 backdrop-blur-sm space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-800/60 pb-4">
              <div>
                <h3 className="text-sm font-semibold text-white">Platform Influx Telemetry</h3>
                <p className="text-xs text-zinc-500 mt-0.5">Monitored database verification throughput clusters.</p>
              </div>
              <button 
                type="button"
                className="text-xs text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1 transition-colors cursor-pointer"
              >
                Full Log Reports <ArrowUpRight size={14} />
              </button>
            </div>
            
            {/* Embedded responsive custom vector line illustration */}
            <div className="w-full pt-4">
              <svg viewBox="0 0 260 100" className="w-full h-40 md:h-56 text-emerald-500 overflow-visible drop-shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                <defs>
                  <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgb(16,185,129)" stopOpacity="0.25"/>
                    <stop offset="100%" stopColor="rgb(16,185,129)" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <polyline fill="url(#chartGlow)" stroke="none" points={`10,100 ${chartPoints} 250,100`} />
                <polyline fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" points={chartPoints} />
              </svg>
            </div>
          </div>
        </FadeUp>

        {/* Audit Log / Event Feed Component Frame */}
        <FadeUp delay={0.3}>
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4 md:p-6 backdrop-blur-sm space-y-4 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-semibold text-white">System Security Activity</h3>
              <p className="text-xs text-zinc-500 mt-0.5">Recent account actions registry logs.</p>
              
              <div className="mt-4 space-y-3">
                {[
                  { user: "admin@template.com", action: "Seeded system container", time: "Just Now" },
                  { user: "anonymous_node", action: "API route request matched", time: "4 mins ago" },
                  { user: "system_middleware", action: "Route gate matching rules updated", time: "1 hr ago" },
                ].map((log, idx) => (
                  <div key={idx} className="p-2.5 bg-zinc-950/60 border border-zinc-800/80 rounded-lg text-xs space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-zinc-300 font-medium truncate max-w-[140px]">{log.user}</span>
                      <span className="text-zinc-600 text-[10px]">{log.time}</span>
                    </div>
                    <p className="text-zinc-500">{log.action}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

      </div>

    </div>
  );
}
