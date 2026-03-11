"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Layar loading akan otomatis hilang setelah 2 detik
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }} // Efek tirai terbuka ke atas
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] bg-[var(--color-colabz-dark)] flex flex-col justify-center items-center overflow-hidden"
        >
          {/* Roda Gigi Berputar */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="text-8xl mb-8"
          >
            ⚙️
          </motion.div>
          
          {/* Teks Berkedip */}
          <motion.h1 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-4xl md:text-6xl font-black text-white uppercase tracking-widest text-center px-4"
          >
            BOOTING <span className="text-[var(--color-colabz-orange)]">CHAOS...</span>
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}