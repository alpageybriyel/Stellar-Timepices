"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Play } from "lucide-react"

interface VideoShowcaseProps {
  videoUrl?: string
  thumbnailUrl?: string
  title: string
  subtitle: string
  autoplay?: boolean
}

export function VideoShowcase({ videoUrl, thumbnailUrl, title, subtitle, autoplay = false }: VideoShowcaseProps) {
  const [isPlaying, setIsPlaying] = useState(autoplay)



  const getEmbedUrl = (url: string) => {
    if (!url) return ""
    
    // Facebook Share URL handling
    if (url.includes("facebook.com")) {
      const encodedUrl = encodeURIComponent(url)
      return `https://www.facebook.com/plugins/video.php?href=${encodedUrl}&show_text=0&autoplay=1&mute=1`
    }
    
    // YouTube handling (basic)
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      const videoId = url.includes("v=") ? url.split("v=")[1].split("&")[0] : url.split("/").pop()
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`
    }

    return url
  }

  return (
    <section className="py-24 px-6 bg-secondary overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(white 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <span className="font-oswald text-accent text-[10px] font-bold tracking-[0.6em] uppercase block">Horological mastery</span>
              <h2 className="font-serif text-5xl md:text-7xl text-secondary-foreground tracking-tight leading-none">
                Witness the <br /> <span className="italic text-accent">Stellar</span> Experience
              </h2>
            </div>
            <p className="font-poppins text-secondary-foreground/40 text-lg leading-relaxed max-w-xl">
              From the satisfying mechanical click of a vintage bezel to the graceful sweep of a high-complication second hand, our curation captures the very soul of horology.
            </p>
            <div className="flex items-center gap-6 pt-6 border-t border-secondary-foreground/5">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-secondary bg-background overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900" />
                  </div>
                ))}
              </div>
              <p className="text-secondary-foreground/30 text-[10px] font-bold uppercase tracking-[0.4em]">
                80,000+ Strong Community
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group cursor-pointer"
            onClick={() => !isPlaying && setIsPlaying(true)}
          >
            <div className="relative aspect-video bg-black/40 border border-secondary-foreground/10 overflow-hidden shadow-2xl rounded-[6px]">
              <AnimatePresence mode="wait">
                {!isPlaying ? (
                  <motion.div
                    key="thumbnail"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-10"
                  >
                    {thumbnailUrl ? (
                      <Image 
                        src={thumbnailUrl} 
                        alt={title} 
                        fill 
                        className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-black flex items-center justify-center">
                         <div className="font-serif text-white/5 text-[10vw] font-black uppercase tracking-tighter">Stellar</div>
                      </div>
                    )}
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-white text-secondary flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                        <Play className="w-8 h-8 fill-current translate-x-1" />
                      </div>
                    </div>

                    {/* Status Bar */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent text-white flex justify-between items-end">
                      <div className="space-y-1">
                        <h4 className="font-oswald text-[11px] font-bold uppercase tracking-[0.3em] text-accent">{title}</h4>
                        <p className="font-serif text-xl tracking-wide">{subtitle}</p>
                      </div>
                      <div className="flex gap-1.5 pb-1">
                        {[1, 2, 3].map(i => <div key={i} className="w-1 h-4 bg-accent/30" />)}
                        <div className="w-1 h-4 bg-accent animate-pulse" />
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="video"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 z-20"
                  >
                    {videoUrl ? (
                      <iframe 
                        src={getEmbedUrl(videoUrl)}
                        className="w-full h-full"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        allowFullScreen
                        frameBorder="0"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white/20">
                        Content under curation
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
