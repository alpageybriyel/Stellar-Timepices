import { ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImagePlaceholderProps {
  className?: string
  text?: string
  iconSize?: number
}

export function ImagePlaceholder({ className, text = "Image", iconSize = 24 }: ImagePlaceholderProps) {
  return (
    <div className={cn(
      "relative w-full h-full flex flex-col items-center justify-center bg-[#1d2c48]/5 border border-dashed border-[#1d2c48]/10 group transition-all duration-500",
      className
    )}>
      <div className="relative">
        {/* Decorative corner brackets */}
        <div className="absolute -top-4 -left-4 w-4 h-4 border-t border-l border-gold/30" />
        <div className="absolute -bottom-4 -right-4 w-4 h-4 border-b border-r border-gold/30" />
        
        <div className="flex flex-col items-center gap-4">
          <div className="p-4 bg-white shadow-sm border border-gray-100 group-hover:scale-110 group-hover:border-gold transition-all duration-500">
            <ImageIcon 
              className="text-gold transition-transform duration-500 group-hover:rotate-12" 
              size={iconSize} 
              strokeWidth={1}
            />
          </div>
          <span className="font-oswald text-[10px] font-bold tracking-[0.3em] uppercase text-[#1d2c48]/30 group-hover:text-gold transition-colors duration-500">
            {text}
          </span>
        </div>
      </div>
      
      {/* Background patterns */}
      <div className="absolute inset-0 z-[-1] opacity-[0.03] pointer-events-none overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-[10rem] font-black font-oswald text-[#1d2c48] rotate-12 select-none">
          STELLAR
        </div>
      </div>
    </div>
  )
}
