"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button"; // <-- Ini dia baris yang tertinggal!

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
  { name: "Games", sub: "Play Now", href: "/#games" },
  { name: "Manifesto", sub: "About Us", href: "/manifesto" },
  { name: "Lab Rats", sub: "Our Team", href: "/team" },
  { name: "Sketchbook", sub: "Devlog & Art", href: "/art" },
  { name: "Loot", sub: "Merch Store", href: "/merch" },
];

  return (
    <header className="relative z-50 max-w-7xl mx-auto">
      <nav className="flex justify-between items-center p-6 relative z-50">
        <Link href="/" className="hover:scale-105 transition-transform duration-200 z-50">
          <div className="relative w-[140px] md:w-[180px] h-[45px] md:h-[60px]">
             <Image src="/logo.png" alt="Co.Labz Logo" fill className="mix-blend-multiply object-contain" priority />
          </div>
        </Link>

       {/* --- MENU DESKTOP / LAPTOP --- */}
<div className="hidden md:flex gap-6 lg:gap-8 font-black text-lg lg:text-xl uppercase tracking-wider items-center">
  {menuItems.map((item) => (
    <Link 
      key={item.name} 
      href={item.href} 
      className="group relative flex flex-col items-center hover:-translate-y-1 transition-transform"
    >
      <span className="text-[var(--color-colabz-dark)] group-hover:text-[var(--color-colabz-orange)] transition-colors">
        {item.name}
      </span>
      {/* Tooltip fungsional yang muncul saat di-hover */}
<span className="absolute top-full mt-8 text-xs font-bold bg-[var(--color-colabz-dark)] text-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-[3px_3px_0_0_var(--color-colabz-orange)] pointer-events-none">
  {item.sub}
</span>
    </Link>
  ))}
</div>

        {/* --- TOMBOL HAMBURGER MOBILE & TABLET --- */}
        <button 
          className="md:hidden z-50 p-2 cursor-pointer" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <div className="space-y-2 flex flex-col items-end">
            <motion.span animate={isOpen ? { rotate: 45, y: 12, backgroundColor: "#ffffff" } : { rotate: 0, y: 0, backgroundColor: "#1a1a1a" }} className="block w-8 h-1 rounded-full origin-center transition-colors"></motion.span>
            <motion.span animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-6 h-1 bg-[var(--color-colabz-dark)] rounded-full transition-colors"></motion.span>
            <motion.span animate={isOpen ? { rotate: -45, y: -12, backgroundColor: "#ffffff", width: "32px" } : { rotate: 0, y: 0, backgroundColor: "#1a1a1a" }} className="block w-8 h-1 rounded-full origin-center transition-colors"></motion.span>
          </div>
        </button>
      </nav>

      {/* --- MENU LAYAR PENUH UNTUK MOBILE --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", bounce: 0.1, duration: 0.5 }}
            className="fixed top-0 left-0 w-full h-[100dvh] bg-[var(--color-colabz-orange)] z-40 flex flex-col justify-center items-center gap-8 md:hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute top-20 right-10 text-9xl opacity-10 rotate-45 pointer-events-none">🦴</div>
            
            {menuItems.map((item, i) => (
              <motion.div key={item.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + (i * 0.1) }}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-5xl sm:text-6xl font-black text-white hover:text-[var(--color-colabz-dark)] uppercase tracking-tighter"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="absolute bottom-10">
              <Button onClick={() => setIsOpen(false)} variant="outline" className="sketchy-button bg-white text-[var(--color-colabz-dark)] border-4 border-[var(--color-colabz-dark)]">
                CLOSE MENU
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}