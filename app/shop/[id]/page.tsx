"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useParams, notFound } from "next/navigation"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { watches } from "@/lib/data"

import { ShieldCheck, Clock } from "lucide-react"

export default function ProductPage() {
  const params = useParams()
  const id = Array.isArray(params?.id) ? params?.id[0] : params?.id
  const watch = watches.find(w => w.id === id)

  if (!watch) {
    return notFound()
  }



  return (
    <div className="min-h-screen bg-background flex flex-col text-foreground">
      <Header />
      
      {/* Page Header / Breadcrumb */}
      <div className="bg-[#000000] text-white pt-48 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(#FFFFFF 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-white/40 mb-10">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <div className="w-1 h-1 bg-accent rounded-full" />
            <Link href="/shop" className="hover:text-accent transition-colors">Shop</Link>
            <div className="w-1 h-1 bg-accent rounded-full" />
            <span className="text-white">{watch.brand}</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-8xl tracking-tight leading-none text-white">
            {watch.brand} <span className="italic">{watch.model}</span>
          </h1>
        </div>
      </div>

      <div className="flex-1 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Gallery Section */}
          <div className="space-y-10">
            <div className="relative aspect-square w-full bg-card border border-border rounded-[6px] overflow-hidden group">
              <Image
                src={watch.image || "/w1.jpg"}
                alt={`${watch.brand} ${watch.model}`}
                fill
                className="object-contain p-16 transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
            
            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 gap-6">
               {[1, 2, 3, 4].map((i) => (
                 <div key={i} className="aspect-square bg-card border border-border rounded-[4px] flex items-center justify-center cursor-pointer hover:border-accent transition-all duration-300 overflow-hidden relative">
                    <Image
                      src={watch.image || "/w1.jpg"}
                      alt={`${watch.brand} thumbnail ${i}`}
                      fill
                      className="object-contain p-2 opacity-50 hover:opacity-100 transition-opacity duration-300"
                    />
                 </div>
               ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-16">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                 <span className="h-px w-10 bg-accent" />
                 <span className="font-oswald text-[10px] font-bold tracking-[0.5em] text-accent uppercase">Curated Piece</span>
              </div>
              
              <div className="space-y-3">
                <h2 className="text-foreground font-serif text-5xl md:text-6xl tracking-tight">
                  {watch.model}
                </h2>
                <p className="text-muted-foreground font-oswald text-[11px] tracking-[0.3em] font-bold uppercase">
                  Reference No. {watch.reference}
                </p>
              </div>
            </div>

            <div className="space-y-10">
              <div className="space-y-2">
                <p className="font-oswald text-4xl font-bold text-foreground">
                  <span className="text-xl align-top mr-2 text-accent">{watch.currency === "PHP" ? "₱" : watch.currency}</span>
                  {watch.price.toLocaleString()}
                </p>
                <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-accent">
                   <div className="w-1.5 h-1.5 bg-accent animate-pulse rounded-full" />
                   Available for Private Viewing
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href={`https://m.me/61563499544853?text=${encodeURIComponent(`https://stellartimepices.vercel.app/shop/${watch.id}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button size="lg" className="h-16 w-full px-12 text-sm">
                    ACQUIRE THIS PIECE
                  </Button>
                </a>
                <Link href="/contact" className="flex-1">
                  <Button variant="outline" size="lg" className="h-16 w-full text-sm">
                    INQUIRE NOW
                  </Button>
                </Link>
              </div>
            </div>

            <p className="text-muted-foreground font-poppins text-lg leading-relaxed max-w-xl">
              {watch.description}
            </p>
            
            <div className="flex flex-col gap-6 w-full">
              <a 
                href={`https://m.me/61563499544853?text=${encodeURIComponent(`https://stellartimepices.vercel.app/shop/${watch.id}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button size="lg" className="w-full h-20 text-xs tracking-[0.4em] uppercase">
                  Inquire via Facebook messenger
                </Button>
              </a>
              <p className="text-center text-muted-foreground text-[9px] font-oswald uppercase tracking-[0.2em]">Our dedicated concierge will assist you within 24 hours.</p>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-border">
               {[
                 { icon: <ShieldCheck className="w-5 h-5" />, label: "Lifetime Auth", sub: "Guaranteed Genuine" },
                 { icon: <Clock className="w-5 h-5" />, label: "Express Send", sub: "Insured Global Shipping" },
               ].map((badge, idx) => (
                 <div key={idx} className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-accent">
                       {badge.icon}
                    </div>
                    <div>
                      <p className="font-oswald text-[10px] font-bold uppercase tracking-wider text-foreground">{badge.label}</p>
                      <p className="text-[9px] text-muted-foreground uppercase tracking-widest">{badge.sub}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Technical Specs Table */}
        <div className="mt-32 pt-24 border-t border-border">
           <div className="mb-20">
             <span className="font-oswald text-accent text-[10px] font-bold tracking-[0.4em] uppercase block mb-4">Mastery</span>
             <h3 className="font-serif text-4xl md:text-5xl text-foreground tracking-tight">Technical <span className="italic">Essence</span></h3>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-2">
              {[
                { label: "Brand", value: watch.brand },
                { label: "Model", value: watch.model },
                { label: "Reference", value: watch.reference },
                { label: "Case Material", value: watch.specs.caseMaterial },
                { label: "Diameter", value: watch.specs.caseSize },
                { label: "Movement", value: watch.specs.movement },
                { label: "Water Resistance", value: watch.specs.waterResistance },
                { label: "Dial Essence", value: watch.specs.dialColor },
              ].map((spec, i) => (
                <div key={i} className="flex justify-between items-center py-6 border-b border-border group hover:border-accent transition-colors duration-500">
                  <span className="font-oswald text-[10px] font-bold text-muted-foreground uppercase tracking-widest group-hover:text-accent transition-colors">{spec.label}</span>
                  <span className="font-poppins text-xs font-bold text-foreground uppercase tracking-wider">{spec.value}</span>
                </div>
              ))}
           </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
