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
      "relative w-full h-full flex flex-col items-center justify-center bg-foreground/5 border border-black/5 group transition-all duration-500 rounded-[inherit]",
      className
    )}>
      <div className="relative">
        <div className="flex flex-col items-center gap-6">
          <div className="p-6 bg-white shadow-sm border border-black/5 group-hover:border-accent transition-all duration-500 rounded-full">
            <ImageIcon 
              className="text-accent transition-transform duration-500 group-hover:scale-110" 
              size={iconSize} 
              strokeWidth={1}
            />
          </div>
          <span className="font-oswald text-[9px] font-bold tracking-[0.4em] uppercase text-foreground/20 group-hover:text-accent transition-colors duration-500">
            {text}
          </span>
        </div>
      </div>
      
      {/* Background patterns */}
      <div className="absolute inset-0 z-[-1] opacity-[0.02] pointer-events-none overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-[12rem] font-serif italic text-foreground select-none">
          Stellar
        </div>
      </div>
    </div>
  )
}
