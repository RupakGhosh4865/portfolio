"use client";

import React from "react";
import { motion } from "framer-motion";
import projects from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import Certification from "../components/Certification";

const ProjectsPage = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <header className="mb-20">
          <div className="flex items-center gap-4 mb-2">
            <span className="font-mono text-primary text-xs tracking-widest uppercase">
              Selected Work
            </span>
            <div className="h-px flex-1 bg-primary/20" />
            <span className="font-mono text-white/30 text-xs">— 2024/25</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-heading font-bold text-white tracking-tighter">
            Shipped <span className="text-gradient">Projects</span>
          </h1>
        </header>

        {/* Projects Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.bestProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              url={project.url}
              imgSrc={project.imgSrc}
              featured={index === 0}
              skills={project.skills}
              type={index === 0 ? "Featured Project" : project.title.toLowerCase().includes("ai") ? "AI Project" : "Full Stack"}
            />
          ))}
        </motion.div>

        {/* Section Divider */}
        <div className="section-divider my-24" />

        {/* Other Projects / Archives */}
        <section className="mt-24">
          <h2 className="text-3xl font-heading font-bold mb-12 text-white">Project Archive</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.otherProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                url={project.url}
                imgSrc={project.imgSrc}
                type="Archive"
              />
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mt-32">
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-xs tracking-[0.3em] uppercase opacity-70 mb-4 block">
              [ ACHIEVEMENTS ]
            </span>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white uppercase tracking-tighter">Certifications</h2>
          </div>
          <Certification />
        </section>
      </div>
    </div>
  );
};

export default ProjectsPage;
