"use client";
import React from "react";
import { motion } from "framer-motion";
import { MdEngineering } from "react-icons/md";
import { FaUserPlus, FaUser } from "react-icons/fa";

const EDUCATION_DATA = [
  {
    icon: <MdEngineering className="w-6 h-6" />,
    degree: "Bachelor Of Engineering in Computer Science and Engineering",
    institution: "Institute of Engineering and Technology, Lucknow",
    duration: "2021 - 2025",
    grade: "7.5 CGPA",
  },
  {
    icon: <FaUserPlus className="w-5 h-5" />,
    degree: "12th Standard",
    institution: "Kendriya Vidyalaya Kunjaban No.1 Agartala",
    duration: "2019 - 2021",
    grade: "83 %",
  },
  {
    icon: <FaUser className="w-5 h-5" />,
    degree: "10th Standard",
    institution: "Kendriya Vidyalaya Kunjaban No.1 Agartala",
    duration: "2018 - 2019",
    grade: "86.3 %",
  },
];

const Education = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="glass rounded-[2rem] p-8 md:p-12 border-primary/20 glow-border relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -mr-32 -mt-32" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {EDUCATION_DATA.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6 group"
            >
              {/* Icon Container */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full glass border border-primary/30 flex items-center justify-center text-primary/80 group-hover:text-primary group-hover:glow-border transition-all duration-300">
                  {item.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-4">
                <h3 className="text-lg font-heading font-bold text-white leading-snug group-hover:text-primary transition-colors">
                  {item.degree}
                </h3>
                
                <div className="space-y-1">
                  <p className="text-sm font-body text-white/60 leading-relaxed">
                    {item.institution}
                  </p>
                  <p className="text-xs font-mono text-white/30 uppercase tracking-widest">
                    {item.duration}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="text-xl font-bold text-white tracking-tight">
                    {item.grade}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
