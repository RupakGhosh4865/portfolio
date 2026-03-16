"use client";

import React from "react";
import { motion } from "framer-motion";

const EXPERIENCE = [
  {
    role: "Backend Developer Intern",
    company: "Job Alchemy",
    duration: "Nov 2024 - March 2025",
    description: [
      "Developed a Chrome extension for automating job applications using RESTful APIs and OpenAI prompts for generating personalized resumes.",
      "Implemented AI-driven automation to enable one-click job applications, reducing manual effort by 70%.",
      "Integrated OpenAI’s GPT models to dynamically generate CVs tailored to job descriptions.",
    ],
  },
  {
    role: "Backend Developer Intern",
    company: "Sales Up",
    duration: "Nov 2024 - Jan 2025",
    description: [
      "Built a lead generation system using RESTful APIs and integrated Google Docs with Gmail for automated email generation using n8n.",
      "Developed no-code websites using Bubble.io, enabling rapid prototyping and deployment.",
      "Optimized email workflows, reducing lead response time by 50%.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="space-y-12">
      {EXPERIENCE.map((exp, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          viewport={{ once: true }}
          className="relative pl-8 border-l border-primary/30 group hover:border-primary transition-colors"
        >
          {/* Dot */}
          <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(0,255,240,0.8)] group-hover:scale-125 transition-transform" />
          
          <div className="space-y-2">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                {exp.role}
              </h3>
              <span className="font-mono text-xs text-primary/70">{exp.duration}</span>
            </div>
            <p className="text-lg font-heading text-white/90">{exp.company}</p>
            <ul className="space-y-3 mt-4">
              {exp.description.map((item, i) => (
                <li key={i} className="flex gap-3 text-slate-888 text-sm leading-relaxed">
                  <span className="text-primary mt-1.5 opacity-50">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;
