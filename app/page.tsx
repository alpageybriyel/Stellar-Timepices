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
import { ImagePlaceholder } from "@/components/ui/image-placeholder"
import { cn } from "@/lib/utils"

const HERO_SLIDES = [
  {
    id: "01",
    tag: "Private Collection",
    title: "TIMELESS",
    subtitle: "LEGACY",
    description: "Discover the limited edition Submariner Series. A testament to eighty years of horological pursuit and marine exploration.",
    model: "SUB-MK II",
    color: "gold",
    imageText: "Masterpiece"
  },
  {
    id: "02",
    tag: "Haute Horlogerie",
    title: "GRAND",
    subtitle: "COMPLICATION",
    description: "Experience the pinnacle of mechanical engineering. Each movement is a masterpiece of precision and artisanal craftsmanship.",
    model: "NAUT-57 series",
    color: "gold",
    imageText: "Innovation"
  },
  {
    id: "03",
    tag: "Avant-Garde",
    title: "REFINED",
    subtitle: "PRECISION",
    description: "Where heritage meets modern innovation. Defining the future of luxury timepieces through bold design and technical excellence.",
    model: "OAK-PRIME",
    color: "gold",
    imageText: "Excellence"
  }
]

export default function Home() {
  const featuredWatches = watches.filter(w => w.isFeatured)
  const [currentSlide, setCurrentSlide] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  const slide = HERO_SLIDES[currentSlide]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Unblast Style Redesign with Carousel */}
      <section className="relative h-screen w-full flex items-center overflow-hidden bg-[#1d2c48]">
        {/* Background Depth Layers */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.02] skew-x-[-20deg] transform origin-top translate-x-1/4" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1d2c48] via-[#1d2c48]/80 to-transparent z-10" />
        </div>

        {/* Vertical UI Elements (Left side) */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-12">
          <div className="flex flex-col gap-6 text-white/30">
            {[
              { name: 'Instagram', href: 'https://www.instagram.com/stellartimepieces_/' },
              { name: 'Tiktok', href: 'https://www.tiktok.com/@stellartimepieces' },
              { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61563499544853' }
            ].map((social) => (
              <a 
                key={social.name} 
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="[writing-mode:vertical-lr] text-[10px] uppercase font-bold tracking-[0.3em] hover:text-gold cursor-pointer transition-colors duration-300 rotate-180"
              >
                {social.name}
              </a>
            ))}
          </div>
          <div className="w-px h-24 bg-white/10" />
        </div>

        {/* Slide Indicator (Left bottom) */}
        <div className="absolute left-10 bottom-12 z-20 hidden lg:block">
           <div className="flex items-end gap-4">
              <span className="font-oswald text-4xl font-bold text-gold leading-none">{slide.id}</span>
              <div className="w-12 h-px bg-white/20 mb-2" />
              <span className="font-oswald text-sm font-bold text-white/20 mb-1 leading-none">0{HERO_SLIDES.length}</span>
           </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-20 w-full">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="w-12 h-px bg-gold" />
                    <span className="font-oswald text-gold text-xs font-bold tracking-[0.5em] uppercase">{slide.tag}</span>
                  </div>
                  <h1 className="font-oswald text-7xl md:text-9xl font-bold text-white uppercase tracking-tight leading-[0.85]">
                    {slide.title} <br />
                    <span className="text-transparent stroke-text">{slide.subtitle}</span>
                  </h1>
                </div>
                
                <p className="font-poppins text-lg text-white/50 max-w-md leading-relaxed tracking-wide">
                  {slide.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 pt-4">
                  <Link href="/shop">
                    <Button size="lg" className="bg-gold text-white hover:bg-[#1d2c48]/90 hover:scale-105 transition-all duration-300 h-16 px-12 text-xs font-bold tracking-[0.3em] rounded-md border border-white/10">
                      DISCOVER MORE
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-16 px-12 text-xs text-gold font-bold tracking-[0.3em] rounded-md">
                      VIEW DETAILS
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Hero Image Showcase (Right side) */}
        <div className="absolute right-0 top-0 h-full w-3/5 z-10 hidden lg:block">
           <AnimatePresence mode="wait">
             <motion.div 
               key={currentSlide}
               initial={{ opacity: 0, scale: 1.1 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.95 }}
               transition={{ duration: 1 }}
               className="h-full w-full relative"
             >
                <div className="absolute inset-0 flex items-center justify-center">
                   {/* Large watch visualization */}
                   <div className="relative h-[80%] w-[80%] drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]">
                      <ImagePlaceholder text={slide.imageText} className="opacity-10 bg-transparent border-none scale-150 rotate-[-15deg]" />
                      {/* This would be the actual watch image in a real implementation */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                         <div className="w-3/4 aspect-[1/2] border border-white/5 rounded-full rotate-12 flex items-center justify-center">
                            <div className="w-full aspect-square bg-[#1d2c48]/40 backdrop-blur-3xl rounded-full border border-white/10 flex items-center justify-center">
                               <div className="text-gold font-oswald text-[12vw] font-black opacity-10 select-none">2026</div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
                
                {/* Product Spec Overlay */}
                <div className="absolute bottom-24 right-20 space-y-2 text-right">
                   <p className="font-oswald text-[10px] font-bold text-gold uppercase tracking-[0.4em]">Model Ref.</p>
                   <p className="font-oswald text-4xl font-bold text-white uppercase tracking-widest">{slide.model}</p>
                   <div className="flex justify-end gap-3 pt-4">
                      {HERO_SLIDES.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentSlide(idx)}
                          className={cn(
                            "w-2 h-2 rounded-full transition-all duration-300",
                            currentSlide === idx ? "bg-gold w-6" : "bg-white/20 hover:bg-white/40"
                          )}
                        />
                      ))}
                   </div>
                </div>
             </motion.div>
           </AnimatePresence>
        </div>
      </section>
      
      {/* Categories / Top Brands Section */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-20 space-y-4">
            <span className="font-oswald text-gold text-xs font-bold tracking-[0.4em] uppercase">The World&apos;s Finest</span>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase text-[#1d2c48] tracking-widest">
              Top <span className="text-gold">Brands</span>
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: "Rolex", desc: "The Crown of Horology" },
              { name: "Patek Philippe", desc: "Generational Masterpieces" },
              { name: "Audemars Piguet", desc: "Bold Innovation" }
            ].map((brand, i) => (
              <FadeIn key={brand.name} delay={i * 0.1} className="group relative aspect-[4/5] overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gray-100 transition-transform duration-700 group-hover:scale-105">
                   <ImagePlaceholder text={brand.name} className="opacity-40" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-[#1d2c48]/90 to-transparent translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="font-oswald text-2xl font-bold text-white uppercase tracking-widest mb-2">{brand.name}</h3>
                  <p className="text-gold font-poppins text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{brand.desc}</p>
                </div>
                <div className="absolute inset-4 border border-white/0 group-hover:border-white/10 transition-all duration-500 pointer-events-none" />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="font-oswald text-4xl font-bold uppercase text-[#1d2c48] relative inline-block">
                Featured Timepieces
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#f0ae22]"></span>
              </h2>
              <p className="text-gray-500 max-w-md">
                Hand-picked selection of rare and exclusive watches available now.
              </p>
            </div>
            <Link href="/shop">
              <Button className="bg-[#1d2c48] text-white hover:bg-[#1d2c48]/90 transition-all duration-300">
                View All Watches
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

      {/* Brand Philosophy / Typographic Statement */}
      <section className="bg-gray-50 py-32 border-y border-gray-100 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <h3 className="font-oswald text-4xl md:text-7xl font-bold text-[#1d2c48] uppercase leading-[0.9] tracking-tighter max-w-5xl mx-auto">
              Time is the ultimate <span className="text-gold">luxury</span>. We specialize in the <span className="underline decoration-gold underline-offset-[12px] decoration-4">extraordinary</span>.
            </h3>
            <p className="mt-12 font-poppins text-gray-400 uppercase tracking-[0.4em] text-xs font-bold font-semibold">StellarTime &bull; Est. 1992 &bull; Geneva &bull; Manila</p>
          </FadeIn>
        </div>
      </section>

      {/* New Arrivals Gallery */}
      <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <FadeIn direction="right" className="flex-1 space-y-8">
            <span className="font-oswald text-gold text-xs font-bold tracking-[0.4em] uppercase">Just In</span>
            <h2 className="font-oswald text-4xl md:text-6xl font-bold uppercase text-[#1d2c48] leading-none">
              New <br /> <span className="text-gold">Acquisitions</span>
            </h2>
            <p className="text-gray-500 font-poppins leading-loose max-w-md">
              Discover the latest treasures added to our vault. Our inventory is constantly evolving with rare pieces sourced from private collections worldwide.
            </p>
            <Link href="/shop">
              <Button className="h-14 px-10 bg-[#1d2c48] text-white hover:bg-[#1d2c48]/90 font-bold tracking-widest text-[10px] transition-all duration-300">
                EXPLORE NEW ARRIVALS
              </Button>
            </Link>
          </FadeIn>
          
          <div className="flex-1 grid grid-cols-2 gap-4">
             {watches.slice(4, 8).map((watch, i) => (
               <FadeIn key={watch.id} delay={i * 0.1} direction="left" className="group relative aspect-square bg-[#f9f9f9] border border-gray-100 p-6 flex items-center justify-center overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 z-0">
                    {watch.image ? (
                      <Image src={watch.image} alt={watch.model} fill className="object-contain p-8 group-hover:scale-110 transition-transform duration-500" />
                    ) : (
                      <ImagePlaceholder text="" iconSize={24} className="scale-75 opacity-20" />
                    )}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-white/90 backdrop-blur-sm border-t border-gray-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
                     <p className="font-oswald text-[10px] font-bold text-[#1d2c48] uppercase tracking-wider truncate">{watch.brand} {watch.model}</p>
                  </div>
               </FadeIn>
             ))}
          </div>
        </div>
      </section>

      {/* Brand Story / Value Prop */}
      <section className="bg-[#1d2c48] text-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="relative h-[600px] w-full border border-[#f0ae22] p-4">
               <div className="relative h-full w-full bg-gray-800 overflow-hidden">
                  <Image
                    src="/w1.jpg"
                    alt="Watchmaker at work"
                    fill
                    className="object-cover"
                  />
               </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="left" className="space-y-8">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase leading-tight">
              Craftsmanship & <span className="text-[#f0ae22]">Authentication</span>
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                At StellarTime, we believe that a watch is more than just a tool to tell time—it is a piece of history, a work of art, and a legacy to be passed down.
              </p>
              <p>
                Every timepiece in our collection undergoes a rigorous inspection process by our master watchmakers to ensure 100% authenticity and optimal performance.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <h3 className="text-[#f0ae22] font-oswald text-4xl font-bold">500+</h3>
                <p className="text-sm uppercase tracking-wider mt-2">Watches Sold</p>
              </div>
              <div>
                <h3 className="text-[#f0ae22] font-oswald text-4xl font-bold">100%</h3>
                <p className="text-sm uppercase tracking-wider mt-2">Authentic</p>
              </div>
            </div>

            <div className="pt-8">
              <Link href="/about">
                <Button variant="gold" className="px-8 h-12">
                  Read Our Story
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* Services / Why Choose Us */}
      <section className="py-24 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: "Authentication", 
                desc: "Every timepiece is inspected and verified by our master watchmakers for 100% authenticity.",
                tag: "Verified"
              },
              { 
                title: "Global Concierge", 
                desc: "Personalized service and global shipping insurance to ensure your investment arrives safely.",
                tag: "Secure"
              },
              { 
                title: "Heritage Care", 
                desc: "Access to our network of master technicians for servicing and restoration to original standards.",
                tag: "Lifetime"
              }
            ].map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.1} className="space-y-6 group">
                <div className="flex items-center gap-4">
                  <span className="font-oswald text-xs font-bold text-gold tracking-widest uppercase">{service.tag}</span>
                  <div className="h-px flex-1 bg-gray-100 group-hover:bg-gold transition-colors duration-500" />
                </div>
                <h4 className="font-oswald text-2xl font-bold text-[#1d2c48] uppercase tracking-wider">{service.title}</h4>
                <p className="text-gray-500 font-poppins text-sm leading-relaxed tracking-wide">{service.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
