"use client";
import { motion } from "framer-motion";

export default function Manifesto() {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 mt-8 md:mt-12 mb-20 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ type: "spring", duration: 1 }} 
        className="sketchy-box p-6 md:p-16 bg-white overflow-hidden"
      >
        {/* PERBAIKAN: Font lebih kecil di HP (text-4xl), bisa memotong kata (break-words) */}
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-[var(--color-colabz-orange)] mb-8 uppercase tracking-tighter -rotate-2 break-words max-w-full">
          THE MANIFESTO
        </h1>
        
        <div className="space-y-8 text-lg sm:text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">
          <p>
            <span className="bg-[var(--color-colabz-dark)] text-white px-2">We are tired of boring games.</span> We are sick of two-hour unskippable tutorials, hidden pay-to-win mechanics, and games that feel like a second job.
          </p>
          <p>
            At <span className="text-[var(--color-colabz-orange)] font-black">Co.Labz</span>, we believe gaming should be about one thing: <strong className="text-black uppercase">Pure, unadulterated FUN.</strong> 
          </p>
          <p>
            We build worlds where chaos is a feature, not a bug. We design mechanics that make you yell at your friends in co-op mode. We don&apos;t care about hyper-realistic graphics if the gameplay is dull. We care about the *feel*.
          </p>
          <ul className="list-disc pl-6 md:pl-8 space-y-4 text-[var(--color-colabz-dark)] mt-8">
            <li>Community First, Corporate Second.</li>
            <li>Ship it fun, fix the bugs later (mostly).</li>
            <li>If it doesn&apos;t make us laugh in the lab, it doesn&apos;t ship.</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}