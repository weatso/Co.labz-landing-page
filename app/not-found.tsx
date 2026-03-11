"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center p-6 relative overflow-hidden">
      <motion.div 
        initial={{ rotate: -10, scale: 0.8 }} 
        animate={{ rotate: 0, scale: 1 }} 
        transition={{ type: "spring", bounce: 0.6 }}
      >
        <h1 className="text-8xl md:text-[150px] font-black text-[var(--color-colabz-orange)] drop-shadow-[8px_8px_0_var(--color-colabz-dark)] mb-4">
          404
        </h1>
      </motion.div>
      
      <h2 className="text-3xl md:text-5xl font-black uppercase text-[var(--color-colabz-dark)] mb-6">
        THE LAB DOG ATE THIS PAGE 🐶
      </h2>
      
      <p className="text-xl font-bold text-gray-600 max-w-lg mb-10">
        Looks like this experiment blew up in our faces. The page you are looking for has been moved, deleted, or never existed in this timeline.
      </p>
      
      <Link href="/">
        <Button size="lg" className="sketchy-button bg-[var(--color-colabz-dark)] text-white text-xl py-8 px-10 hover:bg-[var(--color-colabz-orange)]">
          BACK TO SAFETY
        </Button>
      </Link>
    </div>
  );
}