"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FadeUp } from "@/components/ui/animations/MotionWrappers";

export default function FAQ() {
  const faqs = [
    {
      q: "Is this boilerplate completely production ready?",
      a: "Yes. It comes pre-configured with secure environment routers, custom layout route guards via Edge middleware, password hashing, and clean MongoDB promise handling.",
    },
    {
      q: "How do I swap Localhost MongoDB to MongoDB Atlas Cloud?",
      a: "Simply open your local .env configuration parameters file, swap out the MONGODB_URI connection string to point to your cloud server cluster coordinates, and restart your server node runtime.",
    },
    {
      q: "Can I use this template for commercial SaaS projects?",
      a: "Absolutely! The template is licensed under open-source MIT conditions, giving you full permission to adapt, re-style, scale, or sell applications built with this codebase.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full space-y-12 scroll-mt-24">
      <FadeUp className="text-center space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Frequently Asked Answers</h2>
        <p className="text-zinc-500 text-xs md:text-sm">
          Clear insights regarding configuration protocols and code permissions.
        </p>
      </FadeUp>

      <div className="space-y-3 w-full">
        {faqs.map((faq, idx) => {
          const isOpen = activeIndex === idx;
          return (
            <FadeUp key={idx} delay={idx * 0.05}>
              <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-sm overflow-hidden transition-colors hover:border-zinc-700">
                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? null : idx)}
                  className="w-full p-5 flex items-center justify-between text-left text-zinc-200 hover:text-white font-medium text-xs md:text-sm select-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`text-zinc-500 transform transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-emerald-400" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-zinc-800/40 p-5 text-xs md:text-sm text-zinc-400 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            </FadeUp>
          );
        })}
      </div>
    </section>
  );
}
