"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, Loader2, AlertTriangle, ShieldCheck } from "lucide-react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [infoMessage, setInfoMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Derive dynamic token expiration status triggers passed inside browser query parameters
  const sessionExpiredMessage =
    searchParams.get("error") === "SessionExpired"
      ? "Your 15-minute access token window expired and the 7-day refresh lifecycle could not be renewed. Please authenticate again to access the admin console."
      : null;

  const activeInfoMessage = infoMessage ?? sessionExpiredMessage;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setInfoMessage(null);
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setError("Invalid administrative sign-in credentials. Please try again.");
      } else {
        router.push("/dashboard");
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "An unexpected error occurred during sign-in.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  // Helper utility shortcut to quickly test seeded database parameters
  const fillAdminCredentials = () => {
    setEmail("admin@template.com");
    setPassword("password123");
    setError("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 selection:bg-emerald-500/30 selection:text-emerald-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-2xl relative"
      >
        <h2 className="text-2xl font-bold text-center text-white tracking-tight">Welcome Back</h2>
        <p className="text-zinc-500 text-sm text-center mt-2">Sign in to access your administrative workspace</p>

        {/* 🚨 TOKEN LIFECYCLE REFRESH EXPIRED ALERT BANNER CONTAINER */}
        {activeInfoMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-4 p-3.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs rounded-xl flex items-start gap-2.5 leading-relaxed"
          >
            <AlertTriangle size={18} className="shrink-0 mt-0.5 text-amber-400" />
            <span>{activeInfoMessage}</span>
          </motion.div>
        )}

        {/* Generic Auth Error Indicator */}
        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-4 p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-xl text-center font-medium"
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider">Email Address</label>
            <div className="relative mt-2">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-500">
                <Mail size={16} />
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-10 pr-4 py-2.5 text-white focus:outline-none focus:border-emerald-500 transition-all text-sm"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider">Password</label>
            <div className="relative mt-2">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-500">
                <Lock size={16} />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-10 pr-12 py-2.5 text-white focus:outline-none focus:border-emerald-500 transition-all text-sm"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 mt-2 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-lg transition-colors flex items-center justify-center cursor-pointer disabled:opacity-50"
          >
            {loading ? <Loader2 size={18} className="animate-spin" /> : "Continue with Email"}
          </button>
        </form>

        {/* Seeding credentials testing shortcut block helper */}
        <div className="mt-4 pt-4 border-t border-zinc-800/60 text-center">
          <button
            type="button"
            onClick={fillAdminCredentials}
            className="text-[11px] font-medium px-2.5 py-1 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-emerald-400 rounded-md transition-all inline-flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <ShieldCheck size={13} />
            Quick-Fill Hashed Seed Admin Profile
          </button>
        </div>

        <p className="text-zinc-500 text-xs text-center mt-4">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-emerald-400 hover:underline">
            Register now
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <Loader2 size={24} className="animate-spin text-emerald-400" />
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
