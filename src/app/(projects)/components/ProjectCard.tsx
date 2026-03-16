"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  imgSrc: any;
  type?: string;
  skills?: { name: string }[];
  featured?: boolean;
}

export const ProjectCard = ({ 
  title, 
  description, 
  url, 
  imgSrc, 
  type = "AI PROJECT", 
  skills = [],
  featured = false 
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "group relative glass rounded-3xl overflow-hidden border-white/10 hover:border-primary/30 transition-all duration-500",
        featured ? "md:col-span-2 lg:col-span-3 lg:flex lg:h-[400px]" : ""
      )}
    >
      {/* Featured Badge */}
      <div className="absolute top-4 left-4 z-20">
        <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-primary/30 rounded-full text-[10px] font-mono text-primary tracking-widest uppercase">
          {type}
        </span>
      </div>

      {/* Image Section */}
      <div className={cn(
        "relative overflow-hidden",
        featured ? "lg:w-1/2" : "h-64"
      )}>
        <Image
          src={imgSrc}
          alt={title}
          width={800}
          height={600}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
      </div>

      {/* Content Section */}
      <div className={cn(
        "p-8 flex flex-col justify-between",
        featured ? "lg:w-1/2" : ""
      )}>
        <div>
          <h3 className="text-2xl font-bold font-heading mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-slate-888 text-sm leading-relaxed mb-6 font-body">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {skills.map((skill, idx) => (
              <span 
                key={idx}
                className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-md text-[9px] font-mono text-white/50"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Link 
            href={url} 
            target="_blank"
            className="text-xs font-mono font-bold text-primary group/link flex items-center gap-2"
          >
            LIVE DEMO
            <span className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform">↗</span>
          </Link>
          <Link 
            href="https://github.com/RupakGhosh4865" 
            target="_blank"
            className="text-xs font-mono font-bold text-white/30 hover:text-white transition-colors flex items-center gap-2"
          >
            VIEW CODE
            <span>→</span>
          </Link>
        </div>
      </div>

      {/* Spotlight Effect Surround */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(0,255,240,0.05)_0%,transparent_70%)]" />
      </div>
    </motion.div>
  );
};
