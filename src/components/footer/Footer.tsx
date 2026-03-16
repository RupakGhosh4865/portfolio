import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-2xl font-heading font-bold tracking-tighter text-white">
            RUPAK<span className="text-primary italic">GHOSH</span>
          </Link>
          <p className="text-xs font-mono text-white/30 uppercase tracking-widest">
            © 2025 • AI & BACKEND ENGINEER
          </p>
        </div>

        <div className="flex items-center gap-8">
          {[
            { icon: <FaGithub />, href: "https://github.com/RupakGhosh4865", label: "Github" },
            { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/rupak-ghosh-949258244/", label: "Linkedin" },
          ].map((social, i) => (
            <Link
              key={i}
              href={social.href}
              target="_blank"
              className="text-white/50 hover:text-primary transition-colors text-xl"
              aria-label={social.label}
            >
              {social.icon}
            </Link>
          ))}
        </div>

        <div className="text-center md:text-right">
          <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">
            Built with Next.js • Aceternity • Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
