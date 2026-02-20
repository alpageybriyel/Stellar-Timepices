"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useParams, notFound } from "next/navigation"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { watches } from "@/lib/data"
import { toast } from "sonner"
import { ShieldCheck, Truck, Clock, RefreshCw, Facebook, Instagram } from "lucide-react"
import { ImagePlaceholder } from "@/components/ui/image-placeholder"

export default function ProductPage() {
  const params = useParams()
  const id = Array.isArray(params?.id) ? params?.id[0] : params?.id
  const watch = watches.find(w => w.id === id)
  const [shareUrl, setShareUrl] = React.useState("")

  React.useEffect(() => {
    setShareUrl(window.location.href)
  }, [])

  if (!watch) {
    return notFound()
  }

  const handleAddToCart = () => {
    toast.success(`Added ${watch.brand} ${watch.model} to cart`)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      {/* Page Header / Breadcrumb */}
      <div className="bg-[#1d2c48] text-white pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-white/5 skew-x-12 transform translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/40 mb-8">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span className="w-1 h-1 bg-gold rounded-full" />
            <Link href="/shop" className="hover:text-gold transition-colors">Shop</Link>
            <span className="w-1 h-1 bg-gold rounded-full" />
            <span className="text-white">{watch.brand}</span>
          </div>
          
          <h1 className="font-oswald text-4xl md:text-6xl font-bold uppercase tracking-widest leading-none">
            {watch.brand} <span className="text-gold">{watch.model}</span>
          </h1>
        </div>
      </div>

      <div className="flex-1 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Gallery Section */}
          <div className="space-y-8">
            <div className="relative aspect-square w-full bg-[#f9f9f9] border border-gray-100 group">
              {watch.image ? (
                <Image
                  src={watch.image}
                  alt={`${watch.brand} ${watch.model}`}
                  fill
                  className="object-contain p-12"
                  priority
                />
              ) : (
                <ImagePlaceholder text={watch.brand} iconSize={40} />
              )}
            </div>
            
            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 gap-4">
               {[1, 2, 3, 4].map((i) => (
                 <div key={i} className="aspect-square bg-[#f9f9f9] border border-gray-100 flex items-center justify-center cursor-pointer hover:border-gold transition-all duration-300">
                    <ImagePlaceholder className="bg-transparent border-none scale-50" text="" iconSize={16} />
                 </div>
               ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                 <span className="h-px w-8 bg-gold" />
                 <span className="font-oswald text-xs font-bold tracking-[0.4em] text-gold uppercase">Authentic Luxury</span>
              </div>
              
              <div className="space-y-2">
                <h2 className="text-[#1d2c48] font-oswald text-5xl font-bold uppercase tracking-tight">
                  {watch.model}
                </h2>
                <p className="text-gray-400 font-poppins text-xs tracking-[0.2em] font-bold uppercase">
                  Reference: {watch.reference}
                </p>
              </div>
            </div>

            <div className="py-8 border-y border-gray-50 space-y-4">
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-oswald font-light text-[#1d2c48]">
                   {watch.currency === "PHP" ? "₱" : watch.currency}{watch.price.toLocaleString()}
                </span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-green-600 bg-green-50 px-3 py-1">
                   Available for immediate delivery
                </span>
              </div>
            </div>

            <div className="space-y-10">
               <p className="text-gray-500 font-poppins leading-loose tracking-wide">
                 {watch.description}
               </p>
               
               <div className="flex flex-col gap-6 w-full">
                 <a 
                   href={`https://www.facebook.com/messages/t/61563499544853/?text=${encodeURIComponent(`I'm interested in the ${watch.brand} ${watch.model} (${watch.reference}). Link: ${typeof window !== 'undefined' ? window.location.href : ''}`)}`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-full"
                 >
                   <Button size="lg" className="w-full bg-[#1d2c48] text-white hover:bg-gold hover:text-[#1d2c48] h-16 font-oswald text-xs font-bold tracking-[0.3em] uppercase transition-all duration-500 border border-white/10">
                     Buy this direct to Facebook Page
                   </Button>
                 </a>
                 <Button variant="outline" className="w-full border-[#1d2c48] text-[#1d2c48] hover:bg-[#1d2c48] hover:text-white h-16 font-oswald text-xs font-bold tracking-[0.3em] uppercase transition-all duration-500">
                   Schedule Viewing
                 </Button>
               </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-y-10 gap-x-6 pt-10">
               <div className="flex items-center gap-4 group">
                 <div className="w-12 h-12 border border-black/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-[#1d2c48] transition-all duration-500">
                   <Truck className="w-5 h-5" />
                 </div>
                 <div>
                   <h4 className="font-oswald text-[10px] font-bold text-[#1d2c48] uppercase tracking-widest">Global Shipping</h4>
                   <p className="text-[10px] text-gray-400 font-poppins uppercase tracking-wider">Fully Insured</p>
                 </div>
               </div>
               <div className="flex items-center gap-4 group">
                 <div className="w-12 h-12 border border-black/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-[#1d2c48] transition-all duration-500">
                   <RefreshCw className="w-5 h-5" />
                 </div>
                 <div>
                   <h4 className="font-oswald text-[10px] font-bold text-[#1d2c48] uppercase tracking-widest">Global Returns</h4>
                   <p className="text-[10px] text-gray-400 font-poppins uppercase tracking-wider">14-Day Window</p>
                 </div>
               </div>
               <div className="flex items-center gap-4 group">
                 <div className="w-12 h-12 border border-black/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-[#1d2c48] transition-all duration-500">
                   <Clock className="w-5 h-5" />
                 </div>
                 <div>
                   <h4 className="font-oswald text-[10px] font-bold text-[#1d2c48] uppercase tracking-widest">Service Warranty</h4>
                   <p className="text-[10px] text-gray-400 font-poppins uppercase tracking-wider">24-Month Coverage</p>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Technical Specs Table */}
        <div className="mt-32 max-w-4xl mx-auto">
           <div className="text-center mb-16 space-y-4">
             <h3 className="font-oswald text-3xl font-bold text-[#1d2c48] uppercase tracking-widest underline decoration-gold underline-offset-8">Technical Essence</h3>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6">
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
                <div key={i} className="flex justify-between items-center py-4 border-b border-gray-50 group hover:border-gold transition-colors duration-500">
                  <span className="font-oswald text-[10px] font-bold text-[#1d2c48]/50 uppercase tracking-widest group-hover:text-gold transition-colors">{spec.label}</span>
                  <span className="font-poppins text-xs font-bold text-[#1d2c48] uppercase tracking-wider">{spec.value}</span>
                </div>
              ))}
           </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}
