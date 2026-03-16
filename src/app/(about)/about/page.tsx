"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TechnicalArsenal } from "../components/TechnicalArsenal";
import { CardHoverReveal } from "../components/CardHoverReveal";
import Experience from "../components/Experience";
import Education from "../components/Education";
import { cn } from "@/utils/cn";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      {/* Hero Section / WHO AM I */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Bio */}
          <div className="flex-1 space-y-8">
            <div className="space-y-2">
              <span className="font-mono text-primary text-xs tracking-[0.3em] uppercase opacity-70">
                [ WHO AM I ]
              </span>
              <div className="w-12 h-0.5 bg-primary/50" />
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-heading font-bold leading-tight border-l-2 border-primary pl-6">
              I architect AI-powered systems that <span className="text-primary italic">don&apos;t just work</span> — they think.
            </h1>
            
            <p className="text-lg font-body text-slate-888 leading-relaxed max-w-2xl">
              Specializing in <span className="text-white">LLM orchestration</span>, <span className="text-white">multi-agent pipelines</span>, and <span className="text-white">full-stack engineering</span>, 
              I turn complex AI research into production-ready applications that scale. 
              My focus is on building intelligent systems that move beyond chat into autonomous execution.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest">Connect with me:</span>
              <div className="flex gap-4">
                {[
                  { icon: <FaGithub />, href: "https://github.com/RupakGhosh4865", label: "GitHub" },
                  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/rupak-ghosh-949258244/", label: "LinkedIn" },
                ].map((social, i) => (
                  <Link 
                    key={i} 
                    href={social.href} 
                    target="_blank"
                    className="p-2 glass rounded-lg text-slate-888 hover:text-primary hover:glow-border transition-all"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Profile Image with Orbit */}
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary/10 blur-[60px] rounded-full" />
            
            {/* Spinning Orbit Rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute w-full h-full border border-dashed border-primary/20 rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-[80%] h-[80%] border border-primary/10 rounded-full"
            />
            
            {/* Core Image Wrapper */}
            <div className="relative w-[75%] h-[75%] rounded-3xl overflow-hidden border-2 border-primary/30 p-2 glass group">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
                <img 
                  src="https://ucarecdn.com/d68722bf-c496-4634-a296-fed22b0a8573/WhatsAppImage20240814at180618_5fe23340.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
                />
              </div>
              
              {/* Corner Decorations */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-24 bg-background-depth">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
          <span className="font-mono text-primary text-xs tracking-[0.3em] uppercase opacity-70 mb-4 block">
            [ JOURNEY ]
          </span>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-12">Professional Experience</h2>
          <Experience />
        </div>
      </section>

      {/* EDUCATION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white text-center mb-12">Academic Foundation</h2>
          <Education />
        </div>
      </section>

      {/* TECHNICAL ARSENAL */}
      <section className="py-24 bg-background-depth">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
          <span className="font-mono text-primary text-xs tracking-[0.3em] uppercase opacity-70 mb-4 block">
            [ EQUIPMENT ]
          </span>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white">Technical Arsenal</h2>
        </div>
        <TechnicalArsenal />
      </section>

      <div className="section-divider" />

      {/* EXPERTISE */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 text-center">
          <span className="font-mono text-primary text-xs tracking-[0.3em] uppercase opacity-70 mb-4 block">
            [ CAPABILITIES ]
          </span>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white uppercase tracking-tighter">Expertise</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4" />
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <CardHoverReveal />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
