"use client";

import React, { useState } from "react";
import { FadeUp, GlowingCard } from "@/components/ui/animations/MotionWrappers";
import { Save, ToggleLeft, ToggleRight, Database, Sliders } from "lucide-react";

export default function SettingsPage() {
  const [toggleRules, setToggleRules] = useState({ pipelineGlow: true, registrationApi: true, auditLogs: false });

  return (
    <div className="w-full max-w-5xl px-4 sm:px-6 md:px-10 py-6 md:py-8 space-y-6 animate-in fade-in duration-300">
      <FadeUp>
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">System Settings</h1>
          <p className="text-zinc-500 text-xs md:text-sm mt-1">Configure workspace template rules, mock telemetry toggles, and UI variables.</p>
        </div>
      </FadeUp>

      <div className="space-y-4">
        {/* Settings Block Item 1 */}
        <FadeUp delay={0.1}>
          <GlowingCard className="space-y-4">
            <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-3">
              <Sliders className="text-emerald-400" size={18} />
              <h3 className="text-sm font-semibold text-white">Design & UX Layout Tweaks</h3>
            </div>
            <div className="flex items-center justify-between text-xs md:text-sm">
              <div>
                <p className="text-zinc-200 font-medium">Ambient Neon Glows</p>
                <p className="text-zinc-500 text-xs mt-0.5">Toggle global radial background blur styles across views.</p>
              </div>
              <button 
                type="button"
                onClick={() => setToggleRules({ ...toggleRules, pipelineGlow: !toggleRules.pipelineGlow })}
                className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Toggle ambient neon glows"
              >
                {toggleRules.pipelineGlow ? <ToggleRight size={32} className="text-emerald-400" /> : <ToggleLeft size={32} />}
              </button>
            </div>
          </GlowingCard>
        </FadeUp>

        {/* Settings Block Item 2 */}
        <FadeUp delay={0.2}>
          <GlowingCard className="space-y-4">
            <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-3">
              <Database className="text-teal-400" size={18} />
              <h3 className="text-sm font-semibold text-white">API Core Constraints</h3>
            </div>
            <div className="flex items-center justify-between text-xs md:text-sm">
              <div>
                <p className="text-zinc-200 font-medium">Public User Sign-ups</p>
                <p className="text-zinc-500 text-xs mt-0.5">Allow public registration submissions directly to the database endpoint.</p>
              </div>
              <button 
                type="button"
                onClick={() => setToggleRules({ ...toggleRules, registrationApi: !toggleRules.registrationApi })}
                className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Toggle public user sign-ups"
              >
                {toggleRules.registrationApi ? <ToggleRight size={32} className="text-emerald-400" /> : <ToggleLeft size={32} />}
              </button>
            </div>
          </GlowingCard>
        </FadeUp>
      </div>

      {/* Floating Save Toolbar Option */}
      <FadeUp delay={0.3} className="flex justify-end pt-2">
        <button 
          type="button"
          className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold text-sm rounded-lg transition-colors shadow-lg shadow-emerald-500/10 cursor-pointer"
        >
          <Save size={16} />
          Save Configurations
        </button>
      </FadeUp>
    </div>
  );
}
