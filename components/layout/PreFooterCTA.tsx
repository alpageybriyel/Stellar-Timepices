"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, MessageCircle } from "lucide-react"

export function PreFooterCTA() {
  return (
    <section className="bg-white border-t border-gray-100 py-24 px-6 overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute right-[-10%] top-[-20%] font-oswald text-[25vw] font-black text-gray-50/50 select-none pointer-events-none uppercase leading-none">
        STELLAR
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center space-y-12">
        <div className="space-y-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-oswald text-gold text-xs font-bold tracking-[0.5em] uppercase block"
          >
            Elevate Your Legacy
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-oswald text-4xl md:text-6xl font-bold text-[#1d2c48] uppercase tracking-tighter leading-[0.9] max-w-4xl mx-auto"
          >
            Join our community of <span className="text-gold">80,000+</span> horological enthusiasts
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-poppins text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
          >
            Whether you are looking to acquire your first masterpiece or consign a rare reference, Stellar Timepieces connects you with the most exclusive private collections in the Philippines and beyond.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link href="/shop">
            <Button className="bg-[#1d2c48] text-white hover:bg-gold hover:text-[#1d2c48] h-16 px-12 font-oswald text-xs font-bold tracking-[0.3em] uppercase transition-all duration-500 rounded-none w-full sm:w-auto">
              EXPLORE THE COLLECTION
            </Button>
          </Link>
          
          <a 
            href="https://www.facebook.com/messages/t/61563499544853" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button variant="outline" className="border-[#1d2c48] text-[#1d2c48] hover:bg-[#1d2c48] hover:text-white h-16 px-12 font-oswald text-xs font-bold tracking-[0.3em] uppercase transition-all duration-500 rounded-none w-full">
              <MessageCircle className="w-4 h-4 mr-2" />
              SAY HELLO ON MESSENGER
            </Button>
          </a>
        </motion.div>

        <div className="pt-12 flex items-center justify-center gap-8 text-[#1d2c48]/30">
          <a href="https://www.facebook.com/profile.php?id=61563499544853" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/stellartimepieces_/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://www.tiktok.com/@stellartimepieces" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
