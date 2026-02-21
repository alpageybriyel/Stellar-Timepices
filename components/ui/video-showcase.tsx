"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"

interface VideoShowcaseProps {
  videoUrl?: string
  thumbnailUrl?: string
  title: string
  subtitle: string
}

export function VideoShowcase({ videoUrl, thumbnailUrl, title, subtitle }: VideoShowcaseProps) {
  return (
    <section className="py-24 px-6 bg-[#1d2c48] overflow-hidden relative">
      {/* Decorative Gold Accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#f0ae22]" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#f0ae22]" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="font-oswald text-[#f0ae22] text-xs font-bold tracking-[0.5em] uppercase block">Product in Action</span>
            <h2 className="font-oswald text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter leading-none">
              Witness the <span className="text-[#f0ae22]">Stellar</span> <br /> Experience
            </h2>
            <p className="font-poppins text-white/60 text-lg leading-relaxed max-w-xl">
              From the satisfying click of a bezel to the graceful sweep of a second hand, our content captures the mechanical soul of the world&apos;s finest timepieces.
            </p>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-[#1d2c48] bg-gray-700 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800" />
                  </div>
                ))}
              </div>
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest">
                Join 80K+ Followers
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group cursor-pointer"
          >
            {/* Video Placeholder / Frame */}
            <div className="relative aspect-video bg-black/40 border-2 border-white/5 overflow-hidden">
              {thumbnailUrl ? (
                <img src={thumbnailUrl} alt={title} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#1d2c48] to-black flex items-center justify-center">
                   <div className="font-oswald text-white/10 text-[10vw] font-black uppercase">Stellar</div>
                </div>
              )}
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-[#f0ae22] text-[#1d2c48] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 fill-current translate-x-1" />
                </div>
              </div>

              {/* Status Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 text-white flex justify-between items-end">
                <div>
                  <h4 className="font-oswald text-sm font-bold uppercase tracking-widest">{title}</h4>
                  <p className="text-[10px] text-white/50 uppercase tracking-wider">{subtitle}</p>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3].map(i => <div key={i} className="w-1 h-3 bg-[#f0ae22] opacity-50" />)}
                  <div className="w-1 h-3 bg-[#f0ae22] animate-pulse" />
                </div>
              </div>
            </div>
            
            {/* Corner Accents */}
            <div className="absolute -top-2 -left-2 w-10 h-10 border-t-2 border-l-2 border-[#f0ae22]" />
            <div className="absolute -bottom-2 -right-2 w-10 h-10 border-b-2 border-r-2 border-[#f0ae22]" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
