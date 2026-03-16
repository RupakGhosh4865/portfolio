"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FaLaptopCode, FaServer, FaBrain } from "react-icons/fa";
import { cn } from "@/utils/cn";

const EXPERTISE_DATA = [
  {
    title: "Frontend Development",
    description: "As a Frontend Developer, I create engaging and user-friendly interfaces using Next.js, HTML, CSS, and JavaScript. My expertise includes building responsive designs and optimizing web performance.",
    icon: <FaLaptopCode className="h-12 w-12 text-primary" />,
    color: "primary",
    glow: "shadow-[0_0_20px_rgba(0,255,240,0.3)]",
  },
  {
    title: "Backend Development",
    description: "In Backend Development, I focus on creating robust server-side applications using Node.js, Express, and FastAPI. I design and implement APIs, manage databases, and ensure system security.",
    icon: <FaServer className="h-12 w-12 text-secondary" />,
    color: "secondary",
    glow: "shadow-[0_0_20px_rgba(123,47,255,0.3)]",
  },
  {
    title: "AI & Agents",
    description: "Exploring the frontier of AI with Advanced AI Apps, RAG Apps, and AI Agents. I leverage LLMs and vector databases to build intelligent systems that can reason and automate complex workflows.",
    icon: <FaBrain className="h-12 w-12 text-tertiary" />,
    color: "tertiary",
    glow: "shadow-[0_0_20px_rgba(255,45,120,0.3)]",
  },
];

export const CardHoverReveal = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full">
      {EXPERTISE_DATA.map((item, idx) => (
        <CardContainer key={idx} className="inter-var">
          <CardBody className={cn(
            "relative group/card hover:shadow-2xl transition-all duration-300 w-full max-w-[30rem] h-auto rounded-3xl p-8 glass border-t-2",
            item.color === "primary" ? "border-t-primary/50" : 
            item.color === "secondary" ? "border-t-secondary/50" : 
            "border-t-tertiary/50",
            item.glow
          )}>
            <CardItem translateZ="50" className="mb-4">
              {item.icon}
            </CardItem>
            <CardItem
              translateZ="60"
              className="text-2xl font-bold text-white mb-4 font-heading"
            >
              {item.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="80"
              className="text-slate-888 text-sm max-w-sm leading-relaxed font-body"
            >
              {item.description}
            </CardItem>
            
            <div className="flex justify-between items-center mt-10">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-mono font-bold text-white/50"
              >
                {item.title.split(" ")[0].toUpperCase()}
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className={cn(
                  "px-4 py-2 rounded-xl bg-white text-black text-xs font-bold",
                  item.color === "primary" ? "bg-primary text-black" : 
                  item.color === "secondary" ? "bg-secondary text-white" : 
                  "bg-tertiary text-white"
                )}
              >
                LEARN MORE
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
};
