"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { cn } from "@/utils/cn";

const SKILLS = [
  {
    title: "Core AI/ML",
    description: "PyTorch, Transformers, OpenAI API, Google Gemini, LangChain, LangGraph, Orchestration",
    className: "md:col-span-2",
  },
  {
    title: "AI Libraries",
    description: "Hugging Face, NumPy, Pandas, Scikit-learn, Matplotlib",
  },
  {
    title: "Vector Databases",
    description: "ChromaDB, FAISS, Redis, ElasticSearch, PrismaDB",
  },
  {
    title: "LLM Tools",
    description: "Prompt Engineering, Fine-tuning, Embeddings, SentenceTransformers",
  },
  {
    title: "Programming",
    description: "Python, SQL, JavaScript, TypeScript, C++",
  },
  {
    title: "Frameworks",
    description: "Next.js, React, FastAPI, Flask, Streamlit, Tailwind CSS",
  },
  {
    title: "Cloud & Infra",
    description: "Docker, AWS (EC2/S3), n8n, Hugging Face Spaces",
  },
  {
    title: "Tools",
    description: "Git, GitHub, Postman, VSCode, Cursor, V0.dev, Bubble.io",
  },
];

export const TechnicalArsenal = () => {
  return (
    <BentoGrid className="max-w-5xl mx-auto px-4">
      {SKILLS.map((skill, i) => (
        <BentoGridItem
          key={i}
          title={<span className="font-mono text-primary">{skill.title}</span>}
          description={
            <div className="flex flex-wrap gap-2 mt-4">
              {skill.description.split(", ").map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white/5 border border-primary/20 rounded-full text-[10px] font-mono hover:border-primary/60 hover:shadow-[0_0_10px_rgba(0,255,240,0.2)] transition-all"
                >
                  {item}
                </span>
              ))}
            </div>
          }
          className={cn(
            "glass glow-border hover:shadow-none transition-all duration-300",
            skill.className
          )}
        />
      ))}
    </BentoGrid>
  );
};
