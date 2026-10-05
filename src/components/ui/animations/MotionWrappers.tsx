"use client";

import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function FadeUp({
  children,
  delay = 0,
  duration = 0.6,
  className,
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
}

const containerVariants = (stagger: number, delay: number): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

export function StaggerContainer({
  children,
  className,
  delayChildren = 0.1,
  staggerChildren = 0.15,
}: StaggerContainerProps) {
  return (
    <motion.div
      variants={containerVariants(staggerChildren, delayChildren)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlowingCard({ children, className }: GlowingCardProps) {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePosition(null);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700 hover:shadow-2xl hover:shadow-emerald-500/5",
        className
      )}
    >
      {/* Interactive mouse radial glow */}
      {mousePosition && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(52, 211, 153, 0.12), transparent 75%)`,
          }}
        />
      )}

      {/* Subtle border highlight on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-emerald-500/0 transition-colors duration-300 group-hover:border-emerald-500/20" />

      {/* Card Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
