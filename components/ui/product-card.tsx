import Image from "next/image"
import Link from "next/link"
import { Watch } from "@/lib/data"
import { cn } from "@/lib/utils"
import { ImagePlaceholder } from "./image-placeholder"

interface ProductCardProps {
  watch: Watch
  className?: string
}

export function ProductCard({ watch, className }: ProductCardProps) {
  return (
    <Link 
      href={`/shop/${watch.id}`}
      className={cn(
        "group relative block bg-white border border-gray-100 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(29,44,72,0.1)]",
        className
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#f9f9f9]">
        {watch.image ? (
          <Image
            src={watch.image}
            alt={`${watch.brand} ${watch.model}`}
            fill
            className="object-contain p-8 transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
          />
        ) : (
          <ImagePlaceholder text={watch.brand} />
        )}
        
        {/* Overlay / Action */}
        <div className="absolute inset-0 bg-[#1d2c48]/0 group-hover:bg-[#1d2c48]/5 transition-all duration-500" />
        
        {/* Featured Badge */}
        {watch.isFeatured && (
          <div className="absolute top-4 left-4 bg-gold text-[#1d2c48] px-3 py-1 text-[10px] font-bold uppercase tracking-widest font-oswald shadow-lg z-10">
            Collection &apos;24
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 text-center">
        <div className="space-y-1">
          <h3 className="font-oswald text-xs font-bold text-gold uppercase tracking-[0.2em]">
            {watch.brand}
          </h3>
          <h4 className="font-oswald text-lg font-medium text-[#1d2c48] uppercase tracking-wide group-hover:text-gold transition-colors duration-300">
            {watch.model}
          </h4>
        </div>

        <div className="flex items-center justify-center gap-4 py-2 opacity-40">
           <span className="h-px w-8 bg-[#1d2c48]" />
           <span className="font-poppins text-[10px] font-bold tracking-widest uppercase">Swiss Made</span>
           <span className="h-px w-8 bg-[#1d2c48]" />
        </div>

        {/* Price */}
        <p className="font-oswald text-xl font-light text-[#1d2c48] tracking-tighter">
          <span className="text-sm align-top mr-1">{watch.currency === "PHP" ? "₱" : watch.currency}</span>
          {watch.price.toLocaleString()}
        </p>
        
        <div className="pt-2">
            <span className="inline-block font-oswald text-[10px] font-bold uppercase tracking-[0.3em] text-[#1d2c48]/60 group-hover:text-gold group-hover:translate-y-[-4px] transition-all duration-300">
              DISCOVER MORE
            </span>
        </div>
      </div>
    </Link>
  )
}
