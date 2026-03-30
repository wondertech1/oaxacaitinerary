"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { guideLinks } from "@/lib/constants/guides";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isGuideActive = guideLinks.some((g) => pathname === g.href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setGuidesOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setGuidesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-lana/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="group flex flex-col">
            <span className="font-heading text-xl md:text-2xl font-bold text-copal tracking-tight group-hover:tracking-normal transition-all duration-300">
              OAXACA
            </span>
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-barro -mt-1">
              itinerary
            </span>
          </Link>

          {/* Desktop nav — warp thread */}
          <nav className="hidden md:block">
            <div className="relative flex items-center gap-8 pb-1">
              {/* The warp thread line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-barro/20" />

              {/* Home */}
              <Link
                href="/"
                className="relative flex flex-col items-center gap-1.5 group pb-2"
              >
                <div
                  className={`w-[6px] h-[6px] rotate-45 transition-colors duration-200 ${
                    pathname === "/" ? "bg-barro" : "bg-barro/30 group-hover:bg-barro"
                  }`}
                />
                <span
                  className={`text-[11px] font-mono uppercase tracking-wider transition-colors duration-200 ${
                    pathname === "/"
                      ? "text-copal"
                      : "text-copal/50 group-hover:text-copal"
                  }`}
                >
                  Home
                </span>
                <div
                  className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-[2px] bg-barro transition-all duration-200 ${
                    pathname === "/"
                      ? "h-2 opacity-100"
                      : "h-0 opacity-0 group-hover:h-2 group-hover:opacity-100"
                  }`}
                />
              </Link>

              {/* Guides dropdown */}
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setGuidesOpen(!guidesOpen)}
                  className="relative flex flex-col items-center gap-1.5 group pb-2 cursor-pointer"
                >
                  <div
                    className={`w-[6px] h-[6px] rotate-45 transition-colors duration-200 ${
                      isGuideActive ? "bg-barro" : "bg-barro/30 group-hover:bg-barro"
                    }`}
                  />
                  <span
                    className={`flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider transition-colors duration-200 ${
                      isGuideActive
                        ? "text-copal"
                        : "text-copal/50 group-hover:text-copal"
                    }`}
                  >
                    Guides
                    <ChevronDown
                      size={10}
                      className={`transition-transform duration-200 ${
                        guidesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                  <div
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-[2px] bg-barro transition-all duration-200 ${
                      isGuideActive
                        ? "h-2 opacity-100"
                        : "h-0 opacity-0 group-hover:h-2 group-hover:opacity-100"
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {guidesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-lana/[0.98] backdrop-blur-md border border-copal/[0.06] rounded-[6px] shadow-md py-2 z-50"
                    >
                      {guideLinks.map((guide) => {
                        const active = pathname === guide.href;
                        return (
                          <Link
                            key={guide.href}
                            href={guide.href}
                            className={`block px-4 py-2 transition-colors ${
                              active
                                ? "text-barro bg-barro/[0.04]"
                                : "text-copal/60 hover:text-copal hover:bg-copal/[0.03]"
                            }`}
                          >
                            {guide.kicker && (
                              <span className="block text-[9px] font-mono uppercase tracking-wider text-mezcal mb-0.5">
                                {guide.kicker}
                              </span>
                            )}
                            <span className="text-xs font-mono uppercase tracking-wider">
                              {guide.label}
                            </span>
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* About */}
              <Link
                href="/about"
                className="relative flex flex-col items-center gap-1.5 group pb-2"
              >
                <div
                  className={`w-[6px] h-[6px] rotate-45 transition-colors duration-200 ${
                    pathname === "/about" ? "bg-barro" : "bg-barro/30 group-hover:bg-barro"
                  }`}
                />
                <span
                  className={`text-[11px] font-mono uppercase tracking-wider transition-colors duration-200 ${
                    pathname === "/about"
                      ? "text-copal"
                      : "text-copal/50 group-hover:text-copal"
                  }`}
                >
                  About
                </span>
                <div
                  className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-[2px] bg-barro transition-all duration-200 ${
                    pathname === "/about"
                      ? "h-2 opacity-100"
                      : "h-0 opacity-0 group-hover:h-2 group-hover:opacity-100"
                  }`}
                />
              </Link>
            </div>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-copal"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu — slides from LEFT */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-copal/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 left-0 bottom-0 w-64 bg-lana/[0.98] z-50 md:hidden overflow-y-auto"
            >
              {/* Loom texture overlay */}
              <div className="absolute inset-0 loom-texture pointer-events-none" />

              <div className="relative z-10 pt-20 px-6 pb-8">
                {/* Home */}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0 }}
                >
                  <Link
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className={`block py-3 font-heading text-2xl transition-colors ${
                      pathname === "/"
                        ? "text-barro border-l-2 border-barro pl-4"
                        : "text-copal/70 hover:text-copal pl-4"
                    }`}
                  >
                    Home
                  </Link>
                </motion.div>

                {/* Guides heading */}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 }}
                >
                  <span className="block py-3 font-heading text-2xl text-copal/40 pl-4">
                    Guides
                  </span>
                </motion.div>

                {/* Guide items */}
                <div className="border-l border-barro/20 ml-4">
                  {guideLinks.map((guide, i) => {
                    const active = pathname === guide.href;
                    return (
                      <motion.div
                        key={guide.href}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (i + 2) * 0.04 }}
                      >
                        <Link
                          href={guide.href}
                          onClick={() => setMobileOpen(false)}
                          className={`block py-2 pl-4 text-lg transition-colors ${
                            active
                              ? "text-barro font-bold"
                              : "text-copal/60 hover:text-copal"
                          }`}
                        >
                          {guide.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* About */}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    href="/about"
                    onClick={() => setMobileOpen(false)}
                    className={`block py-3 mt-2 font-heading text-2xl transition-colors ${
                      pathname === "/about"
                        ? "text-barro border-l-2 border-barro pl-4"
                        : "text-copal/70 hover:text-copal pl-4"
                    }`}
                  >
                    About
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
