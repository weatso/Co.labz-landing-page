"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type MerchProduct = {
  id: number;
  name: string;
  price: string;
  img: string;
};

function MerchItem({ item, delay }: { item: MerchProduct, delay: number }) {
  const [buttonState, setButtonState] = useState("ADD TO CART");

  const handleAddToCart = () => {
    setButtonState("YEETED! 🛒");
    setTimeout(() => setButtonState("ADD TO CART"), 1500); 
  };

  return (
    // Gunakan whileInView di sini
    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay, type: "spring" }}>
      <Card className="sketchy-box border-0 h-full p-2 bg-white flex flex-col hover:-translate-y-2 transition-transform duration-300">
        <div className="relative h-80 w-full border-4 border-[var(--color-colabz-dark)] rounded-xl overflow-hidden mb-4 bg-gray-50">
          {/* Kita tambahkan loading="lazy" agar browser mengatur antreannya */}
          <img src={item.img} alt={item.name} loading="lazy" className="w-full h-full object-cover mix-blend-multiply" />
          <div className="absolute top-4 right-4 bg-[var(--color-colabz-orange)] text-white text-2xl font-black px-4 py-2 border-2 border-[var(--color-colabz-dark)] -rotate-6 shadow-[2px_2px_0_0_rgba(26,26,26,1)]">
            {item.price}
          </div>
        </div>
        <CardContent className="p-4 flex-grow text-center">
          <h2 className="text-3xl font-black uppercase text-[var(--color-colabz-dark)]">{item.name}</h2>
        </CardContent>
        <CardFooter className="p-4">
          <motion.div className="w-full" whileTap={{ scale: 0.9, rotate: -2 }}>
            <Button 
              onClick={handleAddToCart}
              className={`w-full sketchy-button text-xl py-6 transition-colors ${buttonState === "ADD TO CART" ? 'bg-[var(--color-colabz-dark)] text-white hover:bg-[var(--color-colabz-orange)]' : 'bg-green-500 text-white border-green-700'}`}
            >
              {buttonState}
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default function Merch() {
  const loot: MerchProduct[] = [
    { id: 1, name: "Classic Orange Tee", price: "$25", img: "https://picsum.photos/seed/merch1/500/500" },
    { id: 2, name: "The Chaotic Mug", price: "$15", img: "https://picsum.photos/seed/merch2/500/500" },
    { id: 3, name: "Glitch Dog Sticker Pack", price: "$8", img: "https://picsum.photos/seed/merch3/500/500" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 mt-12">
      <div className="text-center mb-16">
        {/* Gunakan whileInView di sini juga */}
        <motion.h1 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-6xl md:text-8xl font-black text-[var(--color-colabz-dark)] uppercase tracking-tighter">
          GET THE <span className="text-[var(--color-colabz-orange)]">LOOT</span>
        </motion.h1>
        <p className="text-2xl font-bold text-gray-600 mt-4">Support the lab, buy our stuff. We need more coffee.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {loot.map((item, i) => (
          <MerchItem key={item.id} item={item} delay={i * 0.1} />
        ))}
      </div>
    </div>
  );
}