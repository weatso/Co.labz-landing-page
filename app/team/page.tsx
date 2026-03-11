"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// --- TIPE DATA ---
type TeamMemberType = {
  id: number;
  name: string;
  role: string;
  desc: string;
  avatar: string;
  color: string;
  maxHp: number;
};

// --- KOMPONEN KARTU TIM (MINI GAME) ---
function TeamMemberCard({ member, delay }: { member: TeamMemberType, delay: number }) {
  const [hp, setHp] = useState(member.maxHp);
  const [damageParticles, setDamageParticles] = useState<{id: number, val: number}[]>([]);
  const [isShaking, setIsShaking] = useState(false);

  const isDefeated = hp <= 0;

  const handleAttack = () => {
    if (isDefeated) return;

    // Hitung damage acak antara 15 sampai 35
    const damage = Math.floor(Math.random() * 21) + 15;
    const newHp = Math.max(0, hp - damage);
    setHp(newHp);

    // Efek Bergetar
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 200);

    // Munculkan teks Damage melayang
    const particleId = Date.now();
    setDamageParticles(prev => [...prev, { id: particleId, val: damage }]);

    // Hapus partikel setelah animasi selesai (1 detik)
    setTimeout(() => {
      setDamageParticles(prev => prev.filter(p => p.id !== particleId));
    }, 1000);
  };

  const handleRevive = (e: React.MouseEvent) => {
    e.stopPropagation(); // Mencegah klik tombol revive terhitung sebagai attack
    setHp(member.maxHp);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ delay }}
    >
      <Card 
        onClick={handleAttack}
        className={`sketchy-box border-0 h-full p-2 cursor-pointer transition-all duration-300 relative overflow-hidden select-none
          ${isDefeated ? 'bg-gray-300 grayscale' : member.color} 
          ${isShaking ? 'translate-x-1 -translate-y-1' : ''}
        `}
      >
        <CardContent className="p-8 flex flex-col items-center text-center h-full relative z-10">
          
          {/* HEALTH BAR (BAR NYAWA) */}
          <div className="w-full bg-black/20 h-4 rounded-full mb-6 border-2 border-[var(--color-colabz-dark)] overflow-hidden">
            <motion.div 
              className={`h-full ${hp > 50 ? 'bg-green-500' : hp > 20 ? 'bg-yellow-400' : 'bg-red-500'}`}
              initial={{ width: "100%" }}
              animate={{ width: `${(hp / member.maxHp) * 100}%` }}
              transition={{ type: "spring", bounce: 0.5 }}
            />
          </div>

          <div className="relative">
            {/* AVATAR */}
            <motion.div 
              animate={{ 
                scale: isDefeated ? 0.8 : isShaking ? 1.2 : 1,
                rotate: isDefeated ? 90 : isShaking ? -15 : 0 
              }}
              className="text-8xl mb-4"
            >
              {isDefeated ? "💀" : member.avatar}
            </motion.div>

            {/* FLOATING DAMAGE PARTICLES */}
            <AnimatePresence>
              {damageParticles.map(particle => (
                <motion.div
                  key={particle.id}
                  initial={{ opacity: 1, y: 0, scale: 0.5, x: "-50%" }}
                  animate={{ opacity: 0, y: -80, scale: 1.5, x: "-50%" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute top-0 left-1/2 text-red-600 font-black text-3xl drop-shadow-[2px_2px_0_white] z-50 pointer-events-none"
                >
                  -{particle.val}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          <h2 className={`text-4xl font-black uppercase ${isDefeated ? 'text-gray-600 line-through' : 'text-[var(--color-colabz-dark)]'}`}>
            {member.name}
          </h2>
          <h3 className="text-xl font-black text-gray-700 mb-6 uppercase tracking-widest">
            {isDefeated ? "RESPAWNING..." : member.role}
          </h3>
          <p className="text-lg font-bold text-gray-800 leading-relaxed">
            {isDefeated ? "This lab rat has been successfully squashed." : member.desc}
          </p>

          {/* TOMBOL REVIVE (Hanya muncul jika mati) */}
          {isDefeated && (
             <Button 
                onClick={handleRevive}
                className="mt-6 sketchy-button bg-[var(--color-colabz-dark)] text-white hover:bg-[var(--color-colabz-orange)]"
             >
                USE 1-UP MUSHROOM 🍄
             </Button>
          )}

        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Team() {
  const team: TeamMemberType[] = [
    {
      id: 1,
      name: "Adit",
      role: "Lead Mad Scientist",
      desc: "Balancing 4th-semester chaos with building wild worlds in Roblox Studio and Pygame. Fueled exclusively by coffee and late-night debugging.",
      avatar: "👨‍💻",
      color: "bg-[var(--color-colabz-orange)]",
      maxHp: 150 // Adit sebagai "Boss" nyawanya lebih tebal
    },
    {
      id: 2,
      name: "The Mascot",
      role: "Chief Morale Officer",
      desc: "Barks at bugs until they disappear. Responsible for the playful energy of the studio and demanding treats during crunch time.",
      avatar: "🐶",
      color: "bg-white",
      maxHp: 100
    },
    {
      id: 3,
      name: "You?",
      role: "Future Lab Rat",
      desc: "We are always looking for crazy artists and coders to join the chaos. Hit up our Discord if you want to break games with us.",
      avatar: "❓",
      color: "bg-blue-100",
      maxHp: 80
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 mt-12 mb-20">
      <div className="text-center mb-16 relative">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-6xl md:text-8xl font-black text-[var(--color-colabz-dark)] uppercase tracking-tighter">
          MEET THE <span className="text-white bg-[var(--color-colabz-orange)] px-4">RATS</span>
        </motion.h1>
        
        {/* PETUNJUK MINI GAME */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, type: "spring" }}
          className="inline-block mt-6 bg-[var(--color-colabz-dark)] text-white px-6 py-3 font-black text-xl tracking-widest uppercase -rotate-2 border-4 border-dashed border-[var(--color-colabz-orange)]"
        >
          ⚔️ CLICK THE CARDS TO ATTACK! ⚔️
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {team.map((member, i) => (
          <TeamMemberCard key={member.id} member={member} delay={i * 0.15} />
        ))}
      </div>
    </div>
  );
}