import Image from "next/image"
import Link from "next/link"
import { Watch } from "@/lib/data"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  watch: Watch
  className?: string
}

export function ProductCard({ watch, className }: ProductCardProps) {
  return (
    <Link 
      href={`/shop/${watch.id}`}
      className={cn(
        "group relative block bg-card border border-border rounded-[6px] transition-all duration-500 hover:shadow-xl",
        className
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary m-2 rounded-[4px]">
        <Image
          src={watch.image || "/w1.jpg"}
          alt={`${watch.brand} ${watch.model}`}
          fill
          className="object-contain p-8 transition-all duration-700 group-hover:scale-105"
        />
        
        {/* Featured Badge */}
        {watch.isFeatured && (
          <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] font-oswald z-10 rounded-[2px]">
            Limited
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-1">
          <h3 className="font-oswald text-[10px] font-bold text-accent uppercase tracking-[0.2em]">
            {watch.brand}
          </h3>
          <h4 className="font-serif text-2xl text-foreground group-hover:text-accent transition-colors duration-300">
            {watch.model}
          </h4>
        </div>

        <div className="h-px w-8 bg-accent/20 group-hover:w-full transition-all duration-500" />

        {/* Price */}
        <div className="flex items-center justify-between">
            <p className="font-oswald text-lg font-bold text-foreground">
              <span className="text-xs align-top mr-1">{watch.currency === "PHP" ? "₱" : watch.currency}</span>
              {watch.price.toLocaleString()}
            </p>
            <span className="font-oswald text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground group-hover:text-accent transition-colors">
              Details →
            </span>
        </div>
      </div>
    </Link>
  )
}
