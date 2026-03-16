"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";

export function SpotlightPreview() {
  const tagline = "Building Intelligent Systems at the Intersection of AI × Backend × Web";

  return (
    <div className="h-screen w-full bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#00FFF0"
        />
      </div>

      {/* Aurora-style Gradient */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full flex flex-col items-center">
        {/* Available for Hire Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[10px] font-mono tracking-[0.2em] text-white/70 uppercase">
            Available for Hire • 2026
          </span>
        </motion.div>

        {/* Massive Name */}
        <div className="relative group">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-7xl lg:text-9xl font-bold text-center font-display tracking-tighter leading-none"
          >
            I&apos;m{" "}
            <span className="text-gradient inline-block group-hover:animate-glitch">
              Rupak Ghosh
            </span>
          </motion.h1>
          {/* Subtle Scanline effect on hover */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_0%,rgba(0,255,240,0.05)_50%,transparent_100%)] bg-[length:100%_4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Tagline */}
        <div className="mt-8 max-w-2xl text-center">
          <TextGenerateEffect
            words={tagline}
            className="text-lg md:text-xl font-body text-slate-888 leading-relaxed"
          />
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-col sm:flex-row items-center gap-6 mt-12"
        >
          <Link href="/projects">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="bg-black text-white px-8 py-3 text-sm font-mono tracking-wider flex items-center gap-2 group border-primary/50 shadow-[0_0_20px_rgba(0,255,240,0.15)] hover:shadow-[0_0_30px_rgba(0,255,240,0.4)] transition-all"
            >
              EXPLORE MY WORK
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </HoverBorderGradient>
          </Link>

          <Link
            href="https://drive.google.com/file/d/1z7gHRFowFZxJVynX0_2js_kvJkhSVdgq/view?usp=sharing"
            target="_blank"
            className="text-sm font-mono text-slate-888 hover:text-primary flex items-center gap-2 transition-colors group"
          >
            DOWNLOAD RESUME
            <span className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform inline-block">↗</span>
          </Link>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono tracking-[0.3em] text-white/30 uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-primary/50"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
