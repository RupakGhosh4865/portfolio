"use client";

import React, { FormEvent, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export function BackgroundBeamsDemo() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (email === "" || message === "" || name === "") {
      return toast.error("All Fields Are Required!!!");
    }

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        toast.success("Message Sent Successfully !");
        setEmail("");
        setName("");
        setMessage("");
      } else {
        toast.error("Try Again !");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Try again.");
    }
  };

  return (
    <div className="min-h-screen w-full bg-black relative flex flex-col items-center justify-center py-24 px-6 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]">
        <div className="absolute inset-0 bg-dot-thick-neutral-800" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          {/* Left Column: Direct Contact */}
          <div className="flex-1 space-y-12">
            <div className="space-y-6">
              <span className="px-3 py-1 glass border border-primary/30 rounded-full text-[10px] font-mono text-primary tracking-widest uppercase inline-block">
                [ LET&apos;S BUILD SOMETHING ]
              </span>
              <h1 className="text-5xl lg:text-7xl font-heading font-bold text-white tracking-tighter leading-tight">
                Got an idea? <br />
                <span className="text-gradient">Let&apos;s make it real.</span>
              </h1>
            </div>

            <div className="space-y-8">
              <h2 className="text-xl font-heading font-semibold text-white/90">Direct Contact</h2>
              <div className="space-y-6">
                {[
                  { icon: <FaEnvelope />, text: "rupakghosh.coding@gmail.com", href: "mailto:rupakghosh.coding@gmail.com" },
                  { icon: <FaLinkedin />, text: "linkedin.com/in/rupakghosh", href: "https://www.linkedin.com/in/rupak-ghosh-949258244/" },
                  { icon: <FaGithub />, text: "github.com/RupakGhosh4865", href: "https://github.com/RupakGhosh4865" },
                  { icon: <FaMapMarkerAlt />, text: "Gurgaon, Haryana, India", href: "#" },
                ].map((item, i) => (
                  <ContactLink 
                    key={i} 
                    href={item.href}
                    className="flex items-center gap-4 text-slate-888 hover:text-primary transition-colors group"
                  >
                    <span className="p-3 glass rounded-xl group-hover:glow-border transition-all">
                      {item.icon}
                    </span>
                    <span className="font-body text-lg">{item.text}</span>
                  </ContactLink>
                ))}
              </div>

              <div className="flex items-center gap-2 px-4 py-2 glass rounded-full w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-mono text-white/50">Response time: ~24hrs</span>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="flex-1">
            <div className="glass p-8 lg:p-12 rounded-3xl glow-border">
              <form ref={form} onSubmit={handleSubmit} className="space-y-8">
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="peer w-full bg-transparent border-b border-white/10 py-2 outline-none focus:border-primary transition-colors font-body text-white"
                  />
                  <label className="absolute left-0 top-2 text-slate-888 peer-focus:-top-4 peer-focus:text-primary peer-focus:text-xs peer-valid:-top-4 peer-valid:text-xs transition-all pointer-events-none uppercase tracking-widest font-mono">
                    Your Name
                  </label>
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="peer w-full bg-transparent border-b border-white/10 py-2 outline-none focus:border-primary transition-colors font-body text-white"
                  />
                  <label className="absolute left-0 top-2 text-slate-888 peer-focus:-top-4 peer-focus:text-primary peer-focus:text-xs peer-valid:-top-4 peer-valid:text-xs transition-all pointer-events-none uppercase tracking-widest font-mono">
                    Email Address
                  </label>
                </div>

                <div className="relative group">
                  <textarea
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="peer w-full bg-transparent border-b border-white/10 py-2 outline-none focus:border-primary transition-colors font-body text-white resize-none"
                  />
                  <label className="absolute left-0 top-2 text-slate-888 peer-focus:-top-4 peer-focus:text-primary peer-focus:text-xs peer-valid:-top-4 peer-valid:text-xs transition-all pointer-events-none uppercase tracking-widest font-mono">
                    Your Message
                  </label>
                </div>

                <HoverBorderGradient
                  containerClassName="w-full rounded-2xl"
                  as="button"
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(0,255,240,0.2)] hover:shadow-[0_0_30px_rgba(0,255,240,0.4)] transition-all"
                >
                  SEND MESSAGE
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </HoverBorderGradient>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="dark"
      />
    </div>
  );
}

const ContactLink = ({ href, children, ...props }: any) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
};
