"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { Menu, X } from "lucide-react";
import { cn } from "@/utils/cn";

const NAV_ITEMS = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "PROJECTS", href: "/projects" },
  { name: "CONTACT", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState(pathname);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="fixed top-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <nav className="glass rounded-full px-6 py-3 flex items-center justify-between border-t border-t-primary/30 relative">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-mono text-primary text-sm tracking-tighter sm:text-base">
              think code and repeat
            </span>
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center gap-1 relative">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={() => setHoveredPath(item.href)}
                onMouseLeave={() => setHoveredPath(pathname)}
                className={cn(
                  "relative px-4 py-2 text-xs font-mono transition-colors duration-300",
                  pathname === item.href ? "text-white" : "text-slate-888 hover:text-white"
                )}
              >
                {item.name}
                {hoveredPath === item.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-px bg-primary shadow-[0_0_10px_rgba(0,255,240,0.8)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Resume Button - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              target="_blank"
              href="https://drive.google.com/file/d/1z7gHRFowFZxJVynX0_2js_kvJkhSVdgq/view?usp=sharing"
            >
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-black text-white flex items-center space-x-2 text-xs font-mono px-4 py-2 hover:shadow-[0_0_20px_rgba(0,255,240,0.3)] transition-shadow"
              >
                <span className="flex items-center gap-2">
                  VIEW RESUME
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3 h-3"
                  >
                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </span>
              </HoverBorderGradient>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-primary transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-full left-6 right-6 mt-4 p-6 glass rounded-3xl border border-white/10 z-40 flex flex-col gap-4"
            >
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "font-mono text-sm tracking-widest py-2 transition-colors",
                    pathname === item.href ? "text-primary" : "text-white/70"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <Link
                target="_blank"
                href="https://drive.google.com/file/d/1z7gHRFowFZxJVynX0_2js_kvJkhSVdgq/view?usp=sharing"
                className="flex items-center justify-between font-mono text-sm text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                VIEW RESUME
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
