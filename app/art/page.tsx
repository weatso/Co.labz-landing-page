"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const artworks = [
  { id: 1, title: "The Day Z: Concept Art", src: "/ViewGameRoblox2.png" },
  { id: 2, title: "A Warrior Tale: Scene", src: "/ViewGame8Bit2.png" },
  { id: 3, title: "The Day Z: Map Sketch", src: "/ViewGameRoblox3.png" },
  { id: 4, title: "A Warrior Tale: Level Design", src: "/ViewGame8Bit3.png" },
];

export default function Art() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <motion.div
      animate={{ backgroundColor: isDarkMode ? "#0a0a0a" : "transparent" }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen transition-colors ${isDarkMode ? 'text-white' : 'text-[var(--color-colabz-dark)]'}`}
    >
      <div className="max-w-7xl mx-auto p-4 sm:p-6 pt-12 pb-20 overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">

          {/* --- PERBAIKAN: UKURAN TEKS RESPONSIF --- */}
          {/* text-4xl untuk HP, sm:text-6xl untuk Tablet, md:text-8xl untuk Desktop */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter max-w-full break-words"
          >
            THE <span className="text-[var(--color-colabz-orange)] underline decoration-4 md:decoration-8 underline-offset-8">SKETCHBOOK</span>
          </motion.h1>

          <Button
            onClick={() => setIsDarkMode(!isDarkMode)}
            variant="outline"
            className={`sketchy-button text-base md:text-lg py-4 px-6 md:py-6 md:px-8 self-start md:self-auto ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-[var(--color-colabz-dark)] text-white hover:bg-[var(--color-colabz-orange)]'}`}
          >
            {isDarkMode ? "💡 TURN ON LIGHTS" : "🕶️ FOCUS MODE"}
          </Button>
        </div>

        <div className="columns-1 md:columns-2 gap-8 space-y-8">
          {artworks.map((art, i) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`sketchy-box overflow-hidden break-inside-avoid relative group ${isDarkMode ? 'border-gray-800 shadow-none' : ''}`}
            >
              <Image unoptimized src={art.src} alt={art.title} width={800} height={800} className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-full bg-[var(--color-colabz-orange)] text-white p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                <h3 className="text-xl md:text-2xl font-black uppercase">{art.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}