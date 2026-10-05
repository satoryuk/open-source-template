import Link from "next/link";
import { FadeUp, GlowingCard, StaggerContainer, StaggerItem } from "@/components/ui/animations/MotionWrappers";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 max-w-5xl mx-auto py-20">
      
      {/* 1. Header Animated Entrance */}
      <FadeUp>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400">
          Build your next SaaS <span className="text-emerald-400">10x faster</span>
        </h1>
      </FadeUp>

      <FadeUp delay={0.1}>
        <p className="mt-6 text-zinc-400 text-lg max-w-xl mx-auto">
          A premium open-source baseline template. Fully configured with NextAuth, MongoDB adapters, and ambient dark UI glows.
        </p>
      </FadeUp>

      {/* 2. Interactive CTA Button Transitions */}
      <FadeUp delay={0.2}>
        <div className="mt-10 flex gap-4 justify-center">
          <Link href="/login" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-lg shadow-lg shadow-emerald-500/20 transition-all">
            Explore Auth Platform
          </Link>
          <Link href="/dashboard" className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-lg border border-zinc-700 transition-all">
            View Dashboard Frame
          </Link>
        </div>
      </FadeUp>

      {/* 3. Staggered Feature Cards with Individual Mouse Glow Effects */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-24">
        {[
          { title: "Authentication", desc: "Secure v5 NextAuth configurations built right in." },
          { title: "MongoDB Ready", desc: "Pre-integrated database adapter layer ready to save user data." },
          { title: "Premium Visuals", desc: "Clean dark mode style presets utilizing Tailwind utility bounds." }
        ].map((feat, index) => (
          <StaggerItem key={index}>
            <GlowingCard>
              <h3 className="text-lg font-semibold text-white">{feat.title}</h3>
              <p className="text-sm text-zinc-400 mt-2">{feat.desc}</p>
            </GlowingCard>
          </StaggerItem>
        ))}
      </StaggerContainer>

    </div>
  );
}
