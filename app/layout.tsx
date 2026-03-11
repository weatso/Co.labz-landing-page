import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";
import Navbar from "@/components/navbar";
import LoadingScreen from "@/components/loading-screen"; // Baris baru!
import CustomCursor from "@/components/custom-cursor";   // Baris baru!

const inter = Inter({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const metadata: Metadata = {
  title: "Co.Labz | Playful Game Studio",
  description: "We make games that bite back!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased overflow-x-hidden text-[var(--color-colabz-dark)]`}>
        
        {/* LAYAR LOADING DILUAR SCROLL */}
        <LoadingScreen />
        
        {/* KURSOR KUSTOM */}
        <CustomCursor />

        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <footer id="contact" className="p-8 pb-28 md:p-12 md:pb-12 text-center font-bold mt-20 md:mt-32 bg-[var(--color-colabz-dark)] text-white relative flex flex-col items-center gap-8 md:gap-10">
            <div className="absolute top-0 left-0 w-full h-4 bg-[var(--color-colabz-orange)] -mt-4"></div>
            <p className="text-lg md:text-xl px-4">© {new Date().getFullYear()} Co.Labz. Crafted with chaos and pure energy.</p>
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-colabz-orange)] hover:-translate-y-2 transition-all duration-200"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="md:w-9 md:h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12h.01" /><path d="M15 12h.01" /><path d="M7.5 4.2c-1.2.5-2.2 1.3-3 2.3-2.1 4.5-2.3 8.8-1 11.8 1.4 1.3 3.3 2.1 5.3 2.1l.5-.7c-1.4-.4-2.6-1.1-3.6-2 .7.4 1.5.8 2.3 1.1 1.3.4 2.8.6 4 .6s2.7-.2 4-.6c.8-.3 1.6-.7 2.3-1.1-1 .9-2.2 1.6-3.6 2l.5.7c2 0 3.9-.8 5.3-2.1 1.3-3 1.1-7.3-1-11.8-.8-1-1.8-1.8-3-2.3a15.8 15.8 0 0 0-3.2-1.2l-.3 1c-1-.2-2.1-.2-3.1 0l-.3-1a15.8 15.8 0 0 0-3.2 1.2z" /></svg></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-colabz-orange)] hover:-translate-y-2 transition-all duration-200"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="md:w-9 md:h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-colabz-orange)] hover:-translate-y-2 transition-all duration-200"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="md:w-9 md:h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg></a>
              <a href="mailto:hello@colabz.com" className="hover:text-[var(--color-colabz-orange)] hover:-translate-y-2 transition-all duration-200"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="md:w-9 md:h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></a>
            </div>
          </footer>
        </SmoothScroll>
      </body>
    </html>
  );
}