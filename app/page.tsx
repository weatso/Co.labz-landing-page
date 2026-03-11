"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

// --- DATA DUMMY ---
const games = [
  { id: 1, title: "The Day Z: Rampage", genre: "Action Survival", engine: "Roblox Studio", image: "/ViewGameRoblox1.png" },
  { id: 2, title: "A Warrior Tale", genre: "RPG Adventure", engine: "Custom Engine", image: "/ViewGame8Bit1.png" },
];

const news = [
  { id: 1, date: "Feb 20, 2026", category: "Devlog", title: "We accidentally deleted the main character.", excerpt: "So, about that update we promised... turns out Ctrl+Z doesn't work on production servers. Here is how we fixed it." },
  { id: 2, date: "Feb 15, 2026", category: "Update", title: "Blocky Brawlers: Season 2 is LIVE!", excerpt: "New maps, new blocks, and a grappling hook that definitely does not break the game physics (we hope)." }
];

const faqs = [
  { q: "Are your games free to play?", a: "Most of our core games are absolutely free! We sell optional cool cosmetics so we can pay for server costs and buy more dog treats." },
  { q: "Can I join Co.Labz as a developer or artist?", a: "We are always looking for wild talent! Hit us up on our Discord server and share your portfolio." }
];

// --- ANIMASI ---
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4, duration: 0.8 } },
};

export default function Home() {
  // STATE UNTUK MINI-GAME (Easter Egg)
  const [clickCount, setClickCount] = useState(0);

  // LOGIKA GETARAN LAYAR
  const isChaos = clickCount >= 30;
  const shakeAnimation = clickCount > 0 ? {
    x: isChaos ? [-15, 15, -20, 20, -10, 10, 0] : [0, -clickCount, clickCount, -clickCount / 2, clickCount / 2, 0],
    y: isChaos ? [-10, 10, -15, 15, 0] : [0, clickCount / 2, -clickCount / 2, 0],
    rotate: isChaos ? [-2, 2, -1, 1, 0] : 0,
    transition: {
      duration: isChaos ? 0.3 : 0.4,
      repeat: isChaos ? Infinity : 0
    }
  } : {};

  return (
    <div className="flex flex-col gap-24 pb-20 overflow-hidden relative">

      {/* --- 1. HERO SECTION & EASTER EGG --- */}
      <motion.section animate={shakeAnimation} className="min-h-[85vh] flex flex-col justify-center items-center text-center p-6 relative">
        <motion.div initial="hidden" animate="visible" variants={fadeUpVariants} className="max-w-4xl z-10 flex flex-col items-center">

          <div className="mb-8 relative w-[250px] md:w-[400px] h-[120px] md:h-[180px]">
            <Image src="/logo.png" alt="Co.Labz Logo" fill className="object-contain mix-blend-multiply drop-shadow-xl pointer-events-none" priority />
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-[var(--color-colabz-dark)]">
            WE ENGINEER <br />

            {/* Wrapper diatur agar punya margin bawah ekstra (mb-12) di HP agar panahnya tidak menimpa paragraf */}
            <div className="relative inline-block mt-4 mb-12 md:mb-0">

              {/* --- TANDA PANAH UNTUK MOBILE (MUNCUL DI BAWAH, NUNJUK KE ATAS) --- */}
              {clickCount === 0 && (
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                  className="md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-4 flex flex-col items-center pointer-events-none z-20"
                >
                  <svg className="w-8 h-8 text-[var(--color-colabz-dark)] shrink-0 mb-1" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M12 19V5"></path>
                    <path d="M5 12l7-7 7 7"></path>
                  </svg>
                  <span className="text-sm font-black text-white bg-[var(--color-colabz-dark)] px-4 py-2 rounded-xl whitespace-nowrap shadow-[3px_3px_0_0_var(--color-colabz-orange)] uppercase tracking-widest -rotate-2">
                    CLICK IT!
                  </span>
                </motion.div>
              )}

              {/* --- TANDA PANAH UNTUK DESKTOP (MUNCUL DI KANAN, NUNJUK KE KIRI) --- */}
              {clickCount === 0 && (
                <motion.div
                  animate={{ x: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                  className="hidden md:flex absolute top-1/2 left-full ml-8 -translate-y-1/2 items-center pointer-events-none z-20"
                >
                  <svg className="w-8 h-8 text-[var(--color-colabz-dark)] shrink-0" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M19 12H5"></path>
                    <path d="M12 19l-7-7 7-7"></path>
                  </svg>
                  <span className="text-base font-black text-white bg-[var(--color-colabz-dark)] px-4 py-2 rounded-2xl whitespace-nowrap ml-2 shadow-[4px_4px_0_0_var(--color-colabz-orange)] uppercase tracking-widest -rotate-2">
                    CLICK IT!
                  </span>
                </motion.div>
              )}

              {/* TOMBOL "FUN" */}
              <motion.span
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9, rotate: -15 }}
                onClick={() => setClickCount(prev => prev + 1)}
                className={`text-white px-4 py-1 -rotate-2 inline-block cursor-pointer select-none transition-colors shadow-[6px_6px_0_0_rgba(26,26,26,1)] hover:shadow-none ${isChaos ? 'bg-red-600' : 'bg-[var(--color-colabz-orange)]'}`}
              >
                {clickCount === 0 ? "FUN." :
                  clickCount < 10 ? `FUN x${clickCount}` :
                    clickCount < 20 ? "STOP CLICKING!" :
                      clickCount < 30 ? "YOU'RE BREAKING IT!" :
                        "CHAOS UNLOCKED 💀"}
              </motion.span>
            </div>

          </h1>

          <p className="text-xl md:text-2xl font-bold text-gray-700 mt-6 mb-10 max-w-2xl mx-auto leading-relaxed z-10 relative">
            An independent game studio crafting chaotic co-op experiences and playful worlds. We make games that bite back.
          </p>

          <div className="flex flex-wrap justify-center gap-6 z-10 relative">
            <Button size="lg" className="sketchy-button bg-[var(--color-colabz-orange)] text-white text-xl py-8 px-10 hover:bg-[#e6551b]">
              PLAY OUR GAMES
            </Button>
          </div>
        </motion.div>
      </motion.section>

      {/* --- MARQUEE --- */}
      <div className="w-full overflow-hidden bg-[var(--color-colabz-orange)] border-y-8 border-[var(--color-colabz-dark)] py-4 flex items-center -rotate-1 scale-105 z-20 shadow-[0_8px_0_0_rgba(26,26,26,0.2)]">
        <motion.div
          className="flex whitespace-nowrap font-black text-3xl md:text-4xl text-[var(--color-colabz-dark)] uppercase tracking-widest cursor-default"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
        >
          <span className="mx-8">&bull; NEW PLAYTEST OPEN NOW</span>
          <span className="mx-8">&bull; WISHLIST BLOCKY BRAWLERS</span>
          <span className="mx-8">&bull; JOIN THE COMMUNITY</span>
          <span className="mx-8">&bull; NEW PLAYTEST OPEN NOW</span>
          <span className="mx-8">&bull; WISHLIST BLOCKY BRAWLERS</span>
          <span className="mx-8">&bull; JOIN THE COMMUNITY</span>
        </motion.div>
      </div>

      {/* --- 2. COMPANY PROFILE & DRAGGABLE PHYSICS --- */}
      <section id="team" className="max-w-6xl mx-auto p-6 w-full mt-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariants} className="sketchy-box bg-[var(--color-colabz-dark)] text-white p-10 md:p-16 flex flex-col md:flex-row gap-12 items-center overflow-hidden">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-[var(--color-colabz-orange)]">THE MAD SCIENTISTS</h2>
            <p className="text-lg font-bold mb-6 leading-relaxed text-gray-300">
              Founded by a pack of passionate developers, Co.Labz isn&apos;t your typical corporate studio. We believe the best games are born from community feedback, weird ideas, and a lot of caffeine.
            </p>
            <p className="text-sm text-gray-400 italic font-bold">Try grabbing and throwing the Code & Art blocks! &rarr;</p>
          </div>

          <div className="md:w-1/2 grid grid-cols-2 gap-4 relative">
            <motion.div
              drag
              dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
              whileDrag={{ scale: 1.2, rotate: 10, cursor: "grabbing" }}
              dragElastic={0.5}
              className="aspect-square bg-[var(--color-colabz-orange)] rounded-2xl border-4 border-white flex items-center justify-center -rotate-3 cursor-grab z-10 shadow-[8px_8px_0_0_rgba(255,255,255,0.2)]"
            >
              <span className="font-black text-2xl text-[var(--color-colabz-dark)] tracking-widest pointer-events-none">CODE</span>
            </motion.div>

            <motion.div
              drag
              dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
              whileDrag={{ scale: 1.2, rotate: -10, cursor: "grabbing" }}
              dragElastic={0.5}
              className="aspect-square bg-white rounded-2xl border-4 border-[var(--color-colabz-orange)] flex items-center justify-center rotate-3 cursor-grab z-10 shadow-[8px_8px_0_0_rgba(255,95,31,0.5)]"
            >
              <span className="font-black text-2xl text-[var(--color-colabz-dark)] tracking-widest pointer-events-none">ART</span>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* --- 3. GAMES PORTFOLIO & 3D HOVER EFFECT --- */}
      <section id="games" className="max-w-7xl mx-auto p-6 w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-[var(--color-colabz-dark)] -rotate-1 bg-white inline-block px-4 border-4 border-[var(--color-colabz-dark)] shadow-[4px_4px_0_0_var(--color-colabz-orange)] max-w-full break-words">
            LAB EXPERIMENTS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {games.map((game, i) => (
            <motion.div
              key={game.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, type: "spring" } } }}
              className="h-full"
              whileHover={{ scale: 1.05, y: -10, rotateZ: i % 2 === 0 ? 2 : -2 }}
              transition={{ type: "spring", bounce: 0.4 }}
            >
              <Card className="sketchy-box border-0 h-full flex flex-col p-2 bg-white cursor-pointer">
                <CardHeader className="p-0 border-4 border-[var(--color-colabz-dark)] rounded-xl overflow-hidden">
                  <div className="relative h-56 w-full">
                    <img src={game.image} alt={game.title} className="w-full h-full object-cover" />
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow pointer-events-none">
                  <p className="text-sm font-black text-[var(--color-colabz-orange)] uppercase tracking-widest mb-1">{game.engine}</p>
                  <CardTitle className="text-3xl font-black uppercase mb-2 leading-tight">{game.title}</CardTitle>
                  <p className="text-lg font-bold text-gray-600">{game.genre}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 4. COMMUNITY FOCUS --- */}
      <section className="max-w-6xl mx-auto p-6 w-full mb-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants} className="border-8 border-[var(--color-colabz-dark)] bg-[var(--color-colabz-orange)] p-8 md:p-12 text-center rounded-3xl relative overflow-hidden shadow-[12px_12px_0_0_rgba(26,26,26,1)]">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-wider relative z-10">We Build *With* You</h2>
          <p className="text-xl font-bold text-[var(--color-colabz-dark)] max-w-3xl mx-auto mb-10 relative z-10">
            A game isn&apos;t finished until the players get their hands on it. We run open playtests, listen to wild feedback, and actively shape our updates based on what YOU want to play.
          </p>
        </motion.div>
      </section>

    </div>
  );
}