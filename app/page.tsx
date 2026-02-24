"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/ui/product-card"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { FadeIn } from "@/components/ui/fade-in"
import { watches } from "@/lib/data"
import { cn } from "@/lib/utils"
export default function Home() {
  const featuredWatches = watches.filter(w => w.isFeatured)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section - Minimal Clean Redesign */}
      <section className="relative min-h-screen w-full flex items-center pt-32 pb-40 overflow-hidden bg-background">
        {/* Subtle Background Grid/Texture */}
        <div className="absolute inset-0 z-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#111111 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />

        <div className="mx-auto max-w-7xl px-6 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-xl space-y-8 md:space-y-12 text-center lg:text-left mx-auto lg:mx-0"
            >
              <div className="flex items-center justify-center lg:justify-start gap-4">
                 <span className="h-px w-12 bg-accent" />
                 <span className="font-oswald text-[10px] font-bold tracking-[0.5em] text-accent uppercase">Vault of Excellence</span>
              </div>
              
              <h1 className="font-serif text-6xl md:text-7xl lg:text-9xl leading-[0.9] text-foreground">
                Beyond <br /> <span className="italic">Horology</span>
              </h1>
              
              <p className="font-poppins text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Curating the world&apos;s most exceptional timepieces. A legacy of precision, provenance, and prestige for the modern collector.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
                <Link href="/shop">
                  <Button size="lg" className="h-14 px-12 group transition-all duration-500 w-full sm:w-auto">
                    EXPLORE COLLECTIONS
                  </Button>
                </Link>
              </div>
            </motion.div>

          {/* Hero Image Group - Two Watches */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
               <div className="relative w-1/2 aspect-[1/2] -mr-16 md:-mr-24 lg:-mr-32 z-10 drop-shadow-2xl translate-y-10 md:translate-y-20">
                  <Image
                    src="/w1.jpg"
                    alt="Luxury Watch Silver"
                    fill
                    className="object-contain"
                    priority
                  />
               </div>
               <div className="relative w-1/2 aspect-[1/2] z-0 drop-shadow-2xl -translate-y-10 md:-translate-y-20">
                  <Image
                    src="/w1.jpg"
                    alt="Luxury Watch Gold"
                    fill
                    className="object-contain"
                    priority
                  />
               </div>
            </div>
          </motion.div>
        </div>
      </div>

        {/* Bottom Badge */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center space-y-2 w-full px-6">
            <span className="font-oswald text-[9px] font-bold tracking-[0.4em] uppercase text-muted-foreground/60 block">Introducing Limited Edition</span>
            <div className="font-serif text-lg md:text-xl tracking-widest text-foreground uppercase">Stellar <span className="text-accent italic">Prestige</span></div>
        </div>
      </section>
      
      {/* Heritage & Boutique Section */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">
            <FadeIn className="lg:w-1/2">
              <span className="font-oswald text-accent text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block">Our Boutique</span>
              <h2 className="font-serif text-5xl md:text-7xl text-foreground leading-[1.1] tracking-tight">
                The Boutique <br /> <span className="italic">Destination</span>
              </h2>
            </FadeIn>
            <FadeIn className="lg:w-1/2 pt-6">
              <p className="font-poppins text-muted-foreground text-lg leading-relaxed max-w-xl">
                Located in General Trias, Cavite, our sanctuary serves over <span className="text-foreground font-bold">80,000+ enthusiasts</span>. We provide world-class service combined with local warmth.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* The Master's Vault */}
            <FadeIn className="group relative overflow-hidden bg-card border border-border aspect-[16/10] flex items-center justify-center">
              <div className="absolute inset-10 border border-border/40" />
              <div className="relative z-10 p-12 text-center space-y-6">
                <span className="font-oswald text-accent text-[10px] font-bold tracking-[0.4em] uppercase">Private Reserve</span>
                <h3 className="font-serif text-3xl md:text-5xl text-foreground">The Vault</h3>
                <p className="font-poppins text-muted-foreground text-sm max-w-sm mx-auto">
                  A curated collection of investment-grade timepieces, each with impeccable provenance.
                </p>
                <div className="pt-6">
                  <Link href="/shop" className="font-oswald text-[10px] font-bold text-foreground border-b border-accent pb-1 tracking-[0.4em] uppercase hover:text-accent transition-colors">
                    Explore →
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Authenticity Lab */}
            <FadeIn delay={0.1} className="group relative overflow-hidden bg-secondary aspect-[16/10] flex items-center justify-center">
               <div className="relative z-10 p-12 text-center space-y-6">
                <span className="font-oswald text-accent text-[10px] font-bold tracking-[0.4em] uppercase">Expertise</span>
                <h3 className="font-serif text-3xl md:text-5xl text-secondary-foreground">Authentication</h3>
                <p className="font-poppins text-muted-foreground text-sm max-w-sm mx-auto">
                   Our specialists honor original craftsmanship with uncompromising standards.
                </p>
                <div className="pt-6">
                  <Link href="/about" className="font-oswald text-[10px] font-bold text-secondary-foreground border-b border-border pb-1 tracking-[0.4em] uppercase hover:text-accent transition-colors">
                    Process →
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div className="space-y-4">
              <h2 className="font-serif text-4xl md:text-6xl text-foreground tracking-tight">
                Featured <span className="italic">Collection</span>
              </h2>
              <p className="text-muted-foreground max-w-md">
                Hand-picked selection of rare timepieces available now.
              </p>
            </div>
            <Link href="/shop">
              <Button variant="outline" className="px-10 h-14">
                VIEW ALL
              </Button>
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredWatches.map((watch, index) => (
            <FadeIn key={watch.id} delay={index * 0.1}>
              <ProductCard watch={watch} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Typographic Statement */}
      <section className="bg-card py-40 border-y border-border px-6">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <h3 className="font-serif text-4xl md:text-7xl text-foreground leading-[1.1] tracking-tight max-w-5xl mx-auto">
              Curating the <span className="italic">Extraordinary</span>. <br />
              Establishing Trust globally.
            </h3>
            <div className="w-20 h-px bg-accent mx-auto mt-16 mb-12" />
            <p className="font-poppins text-muted-foreground uppercase tracking-[0.4em] text-[10px] font-bold">Buy &bull; Sell &bull; Trade &bull; Consign</p>
          </FadeIn>
        </div>
      </section>

      {/* New Acquisitions */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <FadeIn className="space-y-10">
            <div className="space-y-6">
              <span className="font-oswald text-accent text-[10px] font-bold tracking-[0.4em] uppercase">Recently Acquired</span>
              <h2 className="font-serif text-5xl md:text-7xl text-foreground leading-[1.1]">
                Latest <br /> <span className="italic">Treasures</span>
              </h2>
              <p className="text-muted-foreground font-poppins text-lg leading-relaxed max-w-md">
                Our inventory is constantly evolving with rare pieces sourced from private collections.
              </p>
            </div>
            <Link href="/shop">
              <Button size="lg" className="h-14 px-12">
                DISCOVER MORE
              </Button>
            </Link>
          </FadeIn>
          
          <div className="grid grid-cols-2 gap-6">
             {watches.slice(4, 8).map((watch, i) => (
               <FadeIn key={watch.id} delay={i * 0.1} className="group relative aspect-square bg-card border border-border p-6 flex items-center justify-center overflow-hidden cursor-pointer rounded-[6px] hover:shadow-lg transition-all">
                  <div className="absolute inset-4 border border-border/40" />
                  <div className="relative z-10 w-full h-full">
                    <Image 
                      src={watch.image || "/w1.jpg"} 
                      alt={watch.model} 
                      fill 
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-background border-t border-border translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20 text-center">
                     <p className="font-oswald text-[9px] font-bold text-foreground uppercase tracking-wider">{watch.brand} {watch.model}</p>
                  </div>
               </FadeIn>
             ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
