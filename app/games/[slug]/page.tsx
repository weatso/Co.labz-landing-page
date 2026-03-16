"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

// --- DUMMY MATRIKS (Nanti ganti dengan fetch dari API/CMS) ---
const getGameData = (slug: string) => {
  // Simulasi data berdasarkan URL slug
  return {
    title: slug.replace(/-/g, " ").toUpperCase(),
    genre: "CHAOTIC CO-OP",
    engine: "ROBLOX STUDIO",
    description: "This isn't a walk in the park. It's an absolute blocky nightmare where your friends are your biggest threat. Grab your gear, break the rules, and survive the rampage.",
    image: "/ViewGameRoblox1.png",
    stats: { players: "1.2M+", rating: "94%", likes: "45K" },
    robloxUrl: "#" // Ganti dengan URL Roblox sungguhan
  };
};

export default function GameDetail() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "unknown-game";
  const game = getGameData(slug);

  return (
    <div className="flex flex-col gap-16 pb-20 overflow-hidden relative max-w-7xl mx-auto px-6 mt-10">
      
      {/* --- TOMBOL KEMBALI --- */}
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
        <Link href="/#games" className="inline-block font-black text-xl hover:text-[var(--color-colabz-orange)] transition-colors uppercase tracking-widest">
          &larr; Back to Lab
        </Link>
      </motion.div>

      {/* --- HERO SECTION GAME --- */}
      <section className="flex flex-col lg:flex-row gap-12 items-start">
        
        {/* KOLOM KIRI: Visual/Trailer */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ type: "spring", bounce: 0.4 }}
          className="w-full lg:w-3/5 sketchy-box p-2 bg-white"
        >
          <div className="relative aspect-video w-full border-4 border-[var(--color-colabz-dark)] rounded-xl overflow-hidden bg-gray-200">
            <Image 
              src={game.image} 
              alt={game.title} 
              fill 
              className="object-cover" 
              priority
            />
            {/* Overlay Play Button untuk kesan trailer */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-colors cursor-pointer group">
              <div className="w-20 h-20 bg-[var(--color-colabz-orange)] rounded-full flex items-center justify-center border-4 border-[var(--color-colabz-dark)] shadow-[4px_4px_0_0_var(--color-colabz-dark)] group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
          </div>
        </motion.div>

        {/* KOLOM KANAN: Data & CTA */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ type: "spring", bounce: 0.4, delay: 0.1 }}
          className="w-full lg:w-2/5 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[var(--color-colabz-dark)] text-white text-xs font-black px-3 py-1 tracking-widest uppercase -rotate-2 shadow-[2px_2px_0_0_var(--color-colabz-orange)]">
              {game.engine}
            </span>
            <span className="font-bold text-[var(--color-colabz-orange)] uppercase tracking-wider">
              {game.genre}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter mb-6">
            {game.title}
          </h1>

          <p className="text-xl font-bold text-gray-700 leading-relaxed mb-10">
            {game.description}
          </p>

          {/* Social Proof Stats */}
          <div className="grid grid-cols-3 gap-4 mb-10 border-y-4 border-[var(--color-colabz-dark)] py-4">
            <div className="text-center border-r-4 border-[var(--color-colabz-dark)]">
              <p className="text-3xl font-black text-[var(--color-colabz-orange)]">{game.stats.players}</p>
              <p className="text-sm font-bold uppercase">Players</p>
            </div>
            <div className="text-center border-r-4 border-[var(--color-colabz-dark)]">
              <p className="text-3xl font-black">{game.stats.rating}</p>
              <p className="text-sm font-bold uppercase">Rating</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black">{game.stats.likes}</p>
              <p className="text-sm font-bold uppercase">Likes</p>
            </div>
          </div>

          <Button 
            size="lg" 
            onClick={() => window.open(game.robloxUrl, '_blank')}
            className="sketchy-button w-full bg-[var(--color-colabz-orange)] text-white text-2xl py-10 hover:bg-[#e6551b] hover:-translate-y-1"
          >
            PLAY ON ROBLOX &rarr;
          </Button>
        </motion.div>

      </section>
    </div>
  );
}