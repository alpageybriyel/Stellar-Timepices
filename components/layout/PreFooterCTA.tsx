"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"


export function PreFooterCTA() {
  return (
    <section className="bg-muted py-32 px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10 text-center space-y-12">
        <div className="space-y-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-oswald text-accent text-[10px] font-bold tracking-[0.5em] uppercase block"
          >
            Elevate Your Legacy
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl text-foreground tracking-tight leading-[1.1] max-w-4xl mx-auto"
          >
            Join our community of <span className="text-accent italic">80,000+</span> horological enthusiasts
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-poppins text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed"
          >
            Whether you are looking to acquire your first masterpiece or consign a rare reference, Stellar Timepieces connects you with the most exclusive private collections.
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
            <Button className="h-14 px-12 text-[10px] tracking-[0.3em] uppercase w-full sm:w-auto">
              EXPLORE THE COLLECTION
            </Button>
          </Link>
          
          <a 
            href="https://m.me/61563499544853" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button variant="outline" className="h-14 px-12 text-[10px] tracking-[0.3em] uppercase w-full">
              SAY HELLO ON MESSENGER
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
