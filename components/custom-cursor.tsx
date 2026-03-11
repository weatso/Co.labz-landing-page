"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);

  // MENGGUNAKAN useMotionValue AGAR TIDAK LAG
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Menambahkan efek spring yang SANGAT CEPAT agar pergerakannya organik tapi tetap instan menempel ke mouse
  const springConfig = { stiffness: 1000, damping: 50, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Matikan di HP
    if (window.innerWidth < 768) return;

    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX - 20); // 20 adalah offset agar titik tengah pas di ujung panah
      cursorY.set(e.clientY - 20);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'button' || 
        target.tagName.toLowerCase() === 'a' || 
        target.closest('button') || 
        target.closest('a') || 
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[10000] flex justify-center items-center text-[var(--color-colabz-orange)] drop-shadow-[2px_2px_0_var(--color-colabz-dark)]"
      // style diatur langsung oleh GPU, BUKAN oleh animate prop
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      // animate HANYA mengurus rotasi dan ukuran saat tombol di-hover
      animate={{
        rotate: isHovering ? 45 : 0, 
        scale: isHovering ? 1.3 : 1,
      }}
      transition={{ type: "spring", bounce: 0.6, duration: 0.3 }}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="square">
        <line x1="20" y1="0" x2="20" y2="40" />
        <line x1="0" y1="20" x2="40" y2="20" />
      </svg>
      
      {/* Teks Pop-up "BAM!" */}
      {isHovering && (
        <span className="absolute left-10 text-sm font-black bg-[var(--color-colabz-dark)] text-white px-2 py-1 -rotate-6">
          BAM!
        </span>
      )}
    </motion.div>
  );
}